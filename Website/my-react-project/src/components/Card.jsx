import './Card.css'; // make sure this CSS file exists

function Card({ image, title, description, buttonText }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <button className="card-button">{buttonText}</button>
    </div>
  );
}

export default Card;
