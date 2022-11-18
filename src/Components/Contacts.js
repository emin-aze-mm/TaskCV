import React from 'react'

function Contacts(props) {
  return (
    <div className='contacts'>
    <div><strong>Github: </strong>{props.name}</div>
    <div><strong>Mail: </strong>{props.mail}</div>
    </div>
  ) 
}

export default Contacts