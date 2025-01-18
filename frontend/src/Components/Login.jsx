import React, { useState } from "react";
import "./Login.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import wave from "../assets/wave.png";
import bg from '../assets/bg.svg';
import avatar from '../assets/avatar.svg';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    
    const response = await axios.get("http://localhost:3000/signin", {
      username,
      email,
      password
    });

    console.log(response.data);

    if (response.data) {
      navigate('/home', { state: { user: response.data.username } });
    }
  };

  return (
    <div className="container">
      <img className="wave" src={wave} alt="Wave" />
      <div className="img">
        <img src={bg} alt="Background" />
      </div>
      <div className="login-content">
        <form className="login-form" onSubmit={handleLogin}>
          <img src={avatar} alt="Avatar" />
          <h2 className="title">Login</h2>
          <div className="input-div one">
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div className="div">
              <h5>Username</h5>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={(e) => e.target.parentNode.parentNode.classList.add('focus')}
                onBlur={(e) => { if (e.target.value === '') e.target.parentNode.parentNode.classList.remove('focus') }}
              />
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <div className="div">
              <h5>Email</h5>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={(e) => e.target.parentNode.parentNode.classList.add('focus')}
                onBlur={(e) => { if (e.target.value === '') e.target.parentNode.parentNode.classList.remove('focus') }}
              />
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <div className="div">
              <h5>Password</h5>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={(e) => e.target.parentNode.parentNode.classList.add('focus')}
                onBlur={(e) => { if (e.target.value === '') e.target.parentNode.parentNode.classList.remove('focus') }}
              />
            </div>
          </div>
          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
