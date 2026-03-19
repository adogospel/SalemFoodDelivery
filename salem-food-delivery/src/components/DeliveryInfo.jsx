import { Clock3, Facebook, MapPin, MessageCircle, Truck } from "lucide-react";

export default function DeliveryInfo() {
  return (
    <section className="section section-dark" id="delivery">
      <div className="container delivery-grid">
        <div>
          <span className="section-kicker light">Livraison & contact</span>
          <h2 className="light-title">
            Commandez vos plats facilement et faites-vous livrer à Douala
          </h2>
          <p className="light-text">
            Salem Food Delivery assure les livraisons à partir de 11h jusqu’à
            18h à Logbessou. Le canal principal pour commander est WhatsApp.
          </p>

          <div className="delivery-list">
            <div>
              <MapPin size={20} />
              <span>Douala, Logbessou</span>
            </div>
            <div>
              <Clock3 size={20} />
              <span>Heures de livraison : 11h à 18h</span>
            </div>
            <div>
              <Truck size={20} />
              <span>Commande rapide et directe</span>
            </div>
          </div>
        </div>

        <div className="contact-card" id="contact">
          <h3>Passer une commande</h3>
          <p>
            Cliquez sur WhatsApp pour commander rapidement votre plat ou poser
            une question.
          </p>

          <a
            href="https://wa.me/237657184629"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary full-btn"
          >
            <MessageCircle size={18} />
            Commander sur WhatsApp
          </a>

          <a
            href="https://www.facebook.com/p/Salem-food-delivery-100093458259490/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <Facebook size={18} />
            Facebook
          </a>

          <a
            href="https://www.tiktok.com/@salem.food.delivery?_r=1&_t=ZT-94pMtc4dblF"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <span className="tiktok-dot">♪</span>
            TikTok
          </a>
        </div>
      </div>
    </section>
  );
}