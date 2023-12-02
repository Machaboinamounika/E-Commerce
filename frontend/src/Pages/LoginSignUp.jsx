import React, { useState } from 'react'
import './CSS/LoginSignUp.css'
import { useNavigate } from 'react-router-dom'

const LoginSignUp = () => {
  
   const navigate = useNavigate();
   const [loginCreds, setLoginCreds] = useState({
    id: '',
    username: '',
    email: '',
    mobile: '',
    password: '',
   });

   const [confirmPassword, setConfirmPassword] = useState('');
   const handleChange = (field, value) => {
    setLoginCreds((prevloginCreds) => ({...prevloginCreds, [field]: value}))
   }
   const handlePassword = (e) => {
    setConfirmPassword(e.target.value);
   }
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginCreds.email, loginCreds.mobile, loginCreds.password);
    if(loginCreds.password === confirmPassword){
      localStorage.setItem('details', JSON.stringify(loginCreds));
      alert('Sign Up Successful');
      navigate('/cart');
    }
    else{
      alert('Passwords do not match');
    }
   }

   const [activeTab, setActiveTab] = useState('login');

   const showLogin = () => {
      setActiveTab('login');
   }

   const showSignUp = () => {
      setActiveTab('signup');
   }

   const handleLogin = () =>{
      const response = JSON.parse(localStorage.getItem('details'));
      console.log(response);
      const signedUpEmail = (response.email);
      const signedUpPassword = (response.password);

      console.log(email);
      console.log(password);
      if(email === signedUpEmail && password === signedUpPassword){
        alert("Login Successful");
         navigate('/cart');
      }
      else if(email !== signedUpEmail){
        alert("Email is not registered");
      }
      else if(password !== signedUpPassword){
        alert("Password is incorrect");
      }
  }
  const [email, setEmail]  = useState("");
  const [password, setPassword] = useState("");  

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <button onClick={showLogin}>Login</button>
         <button onClick={showSignUp}>Sign Up</button>

         {activeTab === 'login' ? (
          <div>
             {/* Login form goes here */}
             <h1>Login</h1> 
             <div className='loginsignup-fields'>
                <input type = "Numbers" placeholder='Mobile Number'/>
                <input type = "email" required onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email Address'/>
                <input tyoe = "password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password'/> 
             </div>
             <button onClick={handleLogin}>Continue</button>
             <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
           
             <div className='loginsignup-agree'>
              <input type = "checkbox" name='' id=''/>
               <p>By continuing, I agree to the terms of use & Privacy Policy </p>
             </div>
          </div>
       ) : (
          <div>
             {/* Sign up form goes here */}
              <h1>Sign Up</h1>
              <div className='loginsignup-fields'>
                <input type = "Numbers" required onChange={(e) => handleChange('mobile', e.target.value)} placeholder='Mobile Number'/>
                <input type = "text" required onChange={(e) => handleChange('username', e.target.value)} name="your name" placeholder='your name'/>
                <input type = "email" required onChange={(e) => handleChange('email', e.target.value)} name="email" placeholder='Email Address'/>
                <input type = "password" required onChange={(e) => handleChange('password', e.target.value)} name="password" id='password' placeholder='password'/>
                <input type = "password" required onChange={handlePassword} name="confirmPassword" id='confirmPassword' placeholder='confirmPassword'/> 
             </div>
             <button onSubmit={handleSubmit}>SignUp</button>
             <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
           
             <div className='loginsignup-agree'>
              <input type = "checkbox" name='' id=''/>
               <p>By continuing, I agree to the terms of use & Privacy Policy </p>
             </div>
          </div>
       )}
      </div>
    </div>
 )
}


export default LoginSignUp