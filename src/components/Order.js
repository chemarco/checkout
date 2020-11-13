import React, { Component } from "react";
import Cart from "./Cart";
export default class Order extends Component {
  render() {
    // var { cartItems } = this.props;
    var i = 0;
    let prod = [];

    for (i; i < this.props.products.length; i++) {
      if (
        this.props.products[i]._id.$oid ===
          this.props.orderItems[0].article_id.$oid ||
        this.props.products[i]._id.$oid ===
          this.props.orderItems[1].article_id.$oid ||
        this.props.products[i]._id.$oid ===
          this.props.orderItems[2].article_id.$oid
      ) {
        //cartItems.push({ ...this.props.products[i], count: 1 });

        prod.push({
          ...this.props.products[i],
          count: this.props.orderItems[i].qty.$numberInt,
        });
      }
    }

    return (
      <div>
        <Cart
          order={this.props.order}
          products={this.props.products}
          cartItems={prod}
          removeFromCart={this.props.removeFromCart}
        ></Cart>
      </div>
    );
  }
}
