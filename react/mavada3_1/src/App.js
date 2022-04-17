import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
// import Book from './components/book/Book';

function App(){
  return (
      <div className='app'>
          <Header title = 'Book Component By Function' textAling = 'center' />
          <Main/>
          <Footer title = 'footer123'/>

      </div>
  );
};

export default App;
