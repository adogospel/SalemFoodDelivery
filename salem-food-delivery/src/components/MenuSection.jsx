import { useMemo, useState } from "react";
import { menuItems, menuNotes } from "../data/menuData";
import { buildOrderMessage, buildWhatsAppLink } from "../utils/whatsapp";

const filters = [
  { id: "all", label: "Tous" },
  { id: "plats", label: "Plats" },
  { id: "traditionnels", label: "Plats Traditionnels" },
  { id: "desserts", label: "Desserts" },
  { id: "snacks", label: "Snacks" },
  { id: "salades", label: "Salades" },
];

export default function MenuSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return menuItems;
    return menuItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section section-soft" id="menu">
      <div className="container">
        <div className="section-heading">
          <span>Menu complet</span>
          <h2>Découvrez nos plats, desserts, snacks et spécialités</h2>
          <p>
            Filtrez rapidement les catégories et commandez directement le plat
            qui vous donne envie.
          </p>
        </div>

        <div className="menu-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`menu-filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {(activeFilter === "plats" || activeFilter === "traditionnels") &&
          menuNotes[activeFilter] && (
            <div className="menu-note menu-note-global">
              {menuNotes[activeFilter]}
            </div>
          )}

        <div className="menu-cards-grid">
          {filteredItems.map((item) => (
            <article className="menu-dish-card" key={item.id}>
              <div className="menu-dish-image-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-dish-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="menu-dish-body">
                <small>{item.categoryLabel}</small>
                <h3>{item.name}</h3>
                <p>{item.description}</p>

                <div className="menu-dish-bottom">
                  <strong>{item.price}</strong>
                  <a
                    href={buildWhatsAppLink(buildOrderMessage(item.name))}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary small-btn"
                  >
                    Commander
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}