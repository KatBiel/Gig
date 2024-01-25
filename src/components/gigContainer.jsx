import React, { useState } from 'react';
import Gig from './Gig';
// import './FavouriteGigContainer.css'; // Create a CSS file for styling if needed
import Carbons from '../assets/Carbons.png'
import Undercover from '../assets/Undercover-hippie.avif'
import Shpongle from '../assets/shpongle.jpeg'

const GigList = () => {
    const [gigs, setGigs] = useState([
        { id: 1, name: 'Carbon Basen Lifeforms', imageSrc: Carbons , description: 'Doors open: 19:30.', dateTime: 'Friday 05 April 2024, 19:30', location: 'London' },
        { id: 2, name: 'Undercover Hippie', imageSrc: Undercover , description: 'Doors open: 19:30.', dateTime: 'Wednesday 10 April 2024, 19:30', location: 'London' },
        { id: 3, name: 'Shpongle', imageSrc: Shpongle , description: 'Doors open: 18:00.', dateTime: 'Friday 18 April 2024, 19:00', location: 'London' }
        ]);

    const [favoritedGigs, setFavoritedGigs] = useState([]);
    
    const toggleFavorite = (gigId) => {
        const updatedGigs = gigs.map((gig) =>
            gig.id === gigId ? { ...gig, isFavorited: !gig.isFavorited } : gig
        );

        setGigs(updatedGigs);

        // Update the list of favorited gigs
    const updatedFavoritedGigs = updatedGigs.filter((gig) => gig.isFavorited);
    setFavoritedGigs(updatedFavoritedGigs);
    };

    return (
        <div>
            <h2>Favorited Gigs</h2>
            {favoritedGigs.map((gig) => (
                <Gig key={gig.id} {...gig} onToggleFavorite={() => toggleFavorite(gig.id)} />
            ))}

            <h2>All Gigs</h2>
            {gigs.map((gig) => !gig.isFavorited && <Gig key={gig.id} {...gig} onToggleFavorite={() => toggleFavorite(gig.id)} />)}
        </div>
    );
};

export default GigList;


