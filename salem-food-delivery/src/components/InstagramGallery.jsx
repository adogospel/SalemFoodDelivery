import { galleryImages } from "../data/menuData";

export default function InstagramGallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-heading">
          <span>Galerie</span>
          <h2>Un aperçu visuel de l’univers Salem Food Delivery</h2>
          <p>
            Une galerie inspirée des réseaux sociaux pour donner encore plus
            envie de commander.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <article
              key={image.id}
              className={`gallery-card ${
                index === 0 || index === 5 ? "gallery-card-large" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />
              <div className="gallery-overlay">
                <span>Salem Food Delivery</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}