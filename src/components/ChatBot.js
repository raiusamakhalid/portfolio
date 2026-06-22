import React, { useState, useRef, useEffect } from 'react';

const API_URL = process.env.REACT_APP_CHATBOT_API_URL;
const API_KEY = process.env.REACT_APP_CHATBOT_API_KEY;

const ACCENT = '#A3C72F';
const BG_DARK = '#0D0E17';
const BG_CARD = '#13141f';
const BG_INPUT = '#1a1b2e';
const BORDER = 'rgba(163,199,47,0.2)';

const QUICK_QUESTIONS = [
  'What are your skills?',
  'Tell me about your experience',
  'What projects have you built?',
  'How can I contact you?',
];

const BOT_WELCOME = "Hi! I'm Usama's portfolio assistant 👋\nAsk me anything about his skills, experience, projects, or education!";

function renderTokens(line) {
  // Split on **bold** and [link](url) simultaneously
  const tokens = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return tokens.map((token, j) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return <strong key={j} style={{ color: ACCENT }}>{token.slice(2, -2)}</strong>;
    }
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <a key={j} href={link[2]} target="_blank" rel="noopener noreferrer"
          style={{ color: ACCENT, textDecoration: 'underline' }}>
          {link[1]}
        </a>
      );
    }
    return token;
  });
}

function formatAnswer(text) {
  return text.split('\n').map((line, i) =>
    !line.trim()
      ? <br key={i} />
      : <div key={i} style={{ marginBottom: 2 }}>{renderTokens(line)}</div>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: BOT_WELCOME },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function sendMessage(text) {
    const question = text.trim();
    if (!question) return;

    setMessages((prev) => [...prev, { from: 'user', text: question }]);
    setInput('');
    setTyping(true);

    try {
      const res = await fetch(API_URL + '/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        setMessages((prev) => [...prev, { from: 'bot', text: "Sorry, I couldn't reach the server. Please try again!" }]);
        return;
      }

      // Add an empty bot message and stream chunks into it
      setMessages((prev) => [...prev, { from: 'bot', text: '' }]);
      setTyping(false);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop(); // keep incomplete last line

        for (const line of lines) {
          if (!line.startsWith('data:')) continue;
          const payload = line.slice(5).trim();
          if (payload === '[DONE]') break;

          try {
            const { text: chunk } = JSON.parse(payload);
            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = {
                ...updated[updated.length - 1],
                text: updated[updated.length - 1].text + chunk,
              };
              return updated;
            });
          } catch { /* skip malformed chunk */ }
        }
      }
    } catch {
      setMessages((prev) => [...prev, { from: 'bot', text: "Connection error. Make sure the server is running!" }]);
    } finally {
      setTyping(false);
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chatbot"
        style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 1000,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${ACCENT}, #6fcf4a)`,
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 4px 24px rgba(163,199,47,0.4)`,
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = `0 6px 32px rgba(163,199,47,0.55)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = `0 4px 24px rgba(163,199,47,0.4)`;
        }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BG_DARK} strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BG_DARK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 96,
            right: 28,
            zIndex: 999,
            width: 360,
            maxWidth: 'calc(100vw - 40px)',
            background: BG_CARD,
            borderRadius: 16,
            border: `1px solid ${BORDER}`,
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'chatSlideIn 0.2s ease',
          }}
        >
          {/* Header */}
          <div style={{
            padding: '14px 18px',
            background: `linear-gradient(135deg, rgba(163,199,47,0.12), rgba(163,199,47,0.05))`,
            borderBottom: `1px solid ${BORDER}`,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: `linear-gradient(135deg, ${ACCENT}, #6fcf4a)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, flexShrink: 0,
            }}>
              🤖
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: 14, fontFamily: 'Poppins, sans-serif' }}>
                Usama's Assistant
              </div>
              <div style={{ color: ACCENT, fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, display: 'inline-block' }} />
                Online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '14px 14px 8px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            maxHeight: 320,
            minHeight: 200,
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '82%',
                  padding: '9px 13px',
                  borderRadius: msg.from === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                  background: msg.from === 'user'
                    ? `linear-gradient(135deg, ${ACCENT}, #6fcf4a)`
                    : BG_INPUT,
                  color: msg.from === 'user' ? BG_DARK : '#cdd6f4',
                  fontSize: 13,
                  lineHeight: 1.5,
                  fontFamily: 'Poppins, sans-serif',
                  border: msg.from === 'bot' ? `1px solid rgba(255,255,255,0.07)` : 'none',
                  fontWeight: msg.from === 'user' ? 500 : 400,
                  whiteSpace: msg.from === 'user' ? 'pre-wrap' : 'normal',
                }}>
                  {msg.from === 'bot' ? formatAnswer(msg.text) : msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '9px 13px',
                  borderRadius: '14px 14px 14px 4px',
                  background: BG_INPUT,
                  border: `1px solid rgba(255,255,255,0.07)`,
                  color: ACCENT,
                  fontSize: 13,
                  fontFamily: 'Poppins, sans-serif',
                  fontStyle: 'italic',
                  animation: 'thinkingPulse 1.2s ease-in-out infinite',
                }}>
                  Thinking...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick questions */}
          {messages.length <= 1 && (
            <div style={{ padding: '0 12px 8px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {QUICK_QUESTIONS.map((q) => (
                <button key={q} onClick={() => sendMessage(q)} style={{
                  padding: '5px 11px',
                  borderRadius: 20,
                  border: `1px solid ${BORDER}`,
                  background: 'transparent',
                  color: ACCENT,
                  fontSize: 11,
                  cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                  transition: 'background 0.15s',
                }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(163,199,47,0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            display: 'flex',
            gap: 8,
            padding: '10px 12px',
            borderTop: `1px solid ${BORDER}`,
            background: BG_INPUT,
          }}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#cdd6f4',
                fontSize: 13,
                fontFamily: 'Poppins, sans-serif',
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim()}
              style={{
                width: 34, height: 34,
                borderRadius: '50%',
                background: input.trim() ? `linear-gradient(135deg, ${ACCENT}, #6fcf4a)` : 'rgba(163,199,47,0.15)',
                border: 'none',
                cursor: input.trim() ? 'pointer' : 'default',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.15s',
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke={input.trim() ? BG_DARK : ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatSlideIn {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes thinkingPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}
