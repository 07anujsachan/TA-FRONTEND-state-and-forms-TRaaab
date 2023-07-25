import "./index.css";
import React from "react";

let buttonData = ["basketball", "pubg", "tiger", "phone", "laptop", "cricket"];

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      image: "basketball",
    };
  }
  handleClick = (name) => {
    this.setState({
      image: name,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="btn-box flex wrap">
          {buttonData.map((name) => {
            return (
              <button onClick={() => this.handleClick(name)} className="btn">
                {" "}
                {name}
              </button>
            );
          })}
        </div>
        <figure className="figure">
          <img src={`/assets/${this.state.image}.jpg`} alt="image" />
        </figure>
      </div>
    );
  }
}

export default App;
