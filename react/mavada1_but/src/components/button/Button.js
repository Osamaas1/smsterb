import React from "react";

import "./button.css";

// class Button extends React.Component {
//   state = {
//     count: Number(this.props.start),
//   };

//   handleClick = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + Number(this.props.step),
//     }));
//   };
//   render() {
//     return (
//       <div class="button">
//         <button onClick={this.handleClick}>{this.state.count}</button>
//       </div>
//     );
//   }
// }
class Button extends React.Component {
  render() {
    return (
      <div class="button">
        <button>{this.props.val}</button>
      </div>
    );
  }
}
export default Button;
