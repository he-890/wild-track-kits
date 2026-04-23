function SchoolsSection({ schoolPacks, suggested }) {
  return (
    <section id="schools" className="section">
      <div className="section-inner">
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
      </div>
    </section>
  );
}

export default SchoolsSection;
