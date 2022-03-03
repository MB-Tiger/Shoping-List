import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import List from "./Component/List";
const UID = () => `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameValue: "",
      quantityValue: "",
      priceValue: "",
      products: [],
    };
    console.log(this.state.products);
  }
  addLi = () => {
    const name = this.state.nameValue;
    const quantity = this.state.quantityValue;
    const price = this.state.priceValue;
    const totalPrice = quantity * price;
    if (!name || !quantity || !price) return alert("please write something!");
    if (quantity < 1 || price < 1)
      return alert("please write the correct value");
    const products = [...this.state.products];
    products.push({
      name,
      quantity,
      price,
      totalPrice,
      isDone: false,
      _id: UID(),
    });
    this.setState({
      products,
      nameValue: "",
      quantityValue: "",
      priceValue: "",
    });
  };
  convertItem = (_id) => {
    const products = [...this.state.products];
    const p = products.findIndex((item) => item._id === _id);
    products[p].isDone = !products[p].isDone;
    this.setState({ products });
  };
  deleteItem = (_id) => {
    const products = [...this.state.products];
    const p = products.findIndex((item) => item._id === _id);
    products.splice(p, 1);
    this.setState({ products });
  };
  render() {
    const updateNameValue = (obj) => {
      this.setState(obj);
    };
    console.log(this.state.products);
    return (
      <div>
        <Header
          parentState={this.state}
          updateNameValue={updateNameValue}
          addLi={this.addLi}
        />
        <List
          list={this.state}
          convertItem={this.convertItem}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}
export default App;
