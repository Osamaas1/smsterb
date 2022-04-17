import React, { Component } from "react";
import "./main.css";
import Book from "../book/Book";
import books from "./data"
// function Main() {
    

//   return (
//     <main>
//       <Book book={books[0]} />
//       <Book book={books[1]} />
//     </main>
//   );
// }
class Main extends Component {
  render(){
  return (
    <main>
      <Book book={books[0]} />
      <Book book={books[1]} />
    </main>
  );
  }
}
export default Main;
