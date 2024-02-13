import React from 'react'

export default function Header(props) {
    let nav=props.links?.map(link=>{
        return (
   <a href={link.href}>{link.text}</a>
        )
 })
 
    return (
    <div>
      {props.titles[0].main}
      <br />
      {props.titles[0].sub}
      <br />
      {nav}</div>
  )
}
