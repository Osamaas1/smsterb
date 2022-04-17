/**************************
 * IMPORT LIBARIES
 * ************************* */
import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
/*************************
 * * CREATE REACT COMPONENT
 * *************************** */

export default function App() {
    return (
        <div className='app'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
// or export default App;

