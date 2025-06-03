import React from 'react';

const Navbar = () => {
  return (
    <nav
      style={{
        width: '100%',
        background: 'rgba(30, 32, 60, 0.98)',
        boxShadow: '0 2px 16px rgba(30,32,60,0.12)',
        padding: '0 40px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backdropFilter: 'blur(6px)',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
          <ellipse cx="16" cy="16" rx="7" ry="11" fill="#fff" fillOpacity="0.13" />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6e8efb" />
              <stop offset="1" stopColor="#a777e3" />
            </linearGradient>
          </defs>
        </svg>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '2px' }}>
          Sanrakshak
        </span>
      </div>
      {/* Nav Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <a href="/" style={navLinkStyle}>
          Home
        </a>
        <a href="/about" style={navLinkStyle}>
          About
        </a>
        <a href="/login" style={navLinkStyle}>
          Login
        </a>
        <a href="/register" style={{ ...navLinkStyle, background: 'linear-gradient(90deg, #a777e3 0%, #6e8efb 100%)', color: '#fff', borderRadius: '8px', padding: '8px 18px', fontWeight: 600 }}>
          Register
        </a>
      </div>
    </nav>
  );
};

const navLinkStyle = {
  color: '#b3b3cc',
  textDecoration: 'none',
  fontSize: '1.05rem',
  fontWeight: 500,
  padding: '8px 0',
  transition: 'color 0.2s',
  borderBottom: '2px solid transparent',
  marginLeft: '2px',
  marginRight: '2px',
};

export default Navbar;