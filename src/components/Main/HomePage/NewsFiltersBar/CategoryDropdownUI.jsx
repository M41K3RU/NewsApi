import React from "react";
import { Dropdown } from "semantic-ui-react";
import "./CategoryDropdownUI.css";

const friendOptions = [
  { key: "general", value: "general", text: "General" },
  { key: "business", value: "business", text: "Business" },
  { key: "entertainment", value: "entertainment", text: "Entertainment" },
  { key: "health", value: "health", text: "Health" },
  { key: "science", value: "science", text: "Science" },
  { key: "sports", value: "sports", text: "Sports" },
  { key: "technology", value: "tehnology", text: "Technology" },
];
class CategoryDropdownUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  onValueChange = (e, { value }) => {
    // const value = e.target.value;
    this.setState({ value });
    this.props.onCategoryChange(value);
  };

  render() {
    const { value } = this.state;
    return (
      <Dropdown
        id="category-select-ui"
        value={value}
        // options={countryOptions}
        placeholder="Select Category"
        fluid
        selection
        options={friendOptions}
        onChange={this.onValueChange}
      />
    );
  }
}

export default CategoryDropdownUI;

// const SelectExample = () => (
//   <Select placeholder="Select your country" options={countryOptions} />
// );
