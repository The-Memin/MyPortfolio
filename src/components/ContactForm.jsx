// ContactForm.jsx

import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Envía el formulario a Formspree
    const response = await fetch('https://formspree.io/f/mzzpplzw', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert('¡Mensaje enviado con éxito!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <textarea placeholder="Mensaje" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
