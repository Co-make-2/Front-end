import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory, useParams } from 'react-router-dom';

const UserProfile = () => {
    //const [user, setUser] = useState(null);
    const params = useParams();
    const { push } = useHistory();

    const getUserProfile = (id) => {
        console.log("user id:", id);
    };

    // if (!user) {
    //     return <div>Loading user information...</div>;
    // };

    return (
        <div>
            <h2>User Profile</h2>
            <p>Data</p>
            <button onClick={getUserProfile} >Edit Profile</button>
        </div>
    )
}

export default UserProfile;