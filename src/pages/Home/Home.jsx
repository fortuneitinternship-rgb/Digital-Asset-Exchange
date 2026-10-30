import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-primary text-white py-5 home-hero">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-7">

              <h1 className="fs-2 fw-bold">
                Welcome to Digital Assset Exchange
              </h1>

              <p className="lead">
                Discover quality products at the best prices.
              </p>

              <Link
                to="/products"
                className="btn btn-light btn-lg"
              >
                Shop Now
              </Link>

            </div>

            <div className="col-md-5 text-center">

              <i className="bi bi-cart4 hero-icon"></i>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="py-5">

        <div className="container">

          <h2 className="text-center mb-4">
            Why Shop With Us?
          </h2>

          <div className="row g-4">

            <div className="col-md-4">

              <div className="feature-box text-center p-4">

                <i className="bi bi-truck fs-1 text-primary"></i>

                <h4 className="mt-3">
                  Fast Delivery
                </h4>

                <p className="text-muted">
                  Get your products delivered quickly
                  and safely.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="feature-box text-center p-4">

                <i className="bi bi-shield-check fs-1 text-primary"></i>

                <h4 className="mt-3">
                  Secure Shopping
                </h4>

                <p className="text-muted">
                  Your information and payments are
                  protected.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="feature-box text-center p-4">

                <i className="bi bi-headset fs-1 text-primary"></i>

                <h4 className="mt-3">
                  Customer Support
                </h4>

                <p className="text-muted">
                  Our support team is always ready
                  to help you.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;