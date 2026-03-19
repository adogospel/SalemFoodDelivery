export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/logo-salem.png" alt="Salem Food Delivery" />
          <div>
            <h4>Salem Food Delivery</h4>
            <p>By Chef Cabrel</p>
          </div>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Salem Food Delivery — Cuisine
          camerounaise & ivoirienne à Douala.
        </p>
      </div>
    </footer>
  );
}