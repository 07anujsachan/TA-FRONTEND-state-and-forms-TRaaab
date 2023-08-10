import React from "react";

class One extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      dob: "",
      email: "",
    };
  }

  handleInput = ({ target }) => {
    let { name, value } = target;

    this.setState({ [name]: value });
  };
  handleNext = () => {};
  render() {
    return (
      <>
        <div className="box flex">
          <aside className="aside">
            <img className="img" src="/one.jpg" alt="#" />
          </aside>
          <section className="section">
            <div>
              <span className="num-1">1</span>
              <span className="pages">Sign Up</span>
              <span className="num">2</span>
              <span className="pages">Message</span>
              <span className="num">3</span>
              <span className="pages">Checkbox</span>
            </div>
            <hr />
            <div>
              <p className="para">Step1/3</p>
              <h2 className="head">Sign Up</h2>
              <form>
                <div className="flex width">
                  <div className="input">
                    <label htmlFor="firstname">First Name </label>
                    <input
                      type=" text"
                      name="firstname"
                      id="firstname"
                      placeholder="First Name"
                      value={this.state.firstname}
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="firstname">Last Name </label>
                    <input
                      type=" text"
                      name="lastname"
                      onChange={this.handleInput}
                      id="lastname"
                      placeholder="Last Name"
                      value={this.state.lastname}
                    />
                  </div>
                </div>
                <div className="flex width">
                  <div className="input">
                    <label htmlFor="dob">Date Of Birth </label>
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      placeholder="Date Of Birth"
                      value={this.state.dob}
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="email">Email Address </label>
                    <input
                      type=" email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
              </form>
              <button
                className="btn-one"
                type="submit"
                onClick={() => this.props.handleStep("two")}
              >
                {" "}
                Next Step
              </button>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default One;
