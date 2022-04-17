import React from 'react';
 
 import Header from './components/header/Header';
 import Main from './components/main/Main';
 import Footer from './components/footer/Footer';



 
 
function App(){
  const color='green'
  return(
    <div>
       
     
        <Header title="lab1 ex 1" pText="Sub header"/>
     
        
        <Main /> 
         
        <Footer name='osamaas'
        myclass='46-1' color={color} footerBgClass='footer-p' text="bay bay endl"/> 
       
    </div>
  );
}
export default App;
