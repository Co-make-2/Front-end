import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import UserCard from "./UserCard";
import ListingCard from "./ListingCard";

const initialData = {
  userListings: [
    {
      city: "",
      description: "",
      listingsId: 99,
      listingsName: "",
      location: "",
      state: "",
      upVotes: 99,
      userId: 99,
      username: "",
      zipCode: "",
    },
  ],
  userProfile: [
    {
      name: "default",
      city: "default",
      state: "default",
      skills: "default",
      userId: "default",
      zipCode: "default"
    }
  ],
};

const UserProfile = () => {
  const [userData, setUserData] = useState();
  const { push } = useHistory();
  const id = window.localStorage.getItem("userId");

  const getUserProfile = (id) => {
    axiosWithAuth()
      .get(`/api/users/${id}`)
      .then((res) => {
        console.log("getUserProfile Api response:", res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log("getUserProfile error:", err);
        setUserData([initialData]);
        console.log("post error:", userData);
      });
  };

  useEffect(() => {
    getUserProfile(id);
  }, [id]);

  if (!userData) {
    return <div>Loading user information...</div>;
  }

  return (
    <div>
      
      <h2>User Profile</h2>
      {console.log("userData:", userData)}
      {console.log("userData.userProfile", userData.userProfile)}
      {userData.userProfile.map((item) => (
        <UserCard user={item} key={item.userId} />
      ))}
      
      <button onClick={() => push(`/update-profile`)}>Edit Profile</button>

      <h2>User Listings</h2>
      {userData.userListings.map((item) => (
        <ListingCard listing={item} key={item.listingsId} />
      ))}
    </div>
  );
};

export default UserProfile;
