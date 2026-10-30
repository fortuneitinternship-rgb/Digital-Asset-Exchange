import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      icon: "bi-phone",
      description: "Mobiles, laptops and electronic products",
    },
    {
      id: 2,
      name: "Fashion",
      icon: "bi-handbag",
      description: "Clothing, shoes and fashion accessories",
    },
    {
      id: 3,
      name: "Home & Kitchen",
      icon: "bi-house",
      description: "Home appliances and kitchen essentials",
    },
    {
      id: 4,
      name: "Beauty",
      icon: "bi-stars",
      description: "Beauty and personal care products",
    },
    {
      id: 5,
      name: "Sports",
      icon: "bi-dribbble",
      description: "Sports and fitness products",
    },
    {
      id: 6,
      name: "Books",
      icon: "bi-book",
      description: "Books and educational products",
    },
    {
      id: 7,
      name: "Footwear",
      icon: "bi-shoe-prints",
      description: "Shoes, sandals and footwear",
    },
    {
      id: 8,
      name: "Grocery",
      icon: "bi-basket",
      description: "Daily grocery and household essentials",
    },
  ];

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">

        <h1 className="fw-bold">
          Explore Categories
        </h1>

        <p className="text-muted">
          Choose a category and explore our products
        </p>

      </div>

      {/* Category Cards */}
      <div className="row g-4">

        {categories.map((category) => (

          <div
            className="col-12 col-sm-6 col-lg-3"
            key={category.id}
          >

            <div className="category-card h-100">

              <div className="category-icon">

                <i className={`bi ${category.icon}`}></i>

              </div>

              <h4 className="mt-3">
                {category.name}
              </h4>

              <p className="text-muted">
                {category.description}
              </p>

              <Link
                to={`/products?category=${category.name}`}
                className="btn btn-primary"
              >
                View Products
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Categories;