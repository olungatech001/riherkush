const ServiceCard = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card h-100 d-flex flex-column">
        <img
          src={imageSrc}
          alt={altText}
          className="card-img-top"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body flex-grow-1 d-flex flex-column">
          <h3 className="card-title fw-bold">{title}</h3>
          <p className="card-text lead">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
