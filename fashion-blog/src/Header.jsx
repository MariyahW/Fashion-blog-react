import React from 'react'

export default function Header(props) {
    let nav=props.links?.map(link=>{
        return (
   <a href={link.href}>{link.text}</a>
        )
 })
 
    return (
    <div className='Header'>
      <h1>{props.titles[0].main}</h1> 
      <br />
      <h2>{props.titles[0].sub}</h2> 
      <br />
      {nav}</div>
  )
}
