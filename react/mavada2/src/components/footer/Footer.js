import React  from 'react';
import './footer.css'

function Footer(props){


    const headStyle = { textAlign:'center' };
    const {title} = props;


    return(
    <footer className='footer'>
        <p style={headStyle}>{title}</p>
    </footer>)
};

export default Footer;
