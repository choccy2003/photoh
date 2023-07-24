import React from 'react'
import '../styles/navbar.css'
import {HiOutlineSearch} from 'react-icons/hi'
import {FaShoppingCart} from 'react-icons/fa'
const Navbar = () => {
  return (
    <>
        <div className='navbar' >
            <div className='nav-components'>
    <div style={{ fontFamily: 'Pluto Sans Heavy', fontSize: '30px' }}>
      <span>PHOT</span><span style={{color:'#7a9aeb'}}>OH!</span>
    </div>
    <div style={{ fontFamily: 'Pluto Sans Heavy', fontSize: '16px' }}>
      Store
    </div>
    <div style={{ fontFamily: 'Pluto Sans Heavy', fontSize: '16px' }}>
      Pro
      </div>
      <div style={{ fontFamily: 'Pluto Sans Heavy', fontSize: '16px' }}>
      Login
      </div>
      <div className='search-box'>
        <span><input type='text' placeholder='Search...' className='search-text'></input></span><span ><HiOutlineSearch style={{position:"relative",top:"4px",height:"20px",width:"20px"}} ></HiOutlineSearch></span>
      </div>
      <div style={{height:"22px"}}>
        <FaShoppingCart style={{height:"22px",width:"22px"}}/>
      </div>

            </div>
        

        </div>
    </>
  )
}

export default Navbar