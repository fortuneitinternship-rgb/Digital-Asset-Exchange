import ProductCard from "../../components/ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    rating: 4.5,
    image: "https://placehold.co/600x400?text=Headphones"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    rating: 4.3,
    image: "https://placehold.co/600x400?text=Smart+Watch"
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 1299,
    rating: 4.6,
    image: "https://placehold.co/600x400?text=Backpack"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 1799,
    rating: 4.4,
    image: "https://placehold.co/600x400?text=Speaker"
  }
];

function Products() {
  return (
    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h1>Products</h1>
          <p className="text-muted">
            Explore our latest products
          </p>
        </div>

        <select className="form-select w-auto">
          <option>Sort By</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating</option>
        </select>

      </div>

      <div className="row g-4">

        {products.map((product) => (

          <div
            className="col-sm-6 col-lg-3"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>

        ))}

      </div>

    </div>
  );
}

export default Products;