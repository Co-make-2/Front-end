import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from "axios";

const loginSchema = yup.object().shape({
  username: yup.string().required("Username is a required field."),
  password: yup.string().required("The password field must be filled"),
});

function Login(props) {
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });

  const [loginErrors, setLoginErrors] = useState({
    username: "",
    password: "",
  });

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
        e.target.value
    };
    validateLoginChange(e);
    setLoginState(newLoginData);
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    axios
      .post("https://comake-app.herokuapp.com/api/login", loginState)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push('/protected');
        console.log("token returned");
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
    <div className="container is-fluid">
      <h4 className="title">Login</h4>
      <div className="container has-text-centered box" style={{ maxWidth: '300px' }}>
      <form onSubmit={handleLoginSubmit}>
        <label className="label" htmlFor='username'>
          <input
            className="input is-rounded"
            onChange={handleLoginChange}
            type="text"
            name="username"
            value={loginState.name}
            placeholder="Username"
          />
          {loginErrors.username.length > 0 ? <p className='error'>{loginErrors.username}</p> : null}
        </label>
        
        <label className="label" htmlFor='password'>
          <input 
            className="input is-rounded"
            onChange={handleLoginChange}
            type="password"
            name="password"
            value={loginState.password}
            placeholder="Password"
          />
          
          {loginErrors.password.length > 0 ? (<p className='error'>{loginErrors.password}</p>) : null}
        </label>
       

        {/* the line below is for testing if the data is passing through correctly  */}
        {/* <pre>{JSON.stringify(newLogin, null, 2)}</pre> */}
        <button className="button is-medium is-danger is-fullwidth" type="submit" disabled={loginButtonDisabled}>Log in</button>
      </form> </div>
    </div>
  );
}

export default Login;
