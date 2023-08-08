import React from "react";

class Address extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      city: "",
      country: "",
      state: "",
      zipcode: "",

      bAddress: "",
      bCity: "",
      bCountry: "",
      bState: "",
      bZipcode: "",

      checked: false,
    };
  }
  handleInput = ({ target }) => {
    let { name, value } = target;

    this.setState({ [name]: value });
  };
  handleCheckBox = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };
  render() {
    return (
      <>
        <header>
          <h1> Address </h1>
        </header>
        <div className="add-box">
          <h2>Shipping Address</h2>
          <input
            type="text"
            id="address"
            placeholder="Address 1"
            name="address"
            value={this.state.address}
            className="address"
            onChange={this.handleInput}
          />
          <input
            type="text"
            id="city"
            placeholder="City "
            name="city"
            value={this.state.city}
            className="city"
            onChange={this.handleInput}
          />
          <input
            type="text"
            id="country"
            placeholder="Country"
            onChange={this.handleInput}
            name="country"
            value={this.state.country}
            className="country"
          />
          <input
            type="text"
            id="state"
            placeholder="State"
            name="state"
            value={this.state.state}
            className="state"
            onChange={this.handleInput}
          />
          <input
            type="text"
            id="zipcode"
            placeholder="Zip Code "
            name="zipcode"
            value={this.state.zipcode}
            onChange={this.handleInput}
            className="zip"
          />

          <h2> Billing Address</h2>
          <input
            type="checkbox"
            id="checkbox"
            className="checkbox 1"
            name="checkbox"
            onChange={this.handleCheckBox}
            checked={this.state.checked}
          />
          <span> Use same shipping address 👆🏾</span>

          <input
            type="text"
            id="address"
            placeholder="Address 1"
            name="bAddress"
            onChange={this.handleInput}
            value={
              this.state.checked ? this.state.address : this.state.bAddress
            }
            className="address"
          />
          <input
            type="text"
            id="city"
            onChange={this.handleInput}
            placeholder="City "
            name="bCity"
            className="city"
            value={this.state.checked ? this.state.city : this.state.bCity}
          />
          <input
            type="text"
            id="country"
            onChange={this.handleInput}
            placeholder="Country"
            name="bCountry"
            className="country"
            value={
              this.state.checked ? this.state.country : this.state.bCountry
            }
          />
          <input
            type="text"
            id="state"
            placeholder="State"
            name="bState"
            onChange={this.handleInput}
            className="state"
            value={this.state.checked ? this.state.state : this.state.bState}
          />
          <input
            type="text"
            id="zipcode"
            placeholder="Zip Code "
            name="bZipcode"
            value={
              this.state.checked ? this.state.zipcode : this.state.bZipcode
            }
            className="zip"
            onChange={this.handleInput}
          />
        </div>
      </>
    );
  }
}

export default Address;
