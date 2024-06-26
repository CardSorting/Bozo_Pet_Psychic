import React from 'react';

const moodEmojis = {
  Excited: "😃",
  Happy: "😊",
  Calm: "😌",
  Curious: "🧐",
  Playful: "😺",
  Sleepy: "😴",
};

function DailyMoodForecast() {
  const generateMoodForecast = () => {
    const moods = Object.keys(moodEmojis);
    const forecast = {};
    pets.forEach(pet => {
      forecast[pet.name] = moods[Math.floor(Math.random() * moods.length)];
    });
    return forecast;
  };

  const moodForecast = generateMoodForecast();

  return (
    <div className="daily-mood-forecast">
      <h2>Today's Pet Mood Forecast</h2>
      <ul>
        {Object.entries(moodForecast).map(([petName, mood]) => (
          <li key={petName}>
            {petName}: {mood} {moodEmojis[mood]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DailyMoodForecast;