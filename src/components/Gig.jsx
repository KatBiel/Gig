import React, { useState } from "react";
import './Gig.css';

const Gig = ({ event_id, name, imageSrc, description, dateTime, location, isFavorited, onToggleFavorite }) => {
    return (
        <div key={event_id} className="gig-container">
        <div className="gig">
            <h3 className="band-name">{name}</h3>
            <img className="band-image" src={imageSrc} alt="Band" />
            <p className="event-description">{description}</p>
            <p className="event-date-time">{dateTime}</p>
            <p className="event-location">{location}</p>
            <button className={`favorite-button ${isFavorited ? 'favorited' : ''}`} onClick={onToggleFavorite}>
                    <span className={`heart ${isFavorited ? 'favorited-heart' : ''}`}>&#10084;</span>
                </button>
        </div>
    </div>
    );
};

export default Gig;


{/* <FavoriteButton favorited={isFavorited} toggleFavorite={onToggleFavorite} /> */}