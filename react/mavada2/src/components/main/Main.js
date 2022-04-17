import React, { Component }  from 'react';
import Book from '../book/Book';
import uuid from 'react-uuid';
import { IoIosAlert } from "react-icons/io";
import './main.css'
// import {book} from '..main/data'
// import 
export const books = [ {
    img:"https://miro.medium.com/max/277/1*KB0m1gkDbhqJsV_wa2ISXQ.jpeg",
    h1: "By Kyle Simpson" ,
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae optio totam quis commodi inventore neque magni maxime quas voluptas quaerat et, eum eveniet facilis earum velit nostrum iure perspiciatis quia.'} ,
    { 
    img:"https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
    h1: "By Kyle Simpson" ,
    description:'Lorem ipsum dolor sit amet consectetur adipisicing',
    } , 
    {
    img:"https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg",
    h1: "By David Flanagan" ,
    description:'Lorem ipsum dolor sit amet consectetur',
    },
    {
    img:"https://miro.medium.com/max/277/1*KB0m1gkDbhqJsV_wa2ISXQ.jpeg",
    h1: "By Mark Tielens Thomas" ,
    description:'Lorem ipsum dolor sit amet consectetur',
    }];
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
let arr=[1,2,3,'aaa']
let arr1=[]
function Main (){
    arr1=arr.map((el)=><p key={uuid()}>{el}</p>)
    const arrbok=books.map(el => <Book key={uuid} book={el}/>)
        return (
          <main className="main">
            <IoIosAlert />
            {arr1}
            {/* <Book book={books[0]} className="book1" />
            <Book book={books[1]} className="book2" />
            <Book book={books[2]} className="book3" />
            <Book book={books[3]} className="book4" /> */}
            {arrbok}
          </main>
        );
    
}
export default Main;
