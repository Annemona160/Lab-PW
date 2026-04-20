import { useState } from 'react';

function ContactForm() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  function handleSubmit() {
    
    if (name === '' || email === '' || message === '') {
      setFeedback('Completeaza toate campurile!');
    } else {
      setFeedback('Multumim, ' + name + '!');
    }
  }

  return (
    <div>
      <h3>Formular de contact</h3>

      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Nume" 
      />
      <br />

      
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <br />

      <textarea 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Mesaj" 
      />
      <br />

      <button onClick={handleSubmit}>Submit</button>
      
      // Afișare feedback
      <p>{feedback}</p>
    </div>
  );
}

export default ContactForm;