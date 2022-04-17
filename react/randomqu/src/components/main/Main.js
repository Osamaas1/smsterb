/**************************
 * IMPORT LIBARIES
 * ************************* */
import Quote from "../quote/quotes";
import Product from "../product/product";
import Book from "../book/Book";

import "./main.css";
import { books } from "../book/Bookdata";
import { quotes } from "../quote/Quotedata";
import Productdata from "../product/Productdata";

import uuid from "react-uuid";

// import image from '../../images';
/*************************
 * * CREATE REACT COMPONENT
 * *************************** */

function Main() {
  let arrQuotes = [];
  let arrProduct = [];
  let arrBook = [];
  arrProduct = Productdata.map((el) => <Product key={uuid()} details={el} />);
  arrQuotes = quotes.map((el) => <Quote key={uuid()} details={el} />);
  // arrQuotes = <Product key={uuid()} details={quotes[2]} />;
  arrBook = books.map((el) => <Book key={uuid()} details={el} />);

  const clicka = () => {
    return Math.floor(Math.random() * arrQuotes.length - 1) + 1;
  };

  return (
    <main className="main">
      <button onClick={() => {clicka()}}>{arrQuotes[clicka()]} </button>
      <button>help me</button>

      <br />
      {/* {arrProduct} */}
      <br />
      {/* {arrBook} */}
    </main>
  );
}
export default Main;
