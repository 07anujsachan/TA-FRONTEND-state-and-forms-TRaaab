import React from "react";

class Two extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textarea: "",
    };
  }
  handleInput = ({ target }) => {
    let { name, value } = target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        <div className="box flex">
          <aside className="aside">
            <img className="img" src="/two.jpg" alt="#" />
          </aside>
          <section className="section">
            <div>
              <span className="num">✔️</span>
              <span className="pages">Sign Up</span>
              <span className="num-2">2</span>
              <span className="pages">Message</span>
              <span className="num">3</span>
              <span className="pages">Checkbox</span>
            </div>
            <hr />
            <div>
              <p className="para">Step2/3</p>
              <h2 className="head">Message</h2>

              <form>
                <label htmlFor="message">Message</label>
                <textarea
                  rows="10"
                  name="textarea"
                  onChange={this.handleInput}
                  cols="64"
                ></textarea>

                <div className="flex">
                  <div className="flex">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      value=""
                    />
                    <label htmlFor="checkbox"> the number one choice</label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      value=""
                    />
                    <label htmlFor="checkbox"> the number two choice</label>
                  </div>
                </div>
              </form>
              <hr />

              <div>
                <button
                  className="back-btn"
                  type="submit"
                  onClick={() => this.props.handleStep("one")}
                >
                  {" "}
                  Back
                </button>
                <button
                  className="btn"
                  type="submit"
                  onClick={() => this.props.handleStep("three")}
                >
                  {" "}
                  Next Step
                </button>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Two;
