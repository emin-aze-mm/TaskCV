import React from 'react'
import img from "../photos/Emin.jpg"

export default function Portfolio(props) {
    const Array = ["HTML","CSS","SCSS","JS","REACT","BOOTSTRAP","MYSQL","GIT","REDUX"]
    const formArray = Array.map((el)=><li>{el}</li>)
    console.log(props)
  return (
    <div className='Portfolio'>
      
        <img src={img} alt=""/>
        <p className='name'>Emin Məmmədzadə </p>
        <p>Junior Developer, Azerbaijan <i className="correct fa-solid fa-circle-check"></i></p>
        <p className='Skills'>Skills</p>
        <ul>
            {formArray} 
        </ul>
    </div>
  )
}
