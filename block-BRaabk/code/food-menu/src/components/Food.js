import React from "react";
import data from "../data.json";

class Food extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <div className="container flex wrap space-between">
          {this.props.tag === "all"
            ? data.map((obj) => (
                <div className="box flex">
                  <figure>
                    <img className="img" src={obj.img} alt="#" />
                  </figure>
                  <div className="child">
                    <h3 className="flex  heading space-between">
                      {obj.title} <span className="price"> ${obj.price}</span>
                    </h3>
                    <hr className="under-line" />
                    <p> {obj.desc}</p>
                  </div>
                </div>
              ))
            : data
                .filter((food) => food.category === this.props.tag)
                .map((obj) => (
                  <div className="box flex">
                    <figure>
                      <img className="img" src={obj.img} alt="#" />
                    </figure>
                    <div className="child">
                      <h3 className="flex  heading space-between">
                        {obj.title} <span className="price"> ${obj.price}</span>
                      </h3>
                      <hr className="under-line" />
                      <p> {obj.desc}</p>
                    </div>
                  </div>
                ))}
        </div>
      </>
    );
  }
}

export default Food;
