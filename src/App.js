import React from "react";

import orders from "./orders.json";
import users from "./users.json";
import articles from "./articles.json";
import Products from "./components/Products";

import Order from "./components/Order";
import User from "./components/User";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user_id: "",
      products: [],
      cartItems: [],
      orderItems: [],
      size: "",
      sort: "",
    };
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id.$oid !== product._id.$oid),
    });
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id.$oid === product._id.$oid) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  };

  componentDidMount() {
    this.setState({
      products: articles.products,
      user_id: users._id.$oid,
    });
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">
            {" "}
            <div>
              <User user={users.name}></User>
            </div>
          </a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
              ></Products>
            </div>
            <div>
              <Order
                order={orders}
                cartItems={this.state.cartItems}
                orderItems={orders.articles}
                products={articles.products}
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart}
              ></Order>
            </div>
            <div className="sidebar"></div>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
