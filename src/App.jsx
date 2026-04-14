import "./App.css";

function App() {
  const products = [
    {
      title: "Kits empreintes d’animaux",
      text: "Tampons de pattes réalistes imprimés en 3D pour créer des traces dans la boue, observer, dessiner et faire des moulages en plâtre.",
      price: "Dès CHF 29",
      emoji: "🐾",
    },
    {
      title: "Fiches pédagogiques",
      text: "Activités prêtes à l’emploi pour l’école dehors, l’observation, le vocabulaire et la description scientifique.",
      price: "Dès CHF 9",
      emoji: "📘",
    },
    {
      title: "Matériel de moulage et nettoyage",
      text: "Plâtre, brosses, sacs de rangement et accessoires pensés pour les activités de terrain et la classe.",
      price: "Dès CHF 6",
      emoji: "🧽",
    },
    {
      title: "Histoires et guides",
      text: "Histoires illustrées, guidages pour l’enseignant et idées pour prolonger chaque activité dans la nature.",
      price: "Dès CHF 12",
      emoji: "🌿",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Créer des traces dehors",
      text: "Appuyez la patte dans la boue, la terre ou un bac préparé pour obtenir des empreintes réalistes.",
    },
    {
      number: "02",
      title: "Observer et décrire",
      text: "Les enfants comparent les formes, discutent des indices et dessinent ce qu’ils remarquent comme de petits naturalistes.",
    },
    {
      number: "03",
      title: "Mouler avec du plâtre",
      text: "Transformez l’empreinte en moulage solide que les élèves peuvent conserver, comparer et exposer.",
    },
  ];

  const schoolPacks = [
    "Packs petits groupes",
    "Kits classe complète",
    "Fiches d’activités imprimables",
    "Guides pour l’enseignant",
  ];

  const suggested = [
    {
      title: "Kit nature découverte",
      text: "2 pattes + plâtre + brosse + fiche d’activité",
    },
    {
      title: "Pack classe",
      text: "6 pattes + guides + fiches imprimables + accessoires",
    },
    {
      title: "Pack histoires",
      text: "Histoire thématique + consignes d’observation + idées de prolongement",
    },
  ];

  const faq = [
    {
      q: "Les tampons de pattes sont-ils réalistes ?",
      a: "Oui. Ils sont conçus pour créer des empreintes crédibles qui favorisent l’observation et la comparaison.",
    },
    {
      q: "Est-ce adapté aux classes ?",
      a: "Oui. Les kits sont pensés pour l’école, l’éducation en plein air, les clubs nature et les activités en famille.",
    },
    {
      q: "Puis-je acheter uniquement des ressources pédagogiques numériques ?",
      a: "Oui. La boutique peut proposer des fiches imprimables, des guides et des histoires séparément.",
    },
    {
      q: "Puis-je demander un pack personnalisé ?",
      a: "Oui. Un formulaire pour les écoles ou événements peut être ajouté au site.",
    },
  ];

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-icon">🐾</div>
          <div>
            <p className="mini-label">Boutique d’éducation en plein air</p>
            <h1 className="brand-name">Wild Track Kits</h1>
          </div>
        </div>

        <nav className="main-nav">
          <a href="#products">Boutique</a>
          <a href="#how">Comment ça marche</a>
          <a href="#schools">Pour les écoles</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="top-actions">
          <button className="btn btn-light">Connexion</button>
          <button className="btn btn-dark">Panier (0)</button>
        </div>
      </header>

      <main>
        <section className="hero">
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
              <div className="animal-card">
                <span>🐾</span>
                <strong>Renard</strong>
                <small>Patte réaliste</small>
              </div>
              <div className="animal-card">
                <span>🐾</span>
                <strong>Loup</strong>
                <small>Patte réaliste</small>
              </div>
              <div className="animal-card">
                <span>🐾</span>
                <strong>Blaireau</strong>
                <small>Patte réaliste</small>
              </div>
              <div className="animal-card">
                <span>🐾</span>
                <strong>Cerf</strong>
                <small>Patte réaliste</small>
              </div>
            </div>

            <div className="highlight-grid">
              <div className="highlight-box">
                Conçu pour l’éducation en plein air et la manipulation
              </div>
              <div className="highlight-box">
                Activités claires et adaptées aux enfants
              </div>
              <div className="highlight-box">
                Accessoires utiles pour la classe et le terrain
              </div>
              <div className="highlight-box">
                Idéal pour enseignants, parents et animateurs
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section">
          <div className="section-header">
            <div>
              <p className="mini-label">Boutique</p>
              <h3>Tout le nécessaire pour une activité de terrain</h3>
            </div>
            <p className="section-side-text">
              Composez votre kit complet ou choisissez uniquement les ressources
              pédagogiques et accessoires utiles.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <div className="product-icon">{product.emoji}</div>
                <h4>{product.title}</h4>
                <p>{product.text}</p>
                <div className="product-footer">
                  <span>{product.price}</span>
                  <button className="btn btn-light btn-small">Voir</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="section section-soft">
          <div className="section-center">
            <p className="mini-label">Comment ça marche</p>
            <h3>Une activité simple avec une vraie profondeur pédagogique</h3>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <div className="step-number">{step.number}</div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="schools" className="section">
          <div className="school-layout">
            <div className="school-main">
              <p className="mini-label mini-label-light">Pour les écoles</p>
              <h3>Pour les enseignants, les écoles et les ateliers nature</h3>
              <p className="school-main-text">
                Proposez des activités marquantes qui mêlent sciences,
                observation, langage, créativité et lien avec la nature.
              </p>

              <div className="school-grid">
                {schoolPacks.map((item) => (
                  <div className="school-chip" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="school-side">
              <p className="mini-label">Packs suggérés</p>

              {suggested.map((item) => (
                <div className="bundle-card" key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              ))}

              <button className="btn btn-dark btn-full">
                Demander une offre école
              </button>
            </aside>
          </div>
        </section>

        <section id="faq" className="section section-soft">
          <div className="section-center">
            <p className="mini-label">FAQ</p>
            <h3>Questions fréquentes</h3>
          </div>

          <div className="faq-list">
            {faq.map((item) => (
              <article className="faq-card" key={item.q}>
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Wild Track Kits</strong>
          <p>Des empreintes réalistes pour découvrir et apprendre dehors.</p>
        </div>

        <div className="footer-actions">
          <button className="btn btn-light">Instagram</button>
          <button className="btn btn-light">Contact</button>
          <button className="btn btn-dark">Acheter</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
