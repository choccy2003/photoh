import React from 'react'
import '../styles/banner.css'
import {HiOutlineSearch} from 'react-icons/hi'
const Searchbanner = () => {
  return (
    <div>
        <div className='banner' >
            
        <div className='bannercard'>
        <div style={{fontFamily:'Pluto Sans Heavy',fontSize:'42px',color:"#FFFFFF",paddingBottom:"13px"}}>
            PhotOH Blog
        </div>
        <div style={{fontFamily:'calibri',fontSize:'20px',color:"#FFFFFF",paddingBottom:"25px"}}>
            Be or get professional photographer with great
            deals!
        </div>
        <div className='banner-searchbox'>
        <span><input style={{height:"20px",width:"170px",marginTop:'3px',marginLeft:'3px',outline:"none",border:"none",fontSize:"18px",position:"relative",bottom:"2px"}} type='text'/></span> <span style={{display:"inline-block",height:"36px",backgroundColor:"#7a9aeb",width:"39px",borderTopRightRadius:"7px",borderBottomRightRadius:"7px",position:"relative",left:"41px"}}><HiOutlineSearch style={{width:'25px',height:"25px",position:'relative',top:'6px',left:"9px",stroke:"#FFFFFF"}} /></span>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Searchbanner