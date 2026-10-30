import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top shadow-sm site-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Digital Asset Exchange
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/categories">Categories</Link></li>
          </ul>

          <form className="d-flex navbar-search my-3 my-lg-0 me-lg-3" role="search" onSubmit={(event) => event.preventDefault()}>
            <input className="form-control" type="search" placeholder="Search assets..." aria-label="Search assets" />
          </form>

          <div className="d-flex align-items-center gap-3 navbar-actions pb-2 pb-lg-0">
            <Link to="/wishlist" className="text-dark fs-5" title="Wishlist" aria-label="Wishlist">
              <i className="bi bi-heart"></i>
            </Link>
            <Link to="/cart" className="text-dark fs-5" title="Cart" aria-label="Cart">
              <i className="bi bi-cart3"></i>
            </Link>
            <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
