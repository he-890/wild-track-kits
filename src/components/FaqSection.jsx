function FaqSection({ faq }) {
  return (
    <section id="faq" className="section section-soft">
      <div className="section-inner">
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
      </div>
    </section>
  );
}

export default FaqSection;
