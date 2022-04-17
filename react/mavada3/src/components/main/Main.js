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
  let arrProduct=[];
  let arrBook = [];
    arrProduct = Productdata.map((el) => <Product key={uuid()} details={el} />);
    arrQuotes = quotes.map((el) => <Quote key={uuid()} details={el} />);
    arrBook = books.map((el) => <Book key={uuid()} details={el} />);


  return (
    <main className="main">
      {arrQuotes}
      <br />
      {arrProduct}
      <br />
      {arrBook}
    </main>
  );
}
export default Main;
