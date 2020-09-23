import React from 'react';

const ListingCard = (props) => {
    return(
    <div className="listing">
        <h3>{props.listing.listingsName}</h3>
        <p>Description: {props.listing.description}</p>
        <p>Location: {props.listing.location}</p>
        <p>{props.listing.city}, {props.listing.state}, {props.listing.zipCode}</p>
    </div>
    )}

export default ListingCard;