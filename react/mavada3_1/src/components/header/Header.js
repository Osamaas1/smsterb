import React  from 'react';

import './header.css'

function Header(props){

    // const title = props.title;
    // const pText = props.pText;

    const {title} = props;

    const headStyle = { textAlign:'center' };

    return(<header className='header'>
        <h1 style={headStyle}> {title} </h1>
    </header>)
};

export default Header;
