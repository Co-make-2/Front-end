import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddListing = (props) => {

    const [listingForm, setListingForm] = useState({
        userId: props.userId,
        username: props.username,

        listingsName:"", 
        description:"", 
        location:"", 
        city:"", 
        state:"", 
        zipCode:"", 
        upVotes: 0
    })

const changeHandler = (e) => {
    e.persist();
    //console.log(e.target.name, e.target.value);
    setListingForm({
        ...listingForm,
        [e.target.name]: [e.target.value]
    });
}

const pushListing = (e) => {
    console.log("button pushed");
    console.log(listingForm);
    e.preventDefault();
    axiosWithAuth()
    .post("https://comake-app.herokuapp.com/api/listings", listingForm)
    .then(response => {
        //props.setListings(response.data);
    console.log(response.data)})
    .catch(error => console.log(error))
};

    return(
        <div>
            <h2>add a listing</h2>
            <form onSubmit={pushListing}>
                <label>
                    Listing Title
                    <input
                        type="text"
                        id="listingsName"
                        name="listingsName"
                        placeholder="insert listing title here"
                        onChange={changeHandler}
                        value={listingForm.listingsName}
                    />
                </label>
                <label>
                    Listing Description
                    <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="insert listing description here"
                        onChange={changeHandler}
                        value={listingForm.description}
                    />
                </label>
                <label>
                    Location
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="ex. 123 Main Street"
                        onChange={changeHandler}
                        value={listingForm.location}
                    />
                </label>
                <label>
                    City
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="insert city here"
                        onChange={changeHandler}
                        value={listingForm.city}
                    />
                </label>
                <label>
                    State
                    <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="insert state here"
                        onChange={changeHandler}
                        value={listingForm.state}
                    />
                </label>
                <label>
                    Zip code
                    <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        placeholder="insert Zip Code here"
                        onChange={changeHandler}
                        value={listingForm.zipCode}
                    />
                </label>
                <button>Add Listing</button>
            </form>
        </div>
    )
}

export default AddListing;