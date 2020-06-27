import React from "react";
import "./LanguageDropdown.css";
import { Select } from "semantic-ui-react";

// const languageOptions = ["pl", "us", "de", "jp", "it", "ru"];

const languageOption = [
  { key: "pl", value: "pl", flag: "pl", text: "Polish News" },
  { key: "us", value: "us", flag: "us", text: "American News" },
  { key: "de", value: "de", flag: "de", text: "German News" },
  { key: "jp", value: "jp", flag: "jp", text: "Japanese News" },
  { key: "it", value: "it", flag: "it", text: "Italian News" },
  { key: "ru", value: "ru", flag: "ru", text: "Russian News" },
];

class LanguageDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onValueChange = (e, { value }) => {
    // const value = e.target.value;
    this.setState({ value });
    this.props.onLanguageChange(value);
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <div id="language">
          <Select
            value={value}
            onChange={this.onValueChange}
            // options={languageOptions.map((lang) => (
            //   <option key={lang} value={lang}>
            //     {lang}
            //   </option>
            // ))}
            placeholder="Select News Orgin"
            options={languageOption}
          ></Select>
        </div>
      </>
    );
  }
}

export default LanguageDropdown;
