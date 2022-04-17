import React from 'react';
import './footer.css';
import  Button  from '../Button/Button';










function Footer(props){
  // const name='OSAMa'
  // const myclass='46/1'

  let date=new Date();
  date=date.getFullYear();
  return(
    <footer className='footer' style={  {color:props.color}  }>
      <p className={props.footerBgClass} 
       >  {date} {props.name}  {props.myclass} {props.text}</p>
      
   <Button/>
    </footer>
  );
}
export default Footer;