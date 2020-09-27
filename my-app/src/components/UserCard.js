import React from "react";

const UserCard = (props) => {
    return (
        <div className="container is-fluid" style={{ padding: '50px' }}>
        <div className="container has-text-centered box" style={{ maxWidth: '700px' }}>
            {console.log("userCard props:",props)}
            <p className="subtitle has-text-left">Name: {props.user.name}</p>
            <p className="subtitle has-text-left">City: {props.user.city}</p>
            <p className="subtitle has-text-left">State: {props.user.state}</p>
            <p className="subtitle has-text-left">Zip Code: {props.user.zipCode}</p>
            <p className="subtitle has-text-left">Skills: {props.user.skills}</p>
        </div>
        </div>
    )
};

export default UserCard;