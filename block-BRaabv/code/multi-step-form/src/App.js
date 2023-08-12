import React from "react";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: "one",
    };
  }
  handleStep = (step) => {
    this.setState({ activeStep: step });
  };

  render() {
    return (
      <>
        {this.state.activeStep == "one" && <One handleStep={this.handleStep} />}
        {this.state.activeStep == "two" && <Two handleStep={this.handleStep} />}
        {this.state.activeStep == "three" && (
          <Three handleStep={this.handleStep} />
        )}
      </>
    );
  }
}

export default App;
