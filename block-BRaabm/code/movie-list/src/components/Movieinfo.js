import React from "react";
import data from "../data.json";

class Movieinfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {data.map((movie) => {
          return (
            <>
              <div
                className={this.props.movie === movie ? "info-box" : "hidden"}
              >
                <button className=" cross" onClick={this.props.handleClose}>
                  {" "}
                  Close ❌
                </button>
                <div className="flex  around  ">
                  <figure className="child">
                    <img className="info-img" src={movie.Images[1]} alt="#" />
                  </figure>
                  <div className="child">
                    <h2> {movie.Title}</h2>
                    <h5> {movie.Metascore} </h5>
                    <h5> {movie.Year}</h5>
                  </div>
                  <div className="child">
                    <h5>Genre: {movie.Genre} </h5>
                    <h5>Rated: {movie.Rated} </h5>
                  </div>
                  <div className="child">
                    <h5>Runtime: {movie.Runtime} </h5>
                  </div>
                </div>
                <div className="over-box">
                  <h5> Overview:</h5>
                  <h5>{movie.Plot} </h5>
                </div>

                <div className="flex space-between ">
                  <div className="actor-box">
                    <h5> Actors:</h5>
                    <h5>{movie.Actors} </h5>
                  </div>

                  <div className="writers-box">
                    <h5> Writers:</h5>
                    <h5>{movie.Writer}</h5>
                  </div>

                  <div className="imbd-box">
                    <h5>imdbRating:{movie.imdbRating}</h5>
                    <h5>imdbVotes:{movie.imdbVotes}</h5>
                    <h5>Metascore:{movie.Metascore}</h5>
                  </div>
                </div>
                <div className="space-between">
                  <span>
                    {" "}
                    <h5>Awards:{movie.Awards}</h5>
                  </span>
                  <span>
                    <h5>Language:{movie.Language}</h5>
                  </span>
                  <span>
                    <h5>Country:{movie.Country}</h5>
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default Movieinfo;
