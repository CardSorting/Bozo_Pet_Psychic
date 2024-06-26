import React from 'react';

const upcomingReadings = [
  { id: 1, psychic: "Luna Stargazer", pet: "Fluffy", date: "2024-06-28T14:00:00Z" },
  { id: 2, psychic: "Orion BarkReader", pet: "Rex", date: "2024-06-30T10:00:00Z" },
  { id: 3, psychic: "Willow Whiskers", pet: "Tweety", date: "2024-07-02T16:00:00Z" },
];

function UpcomingReadings() {
  return (
    <div className="upcoming-readings">
      <h2>Upcoming Readings</h2>
      {upcomingReadings.length > 0 ? (
        <ul>
          {upcomingReadings.map((reading) => (
            <li key={reading.id}>
              <p>Psychic: {reading.psychic}</p>
              <p>Pet: {reading.pet}</p>
              <p>Date: {new Date(reading.date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No upcoming readings scheduled.</p>
      )}
    </div>
  );
}

export default UpcomingReadings;