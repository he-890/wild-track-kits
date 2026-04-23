const featuredAnimals = [
  "Renard",
  "Loup",
  "Blaireau",
  "Cerf",
];

const highlights = [
  "Conçu pour l’éducation en plein air et la manipulation",
  "Activités claires et adaptées aux enfants",
  "Accessoires utiles pour la classe et le terrain",
  "Idéal pour enseignants, parents et animateurs",
];

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="pill">
            Apprentissage concret de la nature pour les enfants
          </div>
          <h2>Faites vivre les traces animales.</h2>
          <p className="hero-text">
            Kits de pattes réalistes, fiches d’activités, histoires, matériel
            de moulage en plâtre et accessoires pratiques pour explorer dehors.
          </p>

          <div className="hero-cta">
            <button className="btn btn-dark">Explorer la boutique</button>
            <button className="btn btn-light">Voir les packs écoles</button>
          </div>
        </div>

        <div className="hero-panel">
          <div className="animal-grid">
            {featuredAnimals.map((animal) => (
              <div className="animal-card" key={animal}>
                <span>🐾</span>
                <strong>{animal}</strong>
                <small>Patte réaliste</small>
              </div>
            ))}
          </div>

          <div className="highlight-grid">
            {highlights.map((highlight) => (
              <div className="highlight-box" key={highlight}>
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
