import React from "react";
import data from "../data.json";
import Food from "./Food";

let tagsName = ["all", "breakfast", "lunch", "shakes"];

class Tags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTag: "all",
    };
  }
  handelClick = (tag) => {
    this.setState({
      activeTag: tag,
    });
  };
  render() {
    return (
      <>
        <ul className="parent">
          {tagsName.map((tag) => (
            <button
              key={tag}
              className={tag === this.state.activeTag ? "active" : "btn"}
              onClick={() => this.handelClick(tag)}
            >
              {tag}
            </button>
          ))}
        </ul>
        <Food tag={this.state.activeTag} />
      </>
    );
  }
}

export default Tags;
