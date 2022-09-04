import React from 'react'
import markerImg from '../assets/marker.png'
import "./markerInner.css"

function MarkerInner({array,showLines, removeLines}) {
  return (
    <img className="marker-img" onMouseOut={removeLines} onMouseOver={()=>{showLines(array)}} src={markerImg} alt="" />
  )
}

export default MarkerInner