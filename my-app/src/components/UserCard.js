import React from "react";

const UserCard = (props) => {
    return (
        <div>
            {console.log("userCard props:",props)}
            <p>Name: {props.user.name}</p>
            <p>City: {props.user.city}</p>
            <p>State: {props.user.state}</p>
            <p>Zip Code: {props.user.zipCode}</p>
            <p>Skills: {props.user.skills}</p>
        </div>
    )
};

export default UserCard;