import React from 'react';
import UpcomingReadings from '../components/UpcomingReadings';
import PetProfiles from '../components/PetProfiles';
import DailyMoodForecast from '../components/DailyMoodForecast';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Pet Psychic Dashboard</h1>
      <div className="dashboard-grid">
        <UpcomingReadings />
        <PetProfiles />
        <DailyMoodForecast />
      </div>
    </div>
  );
}

export default Dashboard;