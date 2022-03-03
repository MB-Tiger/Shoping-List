import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <div className="form">
        <h2>Enter your product info</h2>
        <input
          type="text"
          placeholder="product name"
          id="nameInput"
          value={this.props.parentState.nameValue}
          onChange={(e) => this.props.updateNameValue({ nameValue: e.target.value })}
          onKeyUp={(e) => {
            if (e.key === "Enter") this.addLi();
          }}
        />
        <input
          type="number"
          placeholder="quantity"
          id="quantityInput"
          value={this.props.parentState.quantityValue}
          onChange={(e) =>
            this.props.updateNameValue({ quantityValue: Number(e.target.value) })
          }
          onKeyUp={(e) => {
            if (e.key === "Enter") this.addLi();
          }}
        />
        <input
          type="number"
          placeholder="price"
          id="priceInput"
          value={this.props.parentState.priceValue}
          onChange={(e) =>
            this.props.updateNameValue({ priceValue: Number(e.target.value) })
          }
          onKeyUp={(e) => {
            if (e.key === "Enter") this.props.addLi();
          }}
        />
        <button type="sumbit" id="registerButton" onClick={() => this.props.addLi()}>
          {" "}
          register{" "}
        </button>
      </div>
    );
  }
}
