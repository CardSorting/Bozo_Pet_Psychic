import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const initialPets = [
  { id: 1, name: "Fluffy", type: "Cat", age: 3, notes: "Loves tuna" },
  { id: 2, name: "Rex", type: "Dog", age: 5, notes: "Enjoys long walks" },
];

const initialAppointments = [
  { id: 1, petId: 1, psychicName: "Madame Whiskers", date: "2024-07-01T10:00:00Z", checkedIn: false },
  { id: 2, petId: 2, psychicName: "Dr. Woofenstein", date: "2024-07-03T14:00:00Z", checkedIn: false },
];

function Profile() {
  const [pets, setPets] = useState(initialPets);
  const [appointments, setAppointments] = useState(initialAppointments);
  const [newPet, setNewPet] = useState({ name: '', type: '', age: '', notes: '' });

  const addPet = (e) => {
    e.preventDefault();
    const pet = { ...newPet, id: pets.length + 1 };
    setPets([...pets, pet]);
    setNewPet({ name: '', type: '', age: '', notes: '' });
  };

  const updatePetNotes = (id, notes) => {
    setPets(pets.map(pet => pet.id === id ? { ...pet, notes } : pet));
  };

  const cancelAppointment = (id) => {
    setAppointments(appointments.filter(app => app.id !== id));
  };

  const checkInToAppointment = (id) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, checkedIn: true } : app
    ));
  };

  return (
    <div style={styles.profile}>
      <h1 style={styles.heading}>Your Profile</h1>

      <section style={styles.section}>
        <h2>Your Pets</h2>
        {pets.map(pet => (
          <div key={pet.id} style={styles.pet}>
            <h3>{pet.name} ({pet.type})</h3>
            <p>Age: {pet.age}</p>
            <textarea
              value={pet.notes}
              onChange={(e) => updatePetNotes(pet.id, e.target.value)}
              placeholder="Add notes about your pet"
              style={styles.textarea}
            />
          </div>
        ))}
      </section>

      <section style={styles.section}>
        <h2>Add a New Pet</h2>
        <form onSubmit={addPet} style={styles.form}>
          <input
            type="text"
            placeholder="Pet Name"
            value={newPet.name}
            onChange={(e) => setNewPet({...newPet, name: e.target.value})}
            required
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Pet Type"
            value={newPet.type}
            onChange={(e) => setNewPet({...newPet, type: e.target.value})}
            required
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Pet Age"
            value={newPet.age}
            onChange={(e) => setNewPet({...newPet, age: e.target.value})}
            required
            style={styles.input}
          />
          <textarea
            placeholder="Pet Notes"
            value={newPet.notes}
            onChange={(e) => setNewPet({...newPet, notes: e.target.value})}
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Add Pet</button>
        </form>
      </section>

      <section style={styles.section}>
        <h2>Your Appointments</h2>
        {appointments.map(app => (
          <div key={app.id} style={styles.appointment}>
            <p>Pet: {pets.find(pet => pet.id === app.petId)?.name}</p>
            <p>Psychic: {app.psychicName}</p>
            <p>Date: {new Date(app.date).toLocaleString()}</p>
            {!app.checkedIn ? (
              <button onClick={() => checkInToAppointment(app.id)} style={styles.checkInButton}>
                Check In
              </button>
            ) : (
              <Link to={`/chat/${app.id}`} style={styles.startChatButton}>
                Start Chat
              </Link>
            )}
            <button onClick={() => cancelAppointment(app.id)} style={styles.cancelButton}>
              Cancel Appointment
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

const styles = {
  profile: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: '30px',
  },
  pet: {
    backgroundColor: '#f5f5f5',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '10px 0',
    padding: '8px',
    fontSize: '16px',
  },
  textarea: {
    margin: '10px 0',
    padding: '8px',
    fontSize: '16px',
    minHeight: '100px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  },
  appointment: {
    backgroundColor: '#e6f3ff',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '8px',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '8px',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
  },
  checkInButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '8px',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px',
  },
  startChatButton: {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: '8px',
    fontSize: '14px',
    textDecoration: 'none',
    borderRadius: '4px',
    marginRight: '10px',
    display: 'inline-block',
  },
};

export default Profile;
