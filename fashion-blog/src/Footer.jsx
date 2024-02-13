import React from 'react';
import "./App.css"

export default function Footer(props) {
 const nav = props.links?.map(link=>{
    return (
    <a href={link.href}>{link.text}</a>
    )
 })
 
    return (
    <div className="Footer">
        <nav>{nav}</nav> 
    <br />
     <span >© Valet Industries, Inc</span>
    </div>
  )
}
