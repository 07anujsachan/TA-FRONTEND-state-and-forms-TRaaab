import React from "react";

let sizes = ["XS", "S", "M", "L", "XL", "XXL"];

class Aside extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="aside">
        <h2 className="size">Sizes-</h2>

        {sizes.map((size) => {
          return (
            <button
              onClick={() => this.props.handleActiveSize(size)}
              className={
                this.props.activeSize.includes(size)
                  ? "active-size"
                  : "size-btns"
              }
            >
              {" "}
              {size}
            </button>
          );
        })}
      </div>
    );
  }
}
export default Aside;
