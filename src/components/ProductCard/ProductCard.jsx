import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return (
    <div className="card product-card h-100 shadow-sm">

      {/* Product Image */}
      <div className="position-relative">

        <img
          src={product.image}
          className="card-img-top product-image"
          alt={product.name}
        />

        <button
          className="btn btn-light wishlist-btn"
          title="Add to Wishlist"
        >
          <i className="bi bi-heart"></i>
        </button>

      </div>

      {/* Product Details */}
      <div className="card-body d-flex flex-column">

        <h5 className="card-title">
          {product.name}
        </h5>

        <div className="mb-2">

          <span className="text-warning">
            <i className="bi bi-star-fill"></i>
          </span>

          <span className="ms-1">
            {product.rating}
          </span>

        </div>

        <h5 className="text-primary">
          ₹{product.price}
        </h5>

        <div className="mt-auto">

          <Link
            to={`/products/${product.id}`}
            className="btn btn-outline-primary w-100 mb-2"
          >
            View Details
          </Link>

          <button className="btn btn-primary w-100">
            <i className="bi bi-cart-plus me-2"></i>
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;