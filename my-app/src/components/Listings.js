import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';


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
            <h2>Listings!</h2>
        </div>
    )
}

export default Listings;