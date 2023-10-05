// import React from "react";
// class Button extends React.Component {
//   render() {
//     return (
//       <div>
//         <button>SUBMIT</button>
//       </div>
//     );
//   }
// }
// export default Button;















import React from "react";
interface ButtonProps{
  ButtonText:string;
  onClick:()=>void;
}
class Button extends React.Component<ButtonProps>{
  render(){
    return(
      <div>
        <button onClick={this.props.onClick}>{this.props.ButtonText}</button>
      </div>
    );
    }
  }
  

export default Button;
