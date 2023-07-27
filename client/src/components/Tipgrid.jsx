import React from 'react'
import Tipcard from './Tipcard'

const Tipgrid = (props) => {
  return (
    <>
      <div style={{ height: "470px", background: "rgb(225, 225, 225)" }}>
        <div style={{ marginLeft: "130px", paddingTop: "20px", fontSize: "24px", fontWeight: "700", marginBottom: "30px" }}>Photography Tips</div>
        <div style={{ display: "flex", justifyContent: "space-evenly", marginLeft: "150px", marginRight: "150px" }}>
          {props.tiparray.map((tiparray, i) => { return <Tipcard tiparray={tiparray} key={i} /> })}</div>
        <div style={{ width: "min-content", margin: "auto" }}><button style={{ width: "200px", height: "30px", fontSize: "18px", borderRadius: "20px", border: "none", color: "white", backgroundColor: "#7a9aeb", marginTop: "20px" }}>View More</button></div>
      </div>
    </>
  )
}

export default Tipgrid