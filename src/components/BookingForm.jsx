import React, { useState } from 'react';

const pets = [
  { id: 1, name: "Fluffy", type: "Cat" },
  { id: 2, name: "Rex", type: "Dog" },
  { id: 3, name: "Tweety", type: "Bird" },
];

function BookingForm({ psychic, date }) {
  const [selectedPet, setSelectedPet] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      psychicId: psychic.id,
      psychicName: psychic.name,
      dateTime: date.startTime,
      petId: selectedPet,
      petName: pets.find(pet => pet.id === parseInt(selectedPet))?.name,
      specialRequests,
    };
    console.log('Booking submitted:', bookingData);
    alert('Booking successful! Check the console for details.');
  };

  return (
    <div className="booking-form">
      <h2>Finalize Your Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pet-select">Choose a pet:</label>
          <div className="pet-selection">
            {pets.map((pet) => (
              <label key={pet.id} className="pet-option">
                <input
                  type="radio"
                  name="pet"
                  value={pet.id}
                  checked={selectedPet === pet.id.toString()}
                  onChange={(e) => setSelectedPet(e.target.value)}
                />
                <span className="pet-name">{pet.name}</span>
                <span className="pet-type">{pet.type}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="special-requests">Special Requests:</label>
          <textarea
            id="special-requests"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="Any special requests for the psychic?"
          />
        </div>
        <div className="booking-summary">
          <h3>Booking Summary</h3>
          <p><strong>Psychic:</strong> {psychic.name}</p>
          <p><strong>Date:</strong> {new Date(date.startTime).toLocaleString()}</p>
          <p><strong>Price:</strong> ${psychic.pricePerSession}</p>
          {selectedPet && (
            <p><strong>Pet:</strong> {pets.find(pet => pet.id === parseInt(selectedPet))?.name} ({pets.find(pet => pet.id === parseInt(selectedPet))?.type})</p>
          )}
        </div>
        <button type="submit" className="submit-button" disabled={!selectedPet}>Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;