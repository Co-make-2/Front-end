import React, {useState} from 'react';
import UserProfile from './UserProfile';

const UpdateProfile = () => {

    const [userData, setUserData] = useState({
        name: '', 
        city: '', 
        state: '', 
        skills: '', 
        listings: ''
    });

    return(
        <h2>Updating Profile</h2>
    )
}

export default UserProfile;