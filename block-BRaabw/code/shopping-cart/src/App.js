import React from "react";
import Aside from "./components/Aside";
import Shopping from "./components/Shopping";
import Cart from "./components/Cart";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSize: [],
      cartItems: [],
      isCartOpen: false,
    };
  }
  handleAddItemsToCart = (item) => {
    const addedCart = this.state.cartItems.find((pro) => pro.id === item.id);
    if (addedCart) {
      this.handleIncrement(item.id);
    } else {
      this.setState((prevState) => ({
        cartItems: prevState.cartItems.concat({ ...item, quantity: 1 }),
      }));
    }
  };
  handleActiveSize = (size) => {
    if (this.state.activeSize.includes(size)) {
      this.setState((prevState) => ({
        activeSize: prevState.activeSize.filter((s) => s !== size),
      }));
    } else {
      this.setState((prevState) => ({
        activeSize: prevState.activeSize.concat(size),
      }));
    }
  };

  handleCartOpen = () => {
    this.setState({ isCartOpen: true });
  };
  handleIncrement = (id) => {
    this.setState((prevState) => {
      let increasedCartItem = prevState.cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      return { cartItems: increasedCartItem };
    });
  };
  handleDecrement = (id) => {
    this.setState((prevState) => {
      let decrementCartItem = prevState.cartItems.map((item) => {
        if (item.id === id) {
          if (item.quantity < 2) {
            this.deleteCartItem(item.id);
          }
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });
      return { cartItems: decrementCartItem };
    });
  };

  deleteCartItem = (id) => {
    console.log(id);
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.filter((p) => {
        return p.id !== id;
      });
      console.log(updatedCartItems);
      return {
        cartItems: updatedCartItems,
      };
    });
  };

  handleCartClose = () => {
    this.setState({ isCartOpen: false });
  };
  render() {
    return (
      <>
        <div className="container flex between ">
          <Aside
            activeSize={this.state.activeSize}
            handleActiveSize={this.handleActiveSize}
          />{" "}
          <Shopping
            activeSize={this.state.activeSize}
            handleCartOpen={this.handleCartOpen}
            cartItems={this.state.cartItems}
            handleAddItemsToCart={this.handleAddItemsToCart}
          />
        </div>
        <Cart
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          cartItems={this.state.cartItems}
          deleteCartItem={this.deleteCartItem}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      </>
    );
  }
}

export default App;
