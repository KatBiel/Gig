import React, { useState, useEffect } from 'react';
import Gig from './Gig';
import Carbons from '../assets/Carbons.png'
import Undercover from '../assets/Undercover-hippie.avif'
import Shpongle from '../assets/shpongle.jpeg'

const GigList = () => {
    const [gigs, setGigs] = useState([]);
    const [favoritedGigs, setFavoritedGigs] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state - when waiting for the fetch response

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

    // toggleFavourite will essentially create a new list from Setgigs(gigs) with one gig (gigId) toggled
    const toggleFavorite = (gigId) => {
        setGigs((gigs) => // state value of gigs and returns a new state value based on the provided logic.
            gigs.map((gig) =>
                gig.event_id === gigId ? { ...gig, isFavorited: !gig.isFavorited } : gig
            )
        );
    };

    // Filter gigs array to create a new updatedFavouritedGigs array containing only favorited gigs
    // useEffect used to control re-renders for only when the state is changed, otherwise create an infinite re-render loop
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
            {gigs.map((gig) => <Gig key={gig.event_id} {...gig} onToggleFavorite={() => toggleFavorite(gig.event_id)} />)}
        </div>
    );
};

export default GigList;