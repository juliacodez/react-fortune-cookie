import React from "react";
import { render } from "react-dom";
import "./styles.css";
import { FortuneCookie } from "./FortuneCookie";
import fortuneMessages from "./fortune-messages.json";

function randomMessage() {
  const randomIndex = Math.floor(Math.random() * fortuneMessages.length);
  return fortuneMessages[randomIndex];
}

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: true,
      message: randomMessage()
    };
  }

  reset = () => {
    this.setState({
      isOpen: false,
      message: randomMessage()
    });
  };

  setOpen = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const isOpen = this.state.isOpen;

    return (
      <div className="App">
        <FortuneCookie isOpen={isOpen} onClick={this.setOpen} />
        {isOpen && (
          <div className="FortuneCookieMessage">
            <p>{this.state.message}</p>
            <button className="FortuneCookieMore" onClick={this.reset}>
              Another cookie
            </button>
          </div>
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
