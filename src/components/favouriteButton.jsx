import React from "react";

const FavoriteButton = (props) => {
    return (
        <button className={`favorite-button ${props.favorited ? 'favorited' : ''}`} onClick={props.toggleFavorite}>
            <span className={`heart ${props.favorited ? 'favorited-heart' : ''}`}>&#10084;</span>
        </button>
    )
};

export default FavoriteButton;