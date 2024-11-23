const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const handleWhatsAppOrder = () => {
    const message = `Hi, I would like to order the following product:
    *Product Name*: ${name}
    *Price*: KES ${price}
    *Image*: ${imageUrl}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=+254708528186&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="card mb-4">
      <img src={imageUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">KES {price}</p>
        <button
          className="btn btn-success btn-block"
          onClick={handleWhatsAppOrder}
        >
          Order on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
