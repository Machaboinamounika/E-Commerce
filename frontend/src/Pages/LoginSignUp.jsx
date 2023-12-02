import React, { useState } from 'react'
import './CSS/LoginSignUp.css'
import { Link, useNavigate } from 'react-router-dom'

const LoginSignUp = () => {
  
   const navigate = useNavigate();
      const handleLogin = () => {
      const response = JSON.parse(localStorage.getItem('details'));
      console.log(response);
      const signedUpEmail = (response.email);
      const signedUpPassword = (response.password);

      console.log(email);
      console.log(password);
      if(email === signedUpEmail && password === signedUpPassword) {
         alert('Login Successful');
         navigate('/cart');
      } else if(email !== signedUpEmail) {
         alert('Email not found');
      }
      else if(password !== signedUpPassword) {
         alert('Incorrect password');
      }
      else {
         alert('Email and password not found');
      }
   } 
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [loginCreds, setLoginCreds] = useState({
      id:"",
      email:"",
      username:"",
      password:""
   });
   const [confirmPassword, setConfirmPassword] = useState("");
   const [activeTab, setActiveTab] = useState("login");
   
   const handleChange = (field, value) => {
      setLoginCreds((prevLoginCreds) => ({...prevLoginCreds, [field]: value}))
   }
   
   const handlePassword = (e) => {
      setConfirmPassword(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(loginCreds.email, loginCreds.username, loginCreds.password);
      if(loginCreds.password === confirmPassword){
         localStorage.setItem("details", JSON.stringify(loginCreds));
         alert("Registration Successful")
      }
      else{
         alert("Passwords do not match");
      }
   }
      
 const showLogin = () => {
   setActiveTab('login');
}

const showSignUp = () => {
   setActiveTab('signup');
}


  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
         <div className='tabs'>
           <button className='btn1' onClick={showLogin}>Login</button>
           <button onClick={showSignUp}>Sign Up</button>
         </div> 

         {activeTab === 'login' ? (
          <div>
             {/* Login form goes here */}
             <h1>Login</h1> 
             <div className='login-fields'>
                <input type = "email" required onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email Address'/>
                <input type = "password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password'/>
                <Link to ="/forgotpassword">forgot password</Link>
             </div>
             <button className="btn-login" onClick={handleLogin}>LOGIN</button>
             <p className='loginsignup-login'>Don't have an account?<span>Register</span></p>
          </div>
       ) : (
          <div>
             {/* Sign up form goes here */}
             <form onSubmit={handleSubmit}>
              <h1>Sign Up</h1>
              <div className='signup-fields'>
                <input type = "text" required onChange={(e) => handleChange('username', e.target.value)} name="your name" placeholder='your name'/>

                <input type = "email" required onChange={(e) => handleChange('email', e.target.value)} name="email" placeholder='Email Address'/>

                <input type = "password" required onChange={(e) => handleChange('password', e.target.value)} name="password" id='password' placeholder='password'/>
                
                <input type = "password" required onChange={handlePassword} name="confirmPassword" id='confirmPassword' placeholder='confirmPassword'/> 

             </div>
             <button className="signup">SignUp</button>
             <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
           
             <div className='loginsignup-agree'>
              <input type = "checkbox" name='' id=''/>
               <p>By continuing, I agree to the terms of use & Privacy Policy </p>
             </div>
             </form>
          </div>
       )}
      </div>
    </div>
 )
}


export default LoginSignUp