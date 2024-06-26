import React, { useState } from 'react';
import PsychicList from '../components/PsychicList';
import Calendar from '../components/Calendar';
import BookingForm from '../components/BookingForm';

function Booking() {
  const [selectedPsychic, setSelectedPsychic] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="booking">
      <h1>Book a Pet Psychic Reading</h1>
      {!selectedPsychic && (
        <PsychicList onSelectPsychic={setSelectedPsychic} />
      )}
      {selectedPsychic && !selectedDate && (
        <Calendar 
          psychicId={selectedPsychic.id} 
          onSelectDate={setSelectedDate} 
        />
      )}
      {selectedPsychic && selectedDate && (
        <BookingForm 
          psychic={selectedPsychic} 
          date={selectedDate} 
        />
      )}
    </div>
  );
}

export default Booking;