import React from 'react'
import { useState } from 'react'
import logo from './images/login-design.png';
import { Link } from 'react-router-dom';

export const Sign_up = () => {
  const [toggle,setToggle]=useState('#0000');

  const handletoggle=()=>{
     document.body.style.color=toggle;
  }


  return (
    <div className='signup-pg'>
        <img src={logo} />
        <div className='lg-bx'>
            <div className='login-hd'>
                <h1>Rentify</h1>
                 <p>Already Have an Account <span><a href='#'><Link to='/'>Login</Link></a></span></p>
            </div>
            <div className='user-details buyer' >
                <form>
                    <div id="fst-name"> 
                        <input type="text" placeholder='First Name' />
                    </div>
                    <div id="lst-name"> 
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <div id="ph-num"> 
                        <input type="text" placeholder='Phone Number' />
                    </div>
                    <div id="eml"> 
                        <input type="text" placeholder='Email' />
                    </div>
                    <div id="ps-wrd"> 
                        <input type="text" placeholder='Enter Passsword' />
                    </div>
                    <div id="qus-bx"> 
                        <p> Are you a Buyer or a Seller?</p>
                        <label> <input type="radio" name='options'/> Buyer</label>
                        <label><input type="radio"  name='options'/> Seller</label>
                    </div>
                    <div id="btn"> 
                       <button id="sgn-btn"> <Link to='/' className='sg-in-btn'> Sign Up </Link></button>
                    </div>   
                </form>       

            </div> 
        </div>    
    </div>
  )
}

