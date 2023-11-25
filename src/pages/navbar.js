import React from 'react';
import logo from '../images/Logo.png';
import './navbar.css';

const navbar = () => {
  return (
    <div>
        <header>
            <img src={logo} alt='logo' className='logodesign'/>

            <h1 className='navh1'> Features</h1>


            <h1 className='navh1'> Use Cases</h1>


            <h1 className='navh1'> Demo Video</h1>

            <button className='tryAIJusTech'> Try AIJusTech</button>

        </header>

            
        </div>
    )
}


export default navbar