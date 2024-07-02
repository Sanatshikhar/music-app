import React from 'react';
import './Suggestions.css';

const Suggestions = ({ mixes }) => {
  return (
    <div className="suggestions">
      <h2>Suggestion Mixes</h2>
      <div className="mixes">
        {mixes.map(mix => (
          <div key={mix.id} className="mix">
            <img src={mix.cover} alt={mix.title} className="mix-cover" />
            <div className="mix-info">
              <h3>{mix.title}</h3>
              <p>{mix.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
