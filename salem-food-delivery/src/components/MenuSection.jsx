import { menuCategories } from "../data/menuData";

export default function MenuSection() {
  return (
    <section className="section section-soft" id="menu">
      <div className="container">
        <div className="section-heading">
          <span>Menu complet</span>
          <h2>Découvrez nos catégories et nos prix</h2>
          <p>
            Une carte claire, lisible et orientée commande pour aider le client
            à choisir vite.
          </p>
        </div>

        <div className="menu-category-grid">
          {menuCategories.map((category) => (
            <div className="menu-category-card" key={category.id}>
              <div className="menu-category-header">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>

              <div className="menu-items">
                {category.items.map((item, index) => (
                  <div className="menu-item" key={`${item.name}-${index}`}>
                    <div>
                      <h4>{item.name}</h4>
                    </div>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>

              {category.note && <div className="menu-note">{category.note}</div>}

              <a
                href="https://wa.me/237657184629"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline full-btn"
              >
                Commander cette catégorie
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}