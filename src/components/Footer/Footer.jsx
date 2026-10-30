
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <style>
        {`
          .site-footer {
            background-color: #212529;
            color: #ffffff;
          }

          .footer-muted {
            color: #f1f1f1;
            line-height: 1.8;
          }

          /* Quick Links */
          .site-footer .footer-link {
            color: #ffffff;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .site-footer .footer-link:visited,
          .site-footer .footer-link:focus,
          .site-footer .footer-link:active {
            color: #ffffff;
            text-decoration: none;
          }

          .site-footer .footer-link:hover {
            color: #0d6efd;
            text-decoration: none;
          }

          /* Social Icons */
          .footer-social i {
            font-size: 20px;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .footer-social i:hover {
            color: #0d6efd;
          }

          /* Mobile Responsive */
          @media (max-width: 576px) {
            .site-footer .container {
              padding-top: 30px;
              padding-bottom: 30px;
            }

            .footer-muted {
              font-size: 14px;
            }

            .site-footer h5 {
              font-size: 17px;
            }
          }
        `}
      </style>

      <footer className="bg-dark text-white mt-5 site-footer">
        <div className="container py-5">
          <div className="row g-4">

            {/* Company Information */}
            <div className="col-12 col-sm-6 col-lg-3">
              <h5 className="fw-bold">Digital Asset Exchange</h5>
              <p className="footer-muted mb-0">
                Your trusted online shopping destination for quality products
                at affordable prices.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-6 col-sm-6 col-lg-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <Link to="/" className="footer-link">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/products" className="footer-link">Products</Link>
                </li>
                <li className="mb-2">
                  <Link to="/cart" className="footer-link">Cart</Link>
                </li>
                <li>
                  <Link to="/wishlist" className="footer-link">Wishlist</Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="col-6 col-sm-6 col-lg-3">
              <h5>Customer Service</h5>
              <ul className="list-unstyled footer-muted mb-0">
                <li className="mb-2">Help Center</li>
                <li className="mb-2">Shipping Information</li>
                <li className="mb-2">Returns &amp; Refunds</li>
                <li>Terms &amp; Conditions</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-12 col-sm-6 col-lg-3">
              <h5>Contact Us</h5>

              <p className="footer-muted mb-2">
                <i className="bi bi-envelope me-2"></i>
                support@digitalassetexchange.com
              </p>

              <p className="footer-muted mb-3">
                <i className="bi bi-telephone me-2"></i>
                +91 98765 43210
              </p>

              <div className="d-flex gap-3 footer-social">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-secondary text-center py-3 px-3">
          <small className="footer-muted">
            © 2026 Digital Asset Exchange. All Rights Reserved.
          </small>
        </div>
      </footer>
    </>
  );
}

export default Footer;
