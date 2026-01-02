import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'Please fill all fields.' });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    if (loading) return; // prevent double submit

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        'service_nz2oktw',      // Service ID
        'template_t15xmkb',     // Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        'E7dKhCkcxtumsCDFI'      // Public Key
      );

      setStatus({
        type: 'success',
        text: 'Message sent successfully! I will get back to you soon.',
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        text: 'Failed to send message. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-14 bg-[#020617]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

        <p className="text-gray-400 mb-8">
          Feel free to reach out for collaborations, opportunities, or just a friendly hello.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded bg-slate-900 text-white outline-none focus:ring-2 focus:ring-purple-500"
            disabled={loading}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded bg-slate-900 text-white outline-none focus:ring-2 focus:ring-purple-500"
            disabled={loading}
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded bg-slate-900 text-white outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p
              className={`text-sm mt-2 ${
                status.type === 'success'
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
