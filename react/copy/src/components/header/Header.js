import React from 'react';
import './header.css';
import  Button  from '../Button/Button';

function Header(props){

  const {pText,title}=props
  const myColor='red'
  const h1Style={color:myColor
    ,textAlign: 'center'
     
 
}
  return(
    <header className='header'>
      <h1 style={  h1Style  }>{props.title}</h1>
      <p>{pText}</p>
      <Button/>
    </header>
  );
}
export default Header;