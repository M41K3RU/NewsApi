import React from "react";
import PropTypes from "prop-types";
// import CategoryDropdown from "./NewsFiltersBar/CategoryDropdown";
import CategoryDropdownUI from "./NewsFiltersBar/CategoryDropdownUI";
import { Input } from "semantic-ui-react";

const NewsFiltersBar = (props) => (
  <div id="NewsFiltersBar">
    <CategoryDropdownUI onCategoryChange={props.onCategoryChange} />
    <div className="ui icon input">
      <Input
        size="small"
        icon="search"
        id="search-phrase-input"
        placeholder="Search..."
        onChange={props.onSearchPhraseChange}
      />
    </div>
    {/* <input id="search-phrase-input" placeholder="Search..." onChange={props.onSearchPhraseChange} /> */}
  </div>
);

NewsFiltersBar.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
  onSearchPhraseChange: PropTypes.func.isRequired,
};

export default NewsFiltersBar;
