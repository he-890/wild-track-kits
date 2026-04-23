function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
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
      </div>
    </header>
  );
}

export default Topbar;
