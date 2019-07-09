import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};
class SearchBar extends React.Component {
  renderSortByOptions() {
    //we access the keys of the sortByOptions and map it to store the Values in a new variable.
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }
}
