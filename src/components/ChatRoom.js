import React, { useState, useEffect, useRef } from 'react';
import './ChatRoom.css';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('User'); 

  const socket = useRef(null);

  useEffect(() => {
    // Simulate connecting to a chat server (mock socket.io)
    socket.current = new WebSocket('ws://localhost:8080/chat'); // Replace with your WebSocket server URL

    socket.current.onopen = () => {
      console.log('Connected to chat server');
    };

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.current.onclose = () => {
      console.log('Disconnected from chat server');
    };

    return () => {
      socket.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        username,
        text: newMessage.trim(),
        timestamp: new Date().toISOString(),
      };

      // Send message to the server
      socket.current.send(JSON.stringify(message));

      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-room">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.username === username ? 'own' : ''}`}>
            <span className="username">{message.username}:</span> {message.text}
            <span className="timestamp">{new Date(message.timestamp).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
