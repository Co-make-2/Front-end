import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {useHistory} from "react-router-dom";

const UpdateProfile = () => {
  const initialState = {
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
      ]
  };

  const [item, setItem] = useState(initialState);
  const { push } = useHistory();
  const id = window.localStorage.getItem("userId");

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${id}`)
      .then((res) => {
        setItem(res.data);
        //console.log("update profile data:", res.data)
        //console.log("item set after retrieval", item)
      })
      .catch((err) => {
        console.log("error update profile:", err);
      });
  }, [id]);

  const handleChanges = (e) => {
    console.log([e.target.name],[e.target.value])
    console.log("item from handlechanges",item)
    e.persist();
    setItem({
      ...item, 
      userProfile:
      {
        ...item.userProfile,
        [e.target.name]: [e.target.value],
      }
    });
  };

  const updateUser = (e) => {
    e.preventDefault();
    console.log("item to be pushed", item);
    axiosWithAuth()
      .put(`/api/users/${id}`, item)
      .then((res) => {
        push("/user-profile");
      })
      .catch((err) => console.log("error update user", err));
    console.log("movie updated");
  };

  return (
    <div>
      <h2>Updating Profile</h2>
      <p>user id {id}</p>
      <form onSubmit={updateUser}>
        <label>
            Name
            <input 
            type= "text"
            id= "name"
            name= "name"
            placeholder= "Name"
            onChange= {handleChanges}
            value= {item.userProfile[0].name}
            />
        </label>
        <label>
            City
            <input 
            type= "text"
            id= "city"
            name= "city"
            placeholder= "City"
            onChange= {handleChanges}
            value= {item.userProfile[0].city}
            />
        </label>
        <label>
            State
            <input 
            type= "text"
            id= "state"
            name= "state"
            placeholder= "State"
            onChange= {handleChanges}
            value= {item.userProfile[0].state}
            />
        </label>
        <label>
            Zip Code
            <input 
            type= "text"
            id= "zipCode"
            name= "zipCode"
            placeholder= "Zip Code"
            onChange= {handleChanges}
            value= {item.userProfile[0].zipCode}
            />
        </label>
        <label>
            Skills
            <input 
            type= "text"
            id= "skills"
            name= "skills"
            placeholder= "Seperate skills with comma"
            onChange= {handleChanges}
            value= {item.userProfile[0].skills}
            />
        </label>
        <button>Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
