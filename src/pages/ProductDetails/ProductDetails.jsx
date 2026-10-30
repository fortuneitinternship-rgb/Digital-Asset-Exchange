import { Link, useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  return (
    <div className="container py-5">

      <div className="row">

        <div className="col-md-6">

          <img
            src={`https://placehold.co/700x500?text=Product+${id}`}
            alt="Product"
            className="img-fluid rounded"
          />

        </div>

        <div className="col-md-6">

          <h1>Product Details</h1>

          <p className="text-muted">
            Product ID: {id}
          </p>

          <div className="text-warning mb-3">

            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>

          </div>

          <h2 className="text-primary">
            ₹1,999
          </h2>

          <p className="mt-3">
            This is a sample product description.
            Product information will be connected to
            the backend or API later.
          </p>

          <div className="d-flex gap-3 mt-4">

            <button className="btn btn-primary">
              <i className="bi bi-cart-plus me-2"></i>
              Add to Cart
            </button>

            <Link
              to="/cart"
              className="btn btn-outline-primary"
            >
              Go to Cart
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;