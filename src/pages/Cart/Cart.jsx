function Cart() {
  return (
    <div className="container py-5">

      <h1 className="mb-4">
        Shopping Cart
      </h1>

      <div className="card shadow-sm">

        <div className="card-body text-center py-5">

          <i className="bi bi-cart-x display-1 text-muted"></i>

          <h3 className="mt-3">
            Your cart is empty
          </h3>

          <p className="text-muted">
            Add products to your cart to see them here.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Cart;