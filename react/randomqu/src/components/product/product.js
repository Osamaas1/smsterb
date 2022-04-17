
import React from 'react';

class Product extends React.Component {
  render() {
    const { id, name, description, price} = this.props.details;
    return (
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    );
  }
}
export default Product;
