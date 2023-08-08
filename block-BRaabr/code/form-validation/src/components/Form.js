import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",

      errors: {
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
    };
  }
  handelInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username =
          value.length > 3 ? "" : "Username must be at least 3 characters";
        break;
      case "email":
        errors.email = this.validateEmail(value) ? "" : "email not valid";
        break;
      case "password":
        errors.password =
          value.length > 6 ? "" : "password must be at least 6 characters";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  handelSubmit = () => {
    alert("Please check you details 👇🏾 ");
  };
  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  render() {
    let { username, email, password, confirmpassword } = this.state.errors;

    return (
      <>
        <div className="box">
          <h1 className="heading"> Register With Us</h1>
          <form onSubmit={this.handelSubmit}>
            <label htmlFor="username"> Username</label>
            <input
              onChange={this.handelInput}
              type="text"
              id="username"
              name="username"
              placeholder="Enter  username"
              value={this.state.username}
              className={username && "error"}
            />
            <span className="error-msg">{username}</span>
            <label htmlFor="Email"> Email</label>
            <input
              onChange={this.handelInput}
              type="email"
              id="Email"
              name="email"
              className={email && "error"}
              placeholder="Enter  Email"
              value={this.state.email}
            />
            <span className="error-msg"> {email}</span>
            <label htmlFor="password"> Password</label>
            <input
              onChange={this.handelInput}
              type="text"
              id="password"
              name="password"
              className={password && "error"}
              placeholder="Enter password"
              value={this.state.password}
            />
            <span className="error-msg">{password}</span>
            <label htmlFor="Password"> Confirm password</label>
            <input
              onChange={this.handelInput}
              type="text"
              id="Password"
              className={confirmpassword && "error"}
              name="confirmpassword"
              placeholder="Enter password again "
              value={this.state.confirmpassword}
            />
            <span className="error-msg">{confirmpassword}</span>
            <button className="btn" type="submit">
              {" "}
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
