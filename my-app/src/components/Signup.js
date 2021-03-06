import React, { useState } from "react";
import * as yup from 'yup';
import axios from "axios";
import {useHistory} from "react-router-dom";

const signUpSchema = yup.object().shape({
    username: yup.string().required("Name is a required field."),
    //email: yup.string().email("Must be a valid email address").required("Must include email address."),
    password: yup.string().required("Must create a password"),
    //terms: yup.boolean().oneOf([true], "Please agree to the terms of use"),
});


function Signup () {
    const {push} = useHistory();

    const [signUpState, setSignUpState] = useState({
        username: "",
        password: ""
        //email: "",
        //terms: ""
    });

    const [errors, setErrors] = useState({
        username: "",
        password: ""
        //email: "",
        //terms: ""
    });

    //const [newSignUp, setNewSignUp] = React.useState([]);
    //const [buttonDisabled, setButtonDisabled] = useState(true);

    // useEffect(() => {
    //     // signUpSchema.isValid(signUpState).then(valid => {
    //     //   setButtonDisabled(!valid);
    //     // });
    //   }, [signUpState]);

      const handleChange = e => {
          e.persist();
          const newSignUpData = {
              ...signUpState,
              [e.target.name]:
              e.target.type === "checkbox" ? e.target.checked : e.target.value
          };
          validateChange(e);
          setSignUpState(newSignUpData);
      };

      const handleSubmit = e => {
          e.preventDefault();
          console.log(signUpState);
          axios
          .post("https://comake-app.herokuapp.com/api/register", signUpState)
          .then(res => {console.log("User signed up!");
          //push('/protected');
          push('/login')})
          .catch(err => console.log(err));    
      }

      const validateChange = event => {
        yup
        .reach(signUpSchema, event.target.name)
        .validate(event.target.value)
        .then(valid => {
          setErrors({
            ...errors,
            [event.target.name]: ""
          });
        })
        .catch(err => {
          setErrors({
            ...errors,
            [event.target.name]: err.errors[0]
          });
        });
      };

      return (
        <div className="container is-fluid" style={{ padding: '50px' }}>
          
          <div className="container has-text-centered box" style={{ maxWidth: '300px' }}>
          <h4 className="title">Sign up</h4>
          <form onSubmit={handleSubmit}>
              <label className="label" htmlFor='username'>
                <input
                    className="input is-rounded"
                    onChange={handleChange}
                    type="text"
                    name="username"
                    value={signUpState.username}
                    placeholder="Username"
                />
                {errors.username.length > 0 ? <p className='error'>{errors.username}</p> : null}
              </label>

              {/* <label htmlFor='email'>
                <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    value={signUpState.email}
                    placeholder="Email"
                />
                {errors.email.length > 0 ? (<p data-cy="email-error-msg" className='error'>{errors.email}</p>) : null}
              </label> */}

              <label className="label" htmlFor='password'>
                  <input
                    className="input is-rounded"
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={signUpState.password}
                    placeholder="Password"
                  />
                  {errors.password.length > 0 ? (<p className='error'>{errors.password}</p>) : null}
              </label>

              {/* <label htmlFor='terms'>
                  <input
                      onChange={handleChange}
                      type="checkbox"
                      name="terms"
                      checked={signUpState.terms}
                  />
                  Terms & Conditions
              </label> */}

                {/* the line below is for testing if the data is passing through correctly  */}
              {/* <pre>{JSON.stringify(newSignUp, null, 2)}</pre> */}
              {/* <button type="submit" disabled={buttonDisabled}>Sign Up</button> */}
              <button className="button is-medium is-primary is-fullwidth" type="submit" >Sign Up</button>
          </form></div>
        </div>
      );
}

export default Signup;