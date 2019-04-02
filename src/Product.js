import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          qty: 0
        };
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.delete = this.delete.bind(this);
      }
    
      add() {
        this.setState({
          qty: this.state.qty + 1
        });
        this.props.handleTotal(this.props.price);
      }
    
      subtract() {
        this.setState({
          qty: this.state.qty - 1
        });
        this.props.handleTotal(-this.props.price);
      }

      delete() {
          this.props.removeItem(this.props.name,this.props.price,this.state.qty);
      }

      render() {
        return (
          <div className="product-wrapper">
            <div>
                <p>{this.props.name}</p>
            </div>
            <div><p>{this.state.qty}</p></div>
            <div><p>{this.props.price}</p></div>
            <div className="btn">
                <button className="sub" onClick={this.subtract} disabled={this.state.qty < 1}>
                  -
                </button>
                <button className="add" onClick={this.add}>
                  +
                </button>
            </div>
            <div className="btnRem">
                <button onClick={this.delete}>
                    x
                </button>
            </div>
          </div>
        );
      }
}

export default Product;