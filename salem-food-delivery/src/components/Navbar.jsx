import { useEffect, useState } from "react";
import { Menu, Phone, ShoppingBag, X } from "lucide-react";
import { buildOrderMessage, buildWhatsAppLink } from "../utils/whatsapp";

const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "Spécialités", href: "#featured" },
  { label: "Galerie", href: "#gallery" },
  { label: "Livraison", href: "#delivery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand">
            <img src="/logo-salem.png" alt="Salem Food Delivery" />
            <div>
              <span>Salem Food Delivery</span>
              <small>By Chef Cabrel</small>
            </div>
          </a>

          <nav className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              href={buildWhatsAppLink(buildOrderMessage())}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <Phone size={18} />
              WhatsApp
            </a>

            <a href="#menu" className="btn btn-primary">
              <ShoppingBag size={18} />
              Commander
            </a>

            <button
              className="mobile-menu-btn"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      <aside className={`mobile-drawer ${isOpen ? "active" : ""}`}>
        <div className="mobile-drawer-top">
          <div className="mobile-brand">
            <img src="/logo-salem.png" alt="Salem Food Delivery" />
            <div>
              <span>Salem Food Delivery</span>
              <small>By Chef Cabrel</small>
            </div>
          </div>

          <button
            className="mobile-close-btn"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mobile-nav-actions">
          <a
            href={buildWhatsAppLink(buildOrderMessage())}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary full-btn"
            onClick={closeMenu}
          >
            <Phone size={18} />
            Commander sur WhatsApp
          </a>

          <a href="#menu" className="btn btn-soft full-btn" onClick={closeMenu}>
            <ShoppingBag size={18} />
            Voir le menu
          </a>
        </div>
      </aside>
    </>
  );
}