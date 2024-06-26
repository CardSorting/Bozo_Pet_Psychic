import React from 'react';

function Calendar({ psychicId, onSelectDate }) {
  const generateTimeSlots = () => {
    const slots = [];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1);  // Start from tomorrow
    for (let i = 0; i < 7; i++) {  // Generate slots for the next 7 days
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      for (let hour = 9; hour < 17; hour++) {  // 9 AM to 5 PM
        slots.push({
          id: `${date.toDateString()}-${hour}`,
          startTime: new Date(date.setHours(hour, 0, 0, 0)).toISOString(),
        });
      }
    }
    return slots;
  };

  const availableSlots = generateTimeSlots();

  const styles = {
    calendar: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
    },
    timeSlots: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '10px',
    },
    slot: {
      padding: '10px',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    slotHover: {
      backgroundColor: '#e6e6e6',
    },
  };

  return (
    <div style={styles.calendar}>
      <h2 style={styles.heading}>Select a Date and Time</h2>
      <div style={styles.timeSlots}>
        {availableSlots.map((slot) => (
          <button
            key={slot.id}
            onClick={() => onSelectDate(slot)}
            style={styles.slot}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.slotHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.slot.backgroundColor}
          >
            {new Date(slot.startTime).toLocaleString([], { 
              weekday: 'short', 
              month: 'short', 
              day: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit'
            })}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calendar;