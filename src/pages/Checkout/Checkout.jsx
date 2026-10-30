function Checkout() {
  return (
    <div className="container py-5">

      <h1 className="mb-4">
        Checkout
      </h1>

      <div className="row">

        <div className="col-md-7">

          <div className="card shadow-sm">

            <div className="card-body">

              <h4 className="mb-4">
                Delivery Information
              </h4>

              <form>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      First Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Last Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Address
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                  ></textarea>

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      City
                    </label>

                    <input
                      type="text"
                      className="form-control"
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Pincode
                    </label>

                    <input
                      type="text"
                      className="form-control"
                    />

                  </div>

                </div>

                <button className="btn btn-primary">
                  Place Order
                </button>

              </form>

            </div>

          </div>

        </div>

        <div className="col-md-5">

          <div className="card shadow-sm">

            <div className="card-body">

              <h4>
                Order Summary
              </h4>

              <hr />

              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>₹0</span>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <span>Delivery</span>
                <span>₹0</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>₹0</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;