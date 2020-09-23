import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import AddListing from './AddListing';
import ListingCard from './ListingCard';


const Listings = () => {

    const [listings, setListings] = useState([]);

    const getListings = () => {
        axiosWithAuth()
      .get("api/listings")
      .then((res) => {
        console.log("getListings Api response:", res.data);
        setListings(res.data);
      })
      .catch((err) => console.log("getListings error:", err))
    };

    useEffect(()=>{
        getListings()
    },[]);

    return (
        <div>

        <div>
            <h2>Listings!</h2>
            {listings.map(item => (
                <ListingCard listing={item} key={item.id}/>
            ))}
        </div>

        <div>
            <AddListing listings={listings} setListings={setListings}/>
        </div>
        </div>
    )
}

export default Listings;