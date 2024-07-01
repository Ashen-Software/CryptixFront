import React, { useEffect, useState } from 'react';
import './login.css';
import Nav from '../../componentes/Nav/Nav';
import LoginImg from '../../assets/login-img.png';
import EyeIcon from '../../assets/eye.svg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Obtén la altura de la barra de navegación
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    
    // Establece el padding-top en el contenido para evitar la superposición
    document.querySelector(".login-container").style.paddingTop = `${navbarHeight}px`;
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Nav />
      <div className="login-container">
        <div className="left">
          <img src={LoginImg} alt="Login" />
        </div>
        <div className="right">
          <form className='login-form' action="">
            <h3>Login to your account</h3>
            <label className='email' htmlFor="email">Email
              <input id='email' type="email" placeholder='Enter your email' required/>
            </label>
            <label className='password' htmlFor="password">Password
              <div className="password-container">
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  required
                />
                <img
                  src={EyeIcon}
                  onClick={togglePasswordVisibility}
                  alt="Toggle Password Visibility"
                />
              </div>
            </label>
            <button>Login now</button>
            <div className="not-account">
              <p>Don't have an account? </p><a href="">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
