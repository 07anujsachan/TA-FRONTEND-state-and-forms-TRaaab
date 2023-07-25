import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      steps: 0,
      maxValue: 0,
    };
  }
  handleIncrement = () => {
    if (this.state.counter < this.state.maxValue) {
      if (this.state.steps > 0) {
        if (this.state.steps === 5) {
          this.setState({ counter: this.state.counter + 5 });
        }
        if (this.state.steps === 10) {
          this.setState({ counter: this.state.counter + 10 });
        }
        if (this.state.steps === 15) {
          this.setState({ counter: this.state.counter + 15 });
        }
      } else {
        this.setState({ counter: this.state.counter + 1 });
      }
    } else {
      alert("You have reached the max value");
    }
  };
  handleDecrement = () => {
    if (this.state.steps > 0) {
      if (this.state.steps === 5) {
        this.setState({ counter: this.state.counter - 5 });
      }
      if (this.state.steps === 10) {
        this.setState({ counter: this.state.counter - 10 });
      }
      if (this.state.steps === 15) {
        this.setState({ counter: this.state.counter - 15 });
      }
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  handleReset = () => {
    this.setState({ counter: 0 });
  };
  handleSteps = (num) => {
    this.setState({ steps: num });
  };

  handleMax = (num) => {
    this.setState({ maxValue: num });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="value">{this.state.counter}</h1>
          <div className="flex">
            <div className="steps">
              <h2>Steps</h2>
              <button
                onClick={() => this.handleSteps(5)}
                className={this.state.steps === 5 ? "active" : "btn-number"}
              >
                05
              </button>
              <button
                onClick={() => this.handleSteps(10)}
                className={this.state.steps === 10 ? "active" : "btn-number"}
              >
                10
              </button>
              <button
                onClick={() => this.handleSteps(15)}
                className={this.state.steps === 15 ? "active" : "btn-number"}
              >
                15
              </button>
            </div>
            <div className="max-value">
              <h2>Max value</h2>
              <button
                onClick={() => this.handleMax(15)}
                className={this.state.maxValue === 15 ? "active" : "btn-number"}
              >
                15
              </button>
              <button
                onClick={() => this.handleMax(100)}
                className={
                  this.state.maxValue === 100 ? "active" : "btn-number"
                }
              >
                100
              </button>
              <button
                onClick={() => this.handleMax(200)}
                className={
                  this.state.maxValue === 200 ? "active" : "btn-number"
                }
              >
                200
              </button>
            </div>
          </div>
          <div className="flex">
            <button className="btn" onClick={() => this.handleIncrement()}>
              Increment
            </button>
            <button className="btn" onClick={() => this.handleDecrement()}>
              Decrement
            </button>
            <button className="btn" onClick={() => this.handleReset()}>
              Reset
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
