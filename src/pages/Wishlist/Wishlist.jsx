function Wishlist() {
  return (
    <div className="container py-5">

      <h1 className="mb-4">
        My Wishlist
      </h1>

      <div className="card shadow-sm">

        <div className="card-body text-center py-5">

          <i className="bi bi-heart display-1 text-danger"></i>

          <h3 className="mt-3">
            Your wishlist is empty
          </h3>

          <p className="text-muted">
            Products you save will appear here.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Wishlist;