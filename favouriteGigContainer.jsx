import React, { useState } from 'react';
import Gig from './components/Gig';
import './FavouriteGigContainer.css'; // Create a CSS file for styling if needed

const FavouriteGigContainer = ({ gigs, onToggleFavorite }) => {
    const [favoritedGigs, setFavoritedGigs] = useState([]);

    const toggleFavorite = (gigId) => {
    const updatedGigs = gigs.map((gig) =>
        gig.id === gigId ? { ...gig, isFavorited: !gig.isFavorited } : gig
    );

    onToggleFavorite(updatedGigs);

    // Update the list of favorited gigs
    const updatedFavoritedGigs = updatedGigs.filter((gig) => gig.isFavorited);
    setFavoritedGigs(updatedFavoritedGigs);
};

    return (
        <div className="favoritedGigContainer">
            <h2>Favorited Gigs</h2>
            {favoritedGigs.map((gig) => (
            <Gig key={gig.id} {...gig} onToggleFavorite={() => toggleFavorite(gig.id)} />
        ))}
        </div>
    );
};

export default FavouriteGigContainer;