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


    // This state variable favoritedGigs is an array that holds the gigs marked as favorites. The isFavorited property is used to determine whether a specific gig should be included in this array.    
    const [favoritedGigs, setFavoritedGigs] = useState([]);
    

    // Create a list with all gigs and their states, if a user click like, this function will be triggered and will change the state of that gig inside of the list
    const toggleFavorite = (gigId) => {
        const updatedGigs = gigs.map((gig) =>
            gig.id === gigId ? { ...gig, isFavorited: !gig.isFavorited } : gig
        );

        //tells React to update the state of each gig, triggering a re-render of the component with the modified gigs array.
        setGigs(updatedGigs);

        // filter updatedGigs to create a new array with only favourited gigs
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


