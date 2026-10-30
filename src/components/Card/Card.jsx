function Card({ children, className = "", image, imageAlt = "", imageHeight = 190, onClick }) {
  return (
    <article
      className={`reusable-card h-100 ${className}`}
      onClick={onClick}
    >
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="w-100"
          style={{ height: imageHeight, objectFit: "cover" }}
        />
      )}
      <div className="p-3 p-md-4">{children}</div>
    </article>
  );
}

export default Card;
