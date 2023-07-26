import React from "react";

const data = [
  {
    Ques: " Java Script ",
    Ans: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at",
  },
  {
    Ques: "React ",
    Ans: "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
  },
  {
    Ques: " Node  ",
    Ans: " Node is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.",
  },
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeQuestion: "" };
  }

  handelClick = (ques) => {
    this.setState({ activeQuestion: ques });
  };

  render() {
    return (
      <div className="container">
        {data.map((ques) => (
          <>
            <div className="flex state space-between ">
              {ques.Ques}
              <span onClick={() => this.handelClick(ques)}>
                {this.state.activeQuestion !== ques ? "👇🏾" : "👆🏾"}
              </span>
            </div>
            <div
              className={this.state.activeQuestion === ques ? "ans" : "hidden"}
            >
              {ques.Ans}
            </div>
          </>
        ))}
      </div>
    );
  }
}

export default Accordion;
