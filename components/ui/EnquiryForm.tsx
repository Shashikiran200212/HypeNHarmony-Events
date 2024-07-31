import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EnquiryForm: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const templateParams = {
      name,
      mobile,
      email,
      message,
    };

    emailjs.send('service_tpmcd2p', 'template_uqos89a', templateParams, 'muly9Hdbi9ygSwCLN')
      .then((response) => {
        alert('Your message has been sent successfully!');
        setName('');
        setMobile('');
        setEmail('');
        setMessage('');
      }, (error) => {
        alert('Failed to send the message. Please try again later.');
        console.error('Failed to send email:', error);
      });
  };

  return (
    <div className="max-w-full   mx-4 sm:mx-6 lg:mx-8 p-6 border border-gray-300 rounded-lg bg-white bg-opacity-80 shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl overflow-hidden">
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-base"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-lg font-medium">Your Mobile:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-base"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-base"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            required
            className="w-full p-3 border border-gray-300 rounded-lg text-base"
          />
        </div>
        <div>
          <button type="submit" className="w-full p-3 bg-purple-600 text-white rounded-lg text-base hover:bg-purple-700 transition-colors ">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
