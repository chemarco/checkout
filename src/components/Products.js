import React, { Component } from "react";
import formatCurrency from "../util";

export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product._id.$oid}>
              <div className="product">
                <a href={"#" + product._id.$oid}>
                  <img src={product.image} />
                  <p>{product.name}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price.$numberInt)}</div>
                  <button
                    onClick={() => this.props.addToCart(product)}
                    className="button primary"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
