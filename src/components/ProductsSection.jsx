function ProductsSection({ products }) {
  return (
    <section id="products" className="section">
      <div className="section-inner">
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
      </div>
    </section>
  );
}

export default ProductsSection;
