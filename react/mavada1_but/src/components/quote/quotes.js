
import React from 'react';

class Quote extends React.Component {
  render() {
    const { quote, cite} = this.props.details;
    return (
      <div>
        <p>{quote}</p>
        <p>{cite}</p>
      </div>
    );
  }
}
export default Quote;
