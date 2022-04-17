import React, { Component }  from 'react';
import Book from '../book/Book';
import {quotes} from "./quotes";
import uuid from 'react-uuid';
import { IoIosAlert } from "react-icons/io";
// import './main.css'

// import {book} from '..main/data'
import Quotes from '../Quotes/Quotes';

// const book1 = {
//     title:"React Book 1" ,
//     img:"https://miro.medium.com/max/277/1*KB0m1gkDbhqJsV_wa2ISXQ.jpeg",
//     description:'this is a book1 about react',
// }

// const book2 = {
//     title:"React Book 2" ,
//     img:"https://miro.medium.com/max/277/1*KB0m1gkDbhqJsV_wa2ISXQ.jpeg",
//     description:'this is a book2 about react',
// }
// let arr=[1,2,3,'aaa']
let arr1=[]
function Main (){
    // arr1=arr.map((el)=><p key={uuid()}>{el}</p>)
    // const q=books.map(el => <Book key={uuid} book={el}/>)
    
       const arr = quotes.map((el) => <Quotes key={uuid()} quotes={el} />);
        // console.log(arr);
        return (
          <main className="main">
            <IoIosAlert />
            {/* {arr1} */}
            {/* <Book book={books[0]} className="book1" />
            <Book book={books[1]} className="book2" />
            <Book book={books[2]} className="book3" />
            <Book book={books[3]} className="book4" /> */}
            {/* {arrbok} */}
            {arr}
          </main>
        );
    
}
export default Main;
