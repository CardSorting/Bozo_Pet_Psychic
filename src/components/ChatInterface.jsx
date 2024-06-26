import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const initialChatLog = [
  { sender: 'system', message: 'Welcome to your pet psychic reading!' },
  { sender: 'psychic', message: 'Hello! Im connecting with your pets energy. What would you like to know?' },
];

const psychicResponses = [
  "I sense your pet is feeling very content right now.",
  "Your pet has a strong connection to you. They appreciate your care.",
  "There's an energy of playfulness around your pet. They might want more playtime.",
  "I'm picking up on some dietary preferences. Has your pet's eating habit changed recently?",
  "Your pet seems to have a special spot in the house they consider their sanctuary.",
  "I'm sensing some past experiences that have shaped your pet's personality.",
  "Your pet has a unique way of communicating with you. Pay attention to their subtle cues.",
  "There's an adventurous spirit in your pet. They might enjoy new experiences.",
  "I'm feeling a strong bond between your pet and another family member.",
  "Your pet has some unspoken wishes. They might be trying to tell you something important."
];

function ChatInterface() {
  const [chatLog, setChatLog] = useState(initialChatLog);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { appointmentId } = useParams();
  const navigate = useNavigate();
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setChatLog(prevLog => [...prevLog, { sender: 'user', message: input }]);
    setInput('');
    setIsTyping(true);

    // Simulate psychic response
    setTimeout(() => {
      const randomResponse = psychicResponses[Math.floor(Math.random() * psychicResponses.length)];
      setChatLog(prevLog => [...prevLog, { 
        sender: 'psychic', 
        message: `${randomResponse} Regarding ${input.toLowerCase()}, ${Math.random() > 0.5 ? 'I sense positive energy' : 'there might be some concerns'}. Let me know if you want to explore this further.`
      }]);
      setIsTyping(false);
    }, 2000 + Math.random() * 2000); // Random delay between 2-4 seconds
  };

  const endSession = () => {
    setChatLog(prevLog => [...prevLog, 
      { sender: 'system', message: 'Thank you for your session. The chat will end now.' }
    ]);
    setTimeout(() => navigate('/profile'), 3000);
  };

  return (
    <div style={styles.chatInterface}>
      <h2 style={styles.heading}>Chat with Psychic - Appointment #{appointmentId}</h2>
      <div style={styles.chatLog}>
        {chatLog.map((msg, index) => (
          <div key={index} style={styles[msg.sender]}>
            <strong>{msg.sender === 'user' ? 'You' : msg.sender === 'psychic' ? 'Psychic' : 'System'}:</strong> {msg.message}
          </div>
        ))}
        {isTyping && <div style={styles.typing}>Psychic is typing...</div>}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={sendMessage} style={styles.inputForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={styles.input}
          disabled={isTyping}
        />
        <button type="submit" style={styles.sendButton} disabled={isTyping}>Send</button>
      </form>
      <button onClick={endSession} style={styles.endButton}>End Session</button>
    </div>
  );
}

const styles = {
  chatInterface: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  chatLog: {
    height: '400px',
    overflowY: 'scroll',
    border: '1px solid #ddd',
    padding: '10px',
    marginBottom: '20px',
    backgroundColor: '#fff',
    borderRadius: '4px',
  },
  user: {
    textAlign: 'right',
    margin: '10px 0',
    backgroundColor: '#e6f3ff',
    padding: '8px',
    borderRadius: '10px 10px 0 10px',
  },
  psychic: {
    textAlign: 'left',
    margin: '10px 0',
    backgroundColor: '#f0f0f0',
    padding: '8px',
    borderRadius: '10px 10px 10px 0',
  },
  system: {
    textAlign: 'center',
    fontStyle: 'italic',
    margin: '10px 0',
    color: '#666',
  },
  typing: {
    textAlign: 'left',
    fontStyle: 'italic',
    color: '#888',
  },
  inputForm: {
    display: 'flex',
    marginBottom: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px 0 0 4px',
  },
  sendButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '0 4px 4px 0',
  },
  endButton: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default ChatInterface;