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
        <div className="container is-fluid" style={{ padding: '50px' }}>
            <div className="container has-text-centered box" style={{ maxWidth: '700px' }}>
            <h4 className="title">Add a listing</h4>
            <form onSubmit={pushListing}>
                <label className="label" htmlFor='title'>
                    <h4 className="subtitle has-text-left">Listing Title</h4>
                    <input
                        className="input"
                        type="text"
                        id="listingsName"
                        name="listingsName"
                        placeholder="insert listing title here"
                        onChange={changeHandler}
                        value={listingForm.listingsName}
                    />
                </label>
                <label className="label" htmlFor='description'>
                <h4 className="subtitle has-text-left">Listing Description</h4>
                    <input
                        className="input"
                        type="text"
                        id="description"
                        name="description"
                        placeholder="insert listing description here"
                        onChange={changeHandler}
                        value={listingForm.description}
                    />
                </label>
                <label className="label" htmlFor="location">
                <h4 className="subtitle has-text-left">Location</h4>
                    <input
                        className="input"
                        type="text"
                        id="location"
                        name="location"
                        placeholder="ex. 123 Main Street"
                        onChange={changeHandler}
                        value={listingForm.location}
                    />
                </label>
                <label className="label has-text-left" htmlFor="city">
                <h4 className="subtitle">City</h4>
                    <input
                        className="input"
                        type="text"
                        id="city"
                        name="city"
                        placeholder="insert city here"
                        onChange={changeHandler}
                        value={listingForm.city}
                    />
                </label>
                <label className="label">
                <h4 className="subtitle has-text-left">State</h4>
                    <input
                        className="input"
                        type="text"
                        id="state"
                        name="state"
                        placeholder="insert state here"
                        onChange={changeHandler}
                        value={listingForm.state}
                    />
                </label>
                <label>
                <h4 className="subtitle has-text-left">Zip code</h4>
                    <input
                        className="input"
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        placeholder="insert Zip Code here"
                        onChange={changeHandler}
                        value={listingForm.zipCode}
                    />
                </label>
                <button className="button is-medium is-primary is-fullwidth" type="submit" style={{ padding: '20px' }}>Add Listing</button>
            </form></div>
        </div>
    )
}

export default AddListing;