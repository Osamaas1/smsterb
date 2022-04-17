import React from "react";
 import "./book.css";
 import imaga from "../../imaages/a.jpg";
function Book(props) {
  const { title,img, pText1, pText2, footerText } = props.book;
  return (
    <section className="book">
      <h1>{title}</h1>
      <figure>
        <img src={img} alt="img1" />
        <img src={imaga} alt="img1" />
      </figure>

      <h5>{pText1}</h5>
      <p>{pText2}</p>
      <footer>{footerText}</footer>
    </section>
  );
}
export default Book;
