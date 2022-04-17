 import React from "react";
 function Quotes (props){
   const {quote,cite}=props.quotes
   return (
     <section>
       <p>{quote}</p>
       <p>{cite}</p>
     </section>
   );
 }
export default Quotes;