import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from "axios";

const loginSchema = yup.object().shape({
    name: yup.string().required("Username is a required field."),
    password: yup.string().required("The password field must be filled"),
});

function Login () {
    const [loginState, setLoginState] = useState({
        name: "",
        password: "",
    });

    const [loginErrors, setLoginErrors] = useState({
        name: "",
        password: "",
    });

    const [newLogin, setNewLogin] = React.useState([]);

    const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);  

    useEffect(() => {
        loginSchema.isValid(loginState).then(valid => {
          setLoginButtonDisabled(!valid);
        });
      }, [loginState]);

      const handleLoginChange = e => {
        e.persist();
        const newLoginData = {
            ...loginState,
            [e.target.name]: 
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateLoginChange(e);
        setLoginState(newLoginData);
    };

    const handleLoginSubmit = e => {
        e.preventDefault();
        axios.post("https://reqres.in/api/users", loginState)
        .then(res => {console.log("getting log in data back", newLogin)
        setNewLogin(res.data);
        console.log("Another check that this is passing log in data back", newLogin)
        setLoginState({
            name: "",
            password: "",
        });
        
      })
      .catch(err => console.log(err.response));
    }

    const validateLoginChange = event => {
      yup
      .reach(loginSchema, event.target.name)
      .validate(event.target.value)
      .then(valid => {
        setLoginErrors({
          ...loginErrors,
          [event.target.name]: ""
        });
      })
      .catch(err => {
        setLoginErrors({
          ...loginErrors,
          [event.target.name]: err.loginErrors[0]
        });
      });
    };


    return (
        <form onSubmit={handleLoginSubmit}>
            <label htmlFor='name'>
                <input
                    onChange={handleLoginChange}
                    type="text"
                    name="name"
                    value={loginState.name}
                    placeholder="Username"
                />
                {loginErrors.name.length > 0 ? <p className='error'>{loginErrors.name}</p> : null}

            </label>

            <label htmlFor='password'>
                  <input
                    onChange={handleLoginChange}
                    type="password"
                    name="password"
                    value={loginState.password}
                    placeholder="Password"
                  />
                  {loginErrors.password.length > 0 ? (<p className='error'>{loginErrors.password}</p>) : null}
              </label>


                {/* the line below is for testing if the data is passing through correctly  */}
              <pre>{JSON.stringify(newLogin, null, 2)}</pre>
              <button type="submit" disabled={loginButtonDisabled}>Log in</button>
        </form>
    );
}

export default Login;
