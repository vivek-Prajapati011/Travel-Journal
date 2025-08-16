import React from "react";
const Card = (props) => {
  return (
   <div className="card-container">
  <div className="card-img">
    <img src={props.imageUrl} alt={props.title} />
  </div>  
  <div className="card-content">
    <div>
      <div className="card-location">
        <span>{props.countryCode}</span>
        <a href={props.mapLink}>View on Google Maps</a>
      </div>
      <h2 className="card-title">{props.title}</h2>
      <p className="card-dates">{props.startDate} - {props.endDate}</p>
      <p className="card-description">{props.description}</p>
    </div>
  </div>
</div>
  );
};
export default Card;
