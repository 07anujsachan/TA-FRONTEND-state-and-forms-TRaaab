import React from "react";
import data from "./data.json";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: "0",
    };
  }

  handleSubmit = (totalBill) => {
    alert(`your total bill is $ ${totalBill}`);
  };
  render() {
    let totalBill = this.props.cartItems.reduce((acc, cv) => {
      acc = acc + cv.price * cv.quantity;
      return acc;
    }, 0);
    console.log(totalBill);
    let items = this.props.cartItems;
    return (
      <div
        className="cart"
        style={
          this.props.isCartOpen ? { display: "block" } : { display: "none" }
        }
      >
        <div>
          <button onClick={this.props.handleCartClose}> x</button>

          <div className="cart-head">
            <img src="/products/bag-icon.png" alt="#" />
            <span>Cart</span>
          </div>
        </div>
        <div className="cart-items">
          {items.map((item) => {
            console.log(item);
            return (
              <div className="flex added-box">
                <div className="smll-box">
                  <img
                    className="added-img"
                    src={`/products/${item.sku}_2.jpg`}
                    alt="#"
                  />
                </div>
                <div className="smll-box">
                  <h2 className="cart-heading">{item.title}</h2>
                  <h3 className="cart-style ">{`${item.availableSizes[0]}  |  ${item.style}`}</h3>
                  <h3 className="cart-quan">Quantity:{item.quantity}</h3>
                </div>
                <div className="smll-box">
                  <button
                    onClick={() => this.props.deleteCartItem(item.id)}
                    className="delete-cart"
                  >
                    X
                  </button>
                  <p className="cart-price">
                    {item.currencyFormat}
                    {item.price}
                  </p>
                  <div className="flex cart-add-btn">
                    <button
                      onClick={() => this.props.handleDecrement(item.id)}
                      className="cart-plus"
                    >
                      -
                    </button>
                    <button
                      className="cart-min"
                      onClick={() => this.props.handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="checkout-box">
          <div className="flex between checkout">
            <h2 className="subtotal">Subtotal</h2>
            <div>
              <h3 className="total-price">{totalBill}</h3>
              <h3 className="total-emi">or 4 X{totalBill / 4}</h3>
            </div>
          </div>
          <button
            className="checkout-btn"
            onClick={() => this.handleSubmit(totalBill)}
            type="submit"
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;
