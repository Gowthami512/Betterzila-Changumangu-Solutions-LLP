import React from 'react'
import { useState } from 'react'
import logo from './images/login-design.png';
import { Link } from 'react-router-dom';

export const Sign_in = () => {
  const [toggle,setToggle]=useState('#0000');

  const handletoggle=()=>{
     document.body.style.color=toggle;
  }


  return (
    //  <div className='container'>
    //    <div className='con-page'>
    //     <button onClick={handletoggle}>bg</button>
    //     <div className='box'>
    //       <form>
    //         <div className='first-name'>
    //           <input type='text' placeholder='First Name' />
    //         </div>
    //         <div className='lst-name'>
    //           <input type='text' placeholder='Last Name' />
    //         </div>
    //         <div className='email'>
    //           <input type='email' placeholder='Email' />
    //         </div>
    //         <div className='pass'>
    //           <input type='email' placeholder='Email' />
    //         </div>
    //       </form>
    //     </div>
    //    </div>
    //  </div>
    <div className='login-pg '>
        <img src={logo} />
        <div className='lg-bx'>
            <div className='login-hd'>
                <h1>Rentify</h1>
                 <p>Create your account here  <span><a href='#'><Link to='/Sign_up'>Sign Up</Link></a></span></p>
            </div>
            <div className='user-details buyer' >
                <form>
                    <div id="eml"> 
                        <input type="text" placeholder='Email' />
                    </div>
                    <div id="ps-wrd"> 
                        <input type="text" placeholder='Enter Passsword' />
                    </div>
                    <div className='fr-psw'>
                        <input type='checkbox' />
                        <p>Forgot Passsword</p>
                    </div>
                    <div id="btn"> 
                       <button id="sgn-btn">  Sign In</button>
                    </div>   
                </form>       

            </div> 
        </div>    
    </div>
  )
}

