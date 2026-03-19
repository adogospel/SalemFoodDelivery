export default function Stats() {
  const stats = [
    { number: "11h - 18h", label: "Heures de livraison" },
    { number: "250 FCFA", label: "Snack d’entrée de gamme" },
    { number: "3000 FCFA", label: "Spécialité dès" },
    { number: "10000 FCFA", label: "Demi-marmite dès" },
  ];

  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}