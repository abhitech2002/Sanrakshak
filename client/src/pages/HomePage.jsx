import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SpaceCard from "../components/SpaceCard";

const spaceCards = [
  {
    title: "Andromeda Galaxy",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
    description:
      "The nearest major galaxy to the Milky Way and one of the brightest Messier objects.",
  },
  {
    title: "Pillars of Creation",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    description:
      "Iconic towers of gas and dust in the Eagle Nebula, captured by the Hubble Space Telescope.",
  },
  {
    title: "The Milky Way",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description:
      "Our home galaxy, a barred spiral galaxy containing billions of stars.",
  },
];

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background:
            'linear-gradient(rgba(10,10,30,0.9), rgba(10,10,30,0.95)), url("https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1500&q=80") center/cover no-repeat',
          color: "#fff",
          padding: 0,
          margin: 0,
        }}
      >
        <section
          style={{
            textAlign: "center",
            padding: "80px 20px 40px 20px",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "10px",
              letterSpacing: "2px",
            }}
          >
            Explore the Universe
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#b3b3cc",
              marginBottom: "40px",
            }}
          >
            Discover the wonders of space with breathtaking images and
            fascinating facts.
          </p>
        </section>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
            padding: "0 20px 60px 20px",
            flex: 1, // This makes the section grow and push the footer down
          }}
        >
          {spaceCards.map((card, idx) => (
            <SpaceCard
              key={idx}
              title={card.title}
              image={card.image}
              description={card.description}
            />
          ))}
        </section>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
