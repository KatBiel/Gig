import React, { useState, useEffect } from 'react';
import Gig from './Gig';
// import './FavouriteGigContainer.css'; // Create a CSS file for styling if needed
import Carbons from '../assets/Carbons.png'
import Undercover from '../assets/Undercover-hippie.avif'
import Shpongle from '../assets/shpongle.jpeg'

const GigList = () => {
    const [gigs, setGigs] = useState([]);
    // This state variable favoritedGigs is an array that holds the gigs marked as favorites. The isFavorited property is used to determine whether a specific gig should be included in this array.    
    const [favoritedGigs, setFavoritedGigs] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const URL = `https://makers-gig-backend.onrender.com/events`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                const gigsWithFavorites = data.map((gig) => ({ ...gig, isFavorited: false }));
                setGigs(gigsWithFavorites);
                setLoading(false); // Set loading to false when data is loaded
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []);

    // Create a list with all gigs and their states, if a user click like, this function will be triggered and will change the state of that gig inside of the list
    const toggleFavorite = (gigId) => {
        setGigs((prevGigs) =>
            prevGigs.map((gig) =>
                gig.event_id === gigId ? { ...gig, isFavorited: !gig.isFavorited } : gig
            )
        );
    };

    // filter updatedGigs to create a new array with only favourited gigs
    useEffect(() => {
        const updatedFavoritedGigs = gigs.filter((gig) => gig.isFavorited);
        setFavoritedGigs(updatedFavoritedGigs);
    }, [gigs]);

    return (
        <div>
            <h2>Favorited Gigs</h2>
            {favoritedGigs.map((gig) => (
                <Gig key={gig.event_id} {...gig} onToggleFavorite={() => toggleFavorite(gig.event_id)} />
            ))}

            <h2>All Gigs</h2>
            {gigs.map((gig) => !gig.isFavorited && <Gig key={gig.event_id} {...gig} onToggleFavorite={() => toggleFavorite(gig.event_id)} />)}
        </div>
    );
};

export default GigList;