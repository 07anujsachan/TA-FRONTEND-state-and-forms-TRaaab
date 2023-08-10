import React from "react";

class Three extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      dob: "",
      email: "",
    };
  }
  handleSubmit = () => {
    alert("Thankyou 🙏🏻");
  };

  render() {
    return (
      <>
        <div className="box flex">
          <aside className="aside">
            <img className="img" src="/three.jpg" alt="#" />
          </aside>
          <section className="section">
            <div>
              <span className="num">✔️</span>
              <span className="pages">Sign Up</span>
              <span className="num">✔️</span>
              <span className="pages">Message</span>
              <span className="num-3">3</span>
              <span className="pages">Checkbox</span>
            </div>
            <hr />
            <div>
              <p className="para">Step3/3</p>
              <h2 className="head">Checkbox</h2>

              <div className="flex space">
                <button className="img-btn">
                  <img className="btn-img" src="/male.png" alt="#" />
                </button>
                <button className="img-btn">
                  <img className="btn-img" src="/female.jpg" alt="#" />
                </button>
              </div>

              <div className="flex top">
                <div className="flex">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    value=""
                  />
                  <label htmlFor="checkbox"> I want to add this option</label>
                </div>
              </div>
              <div className="flex top">
                <div className="flex">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    value=""
                  />
                  <label htmlFor="checkbox">
                    {" "}
                    Let me click on this checkbox and choose some cool stuff
                  </label>
                </div>
              </div>

              <hr />

              <div>
                <button
                  className="back-btn"
                  type="submit"
                  onClick={() => this.props.handleStep("two")}
                >
                  {" "}
                  Back
                </button>
                <button
                  className="btn"
                  onClick={this.handleSubmit}
                  type="submit"
                >
                  {" "}
                  Submit
                </button>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Three;
