import React from 'react'
import '../styles/topicgrid.css'
import map from '../images/map.jpg'
const Topicgrid = () => {
  return (
    <>
        
            <div className='topicgrid'>
                <div >
                   
                    <img style={{height:"354px",borderRadius:"15px"}}src={map} alt=''/>
                    <div style={{position:"relative",bottom:"180px",fontSize:"38px",fontFamily:"Arial ",color:"#FFFFFF",fontWeight:"800",left:"30px"}}>Best photography<br/>locations<br/><span style={{fontSize:"18px",fontWeight:"500",textDecoration:"underline"}}>Read more</span></div>
                </div>
                <div>
                    <div className='topiclist'>
                        <span style={{fontSize:"26px",position:"relative",left:"31px",marginTop:"20px",display:"inline-block"}}>Topics</span>
                        <ul style={{listStyleType:"none",position:"relative",right:"40px",color:"#7a9aeb"}}>
                            <li>Deals</li>
                            <li>Interviews</li>
                            <li>Photography Tips</li>
                            <li>Reviews</li>
                            <li>Uncategorized</li>
                            <li>Others</li>
                        </ul>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Topicgrid