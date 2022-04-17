import React  from 'react';
import './book.css'

class Book extends React.Component {
    render(){
        console.log(this.props);
        const { img, alt, h1, description } = this.props.book;

    return (
        <section className="book">
                <div>
            <figure>
                <img 
                src = {img}  /* props.src */
                alt = {alt} /* props.alt */
                 />
            </figure>
            <p>{h1}</p>
            <p>{description}</p>
            </div>
        </section>
    )
}
}

export default Book;
