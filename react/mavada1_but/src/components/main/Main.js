/**************************
 * IMPORT LIBARIES
 * ************************* */
// import Quote from "../quote/quotes";
// import Product from "../product/product";
// import Book from "../book/Book";
import React from "react";
import "./main.css";
// import { books } from "../book/Bookdata";
// import { quotes } from "../quote/Quotedata";
// import Productdata from "../product/Productdata";
import Button from "../button/Button";
// import uuid from "react-uuid";

// import image from '../../images';
/*************************
 * * CREATE REACT COMPONENT
 * *************************** */

class Main extends React.Component {
  state = {
    num: 1,
  };

  handleClick = (step) => {
    this.setState((prev) => {
      return {
        num: prev.num + step,
      };
    });
  };
  handleClear = () => this.setState({ num: 0 });

  handleSpecial = () => this.setState({ num: 0 });

  render() {
    return (
      <main class="main">
        {/* <Button start="10" step={this.state.num} /> */}
        <Button val={this.state.num} />
        {/* <button onClick={this.handleClick}>clear</button> */}
        <button onClick={() => this.handleClick(1)}>+</button>
        <button onClick={() => this.handleClick(-1)}>-</button>
        <button onClick={this.handleClear}>clear</button>
        <button onClick={this.handleSpecial}>clear</button>
        {/* <div>{this.state.num}</div> */}
        {/* <button onClick={this.handleClick}>Press Me</button> */}
      </main>
    );
  }
}

export default Main;
