import React from 'react';
import './header.css';
 

function Header(props){

   
  const myColor=props.myColor
  const h1Style={color:myColor
    ,textAlign: 'center'
     
 
}
  return(
    <header className='header'>
      <h1>Book </h1> 
       
     
    </header>
  );
}
export default Header;