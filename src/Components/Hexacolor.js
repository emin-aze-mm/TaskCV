
import React from 'react'

export default function Hexacolor() {
    const hexaColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
          let index = Math.floor(Math.random() * str.length)
          color += str[index]
        }
        return "#" + color
        }
    const colors = []
    for (let index = 0; index < 5; index++) {
        colors.push(hexaColor())
    }
  return (
   <>
    {colors.map((item,index) =>{ return(<div className='item' key={index} style={{background:item}}>{item}</div>)})}
   </>
  )
}
