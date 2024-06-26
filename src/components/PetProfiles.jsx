import React from 'react';

const pets = [
  { id: 1, name: "Fluffy", type: "Cat", age: 3, zodiacSign: "Leo" },
  { id: 2, name: "Rex", type: "Dog", age: 5, zodiacSign: "Aries" },
  { id: 3, name: "Tweety", type: "Bird", age: 1, zodiacSign: "Gemini" },
];

function PetProfiles() {
  return (
    <div className="pet-profiles">
      <h2>Your Pet Profiles</h2>
      <div className="pet-list">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <h3>{pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p>Age: {pet.age} years</p>
            <p>Zodiac Sign: {pet.zodiacSign}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetProfiles;