import React from 'react';

const psychics = [
  { id: 1, name: "Luna Stargazer", specialties: ["Cat Whisperer", "Dog Dreams"], rating: 4.8, avatar: "https://example.com/luna.jpg", pricePerSession: 50 },
  { id: 2, name: "Orion BarkReader", specialties: ["Canine Auras", "Feline Fortunes"], rating: 4.6, avatar: "https://example.com/orion.jpg", pricePerSession: 45 },
  { id: 3, name: "Willow Whiskers", specialties: ["Rodent Readings", "Bird Brainwaves"], rating: 4.9, avatar: "https://example.com/willow.jpg", pricePerSession: 55 },
];

function PsychicList({ onSelectPsychic }) {
  return (
    <div className="psychic-list">
      <h2>Choose a Pet Psychic</h2>
      <ul>
        {psychics.map((psychic) => (
          <li key={psychic.id} onClick={() => onSelectPsychic(psychic)}>
            <img src={psychic.avatar} alt={psychic.name} />
            <h3>{psychic.name}</h3>
            <p>{psychic.specialties.join(', ')}</p>
            <p>Rating: {psychic.rating}/5</p>
            <p>Price: ${psychic.pricePerSession} per session</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PsychicList;