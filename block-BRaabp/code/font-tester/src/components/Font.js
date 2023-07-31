import React from "react";
import data from "./Data";

class Font extends React.Component {
  constructor(props) {
    super();
    this.state = {
      input: "",
      value: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  handleRange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    let fontFamily = data.map((fonts) => fonts);
    return (
      <>
        <div className="container">
          <h1> Font Tester</h1>
          <div className="flex border">
            <div className="input">
              <input
                type="text"
                placeholder="Type Somethimg"
                onChange={this.handleChange}
              />
            </div>
            <div className="range">
              <p>{this.state.value}</p>
              <input
                type="range"
                value={this.state.value}
                onChange={(e) => this.handleRange(e)}
              />
            </div>
          </div>

          <div className="font flex wrap between">
            {fontFamily.map((font) => {
              return (
                <>
                 
                   
                  <div className="font-box">
                    <h2 style={font}> {font.name} </h2>
                    <p className="para" style={{
                      fontFamily: font["font-family"],
                      fontSize: this.state.value + "px",
                    }}> {this.state.input}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Font;
