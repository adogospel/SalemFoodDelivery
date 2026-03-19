import { featuredDishes } from "../data/menuData";
import { buildOrderMessage, buildWhatsAppLink } from "../utils/whatsapp";

export default function FeaturedDishes() {
  return (
    <section className="section" id="featured">
      <div className="container">
        <div className="section-heading">
          <span>Nos incontournables</span>
          <h2>Les plats à mettre immédiatement en valeur</h2>
          <p>
            Ces plats doivent être les stars du site, car ils déclenchent le
            plus facilement l’envie de commander.
          </p>
        </div>

        <div className="featured-grid">
          {featuredDishes.map((dish) => (
            <article className="featured-card" key={dish.id}>
              <div className="featured-image-wrap">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="featured-image"
                  loading="lazy"
                  decoding="async"
                />
                <span className="featured-badge">{dish.badge}</span>
              </div>

              <div className="featured-body">
                <small>{dish.category}</small>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>

                <div className="featured-bottom">
                  <strong>{dish.price}</strong>
                  <a
                    href={buildWhatsAppLink(buildOrderMessage(dish.name))}
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