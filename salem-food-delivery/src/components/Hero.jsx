import { ArrowRight, Clock3, MapPin, Star } from "lucide-react";
import { buildOrderMessage, buildWhatsAppLink } from "../utils/whatsapp";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-badge">Cuisine Camerounaise & Ivoirienne</span>
          <h1>
            Des plats <span>savoureux</span>, bien présentés et livrés à Douala
          </h1>
          <p>
            Salem Food Delivery met à l’honneur des recettes locales et
            généreuses. Commandez vos plats préférés, nous livrons de 11h à 18h
            et profitez d’une expérience gourmande, rapide et soignée.
          </p>

          <div className="hero-actions">
            <a
              href={buildWhatsAppLink(buildOrderMessage())}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Commander sur WhatsApp
              <ArrowRight size={18} />
            </a>

            <a href="#menu" className="btn btn-soft">
              Voir le menu
            </a>
          </div>

          <div className="hero-points">
            <div>
              <MapPin size={18} />
              <span>Douala, Logbessou</span>
            </div>
            <div>
              <Clock3 size={18} />
              <span>Livraison : 11h - 18h</span>
            </div>
            <div>
              <Star size={18} />
              <span>Spécialité : Poulet Mayo</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card hero-card-main">
            <img
              src="https://cdn.aistoucuisine.com/assets/e2ac865a-9f0e-4af3-a398-87b2f09e8a0a.webp?format=webp&quality=75&width=1536"
              alt="Plat spécial Salem Food Delivery"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="overlay-card">
              <span className="mini-tag">Best Seller</span>
              <h3>Poulet Mayo</h3>
              <p>Avec frites de plantain + attiéké</p>
              <strong>À partir de 3000 FCFA</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}