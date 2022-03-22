import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
    };
  }

  boxClick = () => {
    this.setState({
      bgColor: "red",
    });
  };

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
          <div
            className="grid-item"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          ></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
