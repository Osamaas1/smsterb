import React from 'react';
import './book.css';
//  function book(props) {
//     // const { img, alt, title, description } = props.book;
//     return (
//         <section className="book">
//             <h2>{props.book.title}</h2>
//             <p>{props.book.author}</p>
//             <figure>
//                 <img src={props.book.img} alt={props.book.alt} />
//             </figure>
//             <p>{props.book.description}</p>
//         </section>)
// };
class Book extends React.Component {
    render() {
        const { title, author, img, alt, description } = this.props.details;
        return (
            <section className="book" >
                <h2>{title}</h2>
                <p>{author}</p>
                <figure>
                    <img src={img} alt={alt} />
                </figure>
                <p>{description}</p>
            </section>)
    }
}
export default Book;