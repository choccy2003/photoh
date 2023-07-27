import React from 'react'
import '../styles/tipcard.css'

const Tipcard = (props) => {
    return (

        <div className='tip-card'>
            <div style={{ height: "180px", width: "300px", backgroundColor: "rgb(230, 230, 230)" }}>
                <img src='' />
            </div>
            <div className='tip-des'>
                <div style={{ fontSize: "22px", marginBottom: "10px", marginTop: "10px", fontWeight: "700" }}>{props.tiparray.title}</div>
                {props.tiparray.description}<br />
                <a href='#'>Read more</a>
            </div>
        </div>


    )
}

export default Tipcard