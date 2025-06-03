import React from 'react';

const spaceCards = [
  {
    title: 'Andromeda Galaxy',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80',
    description: 'The nearest major galaxy to the Milky Way and one of the brightest Messier objects.',
  },
  {
    title: 'Pillars of Creation',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    description: 'Iconic towers of gas and dust in the Eagle Nebula, captured by the Hubble Space Telescope.',
  },
  {
    title: 'The Milky Way',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'Our home galaxy, a barred spiral galaxy containing billions of stars.',
  },
];

const HomePage = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(10,10,30,0.9), rgba(10,10,30,0.95)), url("https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1500&q=80") center/cover no-repeat',
        color: '#fff',
        padding: 0,
        margin: 0,
      }}
    >
      <section style={{ textAlign: 'center', padding: '80px 20px 40px 20px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px', letterSpacing: '2px' }}>
          Explore the Universe
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#b3b3cc', marginBottom: '40px' }}>
          Discover the wonders of space with breathtaking images and fascinating facts.
        </p>
      </section>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          flexWrap: 'wrap',
          padding: '0 20px 60px 20px',
        }}
      >
        {spaceCards.map((card, idx) => (
          <div
            key={idx}
            style={{
              background: 'rgba(30, 30, 60, 0.85)',
              borderRadius: '18px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
              width: '320px',
              overflow: 'hidden',
              marginBottom: '24px',
              border: '1px solid #222244',
              transition: 'transform 0.2s',
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '1.5rem', margin: '0 0 10px 0', color: '#e0e0ff' }}>{card.title}</h2>
              <p style={{ color: '#b3b3cc', fontSize: '1rem' }}>{card.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;