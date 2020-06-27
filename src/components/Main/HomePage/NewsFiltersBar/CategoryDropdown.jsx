import React from "react";
import "./CategoryDropdown.css";

class CategoryDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  onValueChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onCategoryChange(value);
  };

  render() {
    const { value } = this.state;
    return (
      <select id="category-select" value={value} onChange={this.onValueChange}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Tehnology</option>
      </select>
    );
  }
}

export default CategoryDropdown;

// class CategoryDropdown extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: "general" };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ value: event.target.value });
//     }

//     handleSubmit(event) {
//         alert('Twoja wybrana kategoria to: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Wybierz kategorię:
//                 <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="general">General</option>
//                         <option value="business">Business</option>
//                         <option value="entertainment">Entertainment</option>
//                         <option value="health">Health</option>
//                         <option value="science">Science</option>
//                         <option value="sports">Sports</option>
//                         <option value="technology">Tehnology</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Wyślij" />
//             </form>
//         );
//     }
// }

// export default CategoryDropdown;
