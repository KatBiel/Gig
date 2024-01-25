import React, { useState } from "react";
import FavoriteButton from "./favouriteButton";
import "./favoriteButton.css";

const Gig = ({ name, imageSrc, description, dateTime, location, isFa}) => {
    const [favorited, setFavorited] = useState(false);

    const toggleFavorite = () => {
        setFavorited(!favorited);
};

    return (
    <div className="gig-container">
        <div className="gig">
            <h3 className="band-name">{name}</h3>
            <img className="band-image" src={imageSrc} alt="Band" />
            <p className="event-description">{description}</p>
            <p className="event-date-time">{dateTime}</p>
            <p className="event-location">{location}</p>
            <FavoriteButton favorited={favorited} toggleFavorite={toggleFavorite} />
        </div>
    </div>
    );
};

export default Gig;


