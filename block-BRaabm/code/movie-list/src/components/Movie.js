import React from "react";
import data from "../data.json";
import Movieinfo from "./Movieinfo";

class Movie extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeMovie: "",
    };
  }
  handleClick = (movie) => {
    this.setState({ activeMovie: movie });
  };

  handleClose = () => {
    this.setState({ activeMovie: "" });
  };
  render() {
    return (
      <>
        <div className="container ">
          <ul className="parent-box flex wrap space-between">
            {data.map((movie) => {
              return (
                <>
                  <li className="flex li">
                    <figure className="figure">
                      <img className="img" src={movie.Images[1]} alt=" #" />
                    </figure>
                    <div>
                      <h2 className="title"> {movie.Title}</h2>
                      <h4 className="release"> {movie.Released}</h4>
                      <button
                        onClick={() => this.handleClick(movie)}
                        className="btn"
                      >
                        {" "}
                        More Info
                      </button>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <Movieinfo
          movie={this.state.activeMovie}
          handleClose={this.handleClose}
        />
      </>
    );
  }
}

export default Movie;
