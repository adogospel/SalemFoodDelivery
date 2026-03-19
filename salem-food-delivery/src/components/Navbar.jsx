import { Menu, Phone, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
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
          <a href="#menu">Menu</a>
          <a href="#featured">Spécialités</a>
          <a href="#delivery">Livraison</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a
            href="https://wa.me/237657184629"
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

          <button className="mobile-menu-btn" aria-label="menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}