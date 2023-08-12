import React from "react";
import data from "./data.json";

class Shopping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: "0",
      activefilter: "",
    };
  }

  handleProducts = () => {
    let displayedProducts = [...data.products];
    if (this.props.activeSize.length > 0) {
      displayedProducts = displayedProducts.filter((product) => {
        for (const size of this.props.activeSize) {
          if (product.availableSizes.includes(size)) {
            return true;
          }
        }
      });
    }

    if (this.state.activefilter === "lowesttohighest") {
      displayedProducts = displayedProducts.sort((a, b) => a.price - b.price);
    }

    if (this.state.activefilter === "highesttolowest") {
      displayedProducts = displayedProducts.sort((a, b) => b.price - a.price);
    }

    return displayedProducts;
  };
  handleActiveFilter = (e) => {
    this.setState({ activefilter: e.target.value });
  };
  render() {
    let products = this.handleProducts();
    return (
      <>
        <div className="cart-icon" onClick={this.props.handleCartOpen}>
          <img src="/products/bag-icon.png" alt="cart" />
          <p className="cart-item-num">{this.props.cartItems.reduce((acc, cv) => {
                acc = acc + cv.quantity;
                return acc;
              }, 0)}</p>
        </div>
        <div className="flex-75">
          <div className="flex between padding-30">
            <span>{`${products.length} products found`}</span>

            <div>
              <span>Filter by:</span>
              <select
                onChange={this.handleActiveFilter}
                value={this.state.activefilter}
              >
                <option value=""></option>
                <option value="lowesttohighest"> Low to High</option>
                <option value="highesttolowest"> High to Low </option>
              </select>
            </div>
          </div>
          <div className="flex wrap ">
            {products.map((product) => {
              return (
                <div className="card">
                  <figure className="fgr">
                    <img
                      className=" product-img"
                      src={`/products/${product.sku}_1.jpg`}
                      alt="#"
                    />
                  </figure>
                  <div className="center padding">
                    <h2 className="title">{product.title}</h2>
                    <div className="line"></div>
                    <h2 className="price">
                      {product.currencyFormat + product.price}
                    </h2>
                    <h3 className="emi">{` or 4 x ${
                      product.currencyFormat + product.price / 4
                    }`}</h3>
                  </div>
                  <button
                    onClick={() => this.props.handleAddItemsToCart(product)}
                    className="add-cart"
                  >
                    {" "}
                    Add to cart
                  </button>

                  {product.isFreeShipping === true ? (
                    <p className="free-shipping">Free Shipping</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Shopping;
