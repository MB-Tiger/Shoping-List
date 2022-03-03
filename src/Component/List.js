import React, { Component } from "react";
export default class List extends Component {
  render() {
    let result = 0;
    for (let i = 0; i < this.props.list.products.length; i++) {
      if (!this.props.list.products[i].isDone)
        result += this.props.list.products[i].totalPrice;
    }
    return (
      <div>
        <ul id="list">
          {this.props.list.products.map((item, i) => {
            return (
              <li key={i}>
                <span className={item.isDone ? "done" : ""}>
                  Name: {item.name}
                </span>
                <span className={item.isDone ? "done" : ""}>
                  Quantity: {item.quantity}
                </span>
                <span className={item.isDone ? "done" : ""}>
                  Price: {item.price}
                </span>
                <span className={item.isDone ? "done" : ""}>
                  Total Price: {item.totalPrice}{" "}
                </span>
                <button onClick={() => this.props.convertItem(item._id)}>
                  Done
                </button>
                <button onClick={() => this.props.deleteItem(item._id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <div id="finailPrice">Final price: {result}</div>
      </div>
    );
  }
}
