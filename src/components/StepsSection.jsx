function StepsSection({ steps }) {
  return (
    <section id="how" className="section section-soft">
      <div className="section-inner">
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
      </div>
    </section>
  );
}

export default StepsSection;
