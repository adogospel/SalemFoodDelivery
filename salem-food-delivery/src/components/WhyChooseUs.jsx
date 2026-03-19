import { BadgeCheck, ChefHat, TimerReset, UtensilsCrossed } from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    {
      icon: <ChefHat size={24} />,
      title: "Cuisine généreuse",
      text: "Des portions pensées pour satisfaire et fidéliser les clients.",
    },
    {
      icon: <UtensilsCrossed size={24} />,
      title: "Saveurs locales",
      text: "Un mélange de plats camerounais et ivoiriens très attractif.",
    },
    {
      icon: <TimerReset size={24} />,
      title: "Commande simple",
      text: "WhatsApp permet une prise de commande rapide et directe.",
    },
    {
      icon: <BadgeCheck size={24} />,
      title: "Livraison rapide",
      text: "Livraison pontuel, rapide, satisfaisante et a moindres couts.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span>Pourquoi choisir Salem</span>
          <h2>Une marque qui doit inspirer faim, confiance et envie</h2>
        </div>

        <div className="why-grid">
          {items.map((item) => (
            <div className="why-card" key={item.title}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}