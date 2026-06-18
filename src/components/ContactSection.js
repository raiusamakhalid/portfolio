import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Phone } from 'lucide-react';

const floatingIcons = [
  { src: '/icons/react.svg',      top: '8%',  left: '68%', size: 44, delay: 0    },
  { src: '/icons/javascript.svg', top: '6%',  left: '78%', size: 38, delay: 0.3  },
  { src: '/icons/typescript.svg', top: '22%', left: '82%', size: 36, delay: 0.6  },
  { src: '/icons/nodejs.svg',     top: '38%', left: '75%', size: 40, delay: 0.9  },
  { src: '/icons/aws.svg',        top: '18%', left: '90%', size: 34, delay: 0.4  },
  { src: '/icons/github.svg',     top: '52%', left: '85%', size: 36, delay: 0.7  },
  { src: '/icons/mongodb.svg',    top: '65%', left: '72%', size: 38, delay: 0.2  },
  { src: '/icons/postgresql.svg', top: '72%', left: '88%', size: 34, delay: 1.0  },
];

const inputStyle = {
  width: '100%',
  background: 'rgba(5,8,22,0.7)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  padding: '13px 16px',
  color: '#fff',
  fontSize: 14,
  fontFamily: 'Poppins, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const ContactSection = ({ aboutMe }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:${aboutMe.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-12 lg:px-24 overflow-hidden"
      style={{ background: '#050816', minHeight: '100vh' }}
    >
      {/* Floating tech icons — desktop only */}
      {floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: icon.top,
            left: icon.left,
            width: icon.size + 16,
            height: icon.size + 16,
            borderRadius: 12,
            background: 'rgba(19,23,45,0.85)',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(6px)',
            zIndex: 1,
          }}
          className="hidden lg:flex"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: icon.delay }}
          whileHover={{ scale: 1.15, borderColor: 'rgba(145,94,255,0.5)' }}
        >
          <img src={icon.src} alt="" style={{ width: icon.size, height: icon.size, objectFit: 'contain' }} />
        </motion.div>
      ))}

      {/* Card */}
      <div ref={ref} className="relative max-w-2xl mx-auto" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="p-6 sm:p-10"
          style={{
            background: 'linear-gradient(135deg, #131727 0%, #0e1422 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 20,
            boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
          }}
        >
          {/* Top row: GET IN TOUCH + phone */}
          <div className="flex items-center justify-between mb-6">
            <p
              style={{
                color: '#6b7280',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Get In Touch
            </p>
            {aboutMe.phone && (
              <a
                href={`tel:${aboutMe.phone}`}
                className="flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ color: '#915EFF' }}
              >
                <Phone size={13} />
                {aboutMe.phone}
              </a>
            )}
          </div>

          {/* Heading */}
          <h2
            className="font-bold text-white text-center mb-10"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.05 }}
          >
            Contact.
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="flex items-center gap-1.5 text-xs font-medium mb-2"
                  style={{ color: '#aaa6c3' }}
                >
                  <User size={12} style={{ color: '#915EFF' }} />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(145,94,255,0.55)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
              </div>
              <div>
                <label
                  className="flex items-center gap-1.5 text-xs font-medium mb-2"
                  style={{ color: '#aaa6c3' }}
                >
                  <Mail size={12} style={{ color: '#915EFF' }} />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(145,94,255,0.55)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                className="flex items-center gap-1.5 text-xs font-medium mb-2"
                style={{ color: '#aaa6c3' }}
              >
                <MessageSquare size={12} style={{ color: '#915EFF' }} />
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={`Hey ${aboutMe.name.split(' ')[0]}, love the website! I'd like to chat about some opportunities you might like! 🎉`}
                required
                rows={7}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(145,94,255,0.55)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>

            {/* Send button — full width, purple→pink gradient */}
            <motion.button
              type="submit"
              className="flex items-center justify-center gap-2 w-full font-bold text-white rounded-xl"
              style={{
                height: 54,
                fontSize: 15,
                background: sent
                  ? 'linear-gradient(90deg, #22c55e, #16a34a)'
                  : 'linear-gradient(90deg, #915EFF 0%, #ec4899 100%)',
                boxShadow: sent
                  ? '0 4px 24px rgba(34,197,94,0.35)'
                  : '0 4px 28px rgba(145,94,255,0.45)',
                letterSpacing: '0.02em',
                fontFamily: 'Poppins, sans-serif',
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 6px 36px rgba(145,94,255,0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={16} />
              {sent ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
