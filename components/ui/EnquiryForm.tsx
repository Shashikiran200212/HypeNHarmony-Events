import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EnquiryForm: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [events, setEvents] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const templateParams = {
        name,
        mobile,
        email,
        message,
        events,
        date,
        location,
      };

      // Log the templateParams for debugging
      console.log('Submitting form with params:', templateParams);

      await emailjs.send('service_tpmcd2p', 'template_uqos89a', templateParams, 'muly9Hdbi9ygSwCLN');
      alert('Your message has been sent successfully!');
      
      // Clear form fields after successful submission
      setName('');
      setMobile('');
      setEmail('');
      setMessage('');
      setEvents('');
      setDate('');
      setLocation('');
    } catch (error) {
      alert('Failed to send the message. Please try again later.');
      console.error('Failed to send email:', error);
    }
  };

  return (
    <div className="max-w-full sm:max-w-2xl mx-auto p-6 border border-gray-300 rounded-lg bg-white bg-opacity-80 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
      <form onSubmit={handleSubmit} className="space-y-0 md:space-y-4 text-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-4">
          <div className="mb-2 md:mb-4">
            <label htmlFor="name" className="block text-base md:text-lg font-medium">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full h-8 md:w-full md:h-12 p-3 border border-gray-300 rounded-lg text-base"
            />
          </div>
          <div className="mb-2 md:mb-4">
            <label htmlFor="mobile" className="block text-base md:text-lg font-medium">Your Mobile:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="w-full h-8 md:w-full md:h-12 p-3 border border-gray-300 rounded-lg text-base"
            />
          </div>
          <div className="mb-2 md:mb-4">
            <label htmlFor="email" className="block text-base md:text-lg font-medium">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-8 md:w-full md:h-12 p-3 border border-gray-300 rounded-lg text-base"
            />
          </div>
          <div className="mb-2 md:mb-4">
            <label htmlFor="date" className="block text-base md:text-lg font-medium">Event Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full h-8 md:w-full md:h-12 p-3 border border-gray-300 rounded-lg text-base"
            />
          </div>
        </div>

        <div className="mb-2 md:mb-4">
          <label htmlFor="events" className="block text-base md:text-lg font-medium">Event Type:</label>
          <textarea
            id="events"
            name="events"
            value={events}
            onChange={(e) => setEvents(e.target.value)} 
            required
            className="w-full h-8 md:w-full md:h-12 p-3 border border-gray-300 rounded-lg text-base"
          />
        </div>
        <div className="mb-2 md:mb-4">
          <label htmlFor="location" className="block text-base md:text-lg font-medium">Event Location:</label>
          <textarea
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            rows={2}
            required
            className="w-full h-8 md:w-full md:h-24 p-3 border border-gray-300 rounded-lg text-base"
          />
        </div>
        <div className="mb-2 md:mb-4">
          <label htmlFor="message" className="block text-base md:text-lg font-medium">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            required
            className="w-full h-8 md:w-full md:h-48 p-3 border border-gray-300 rounded-lg text-base"
          />
        </div>
        <div>
          <button type="submit" className="w-full p-3 bg-purple-600 text-white rounded-lg text-base hover:bg-purple-700 transition-colors">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
