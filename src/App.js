import React, { Component } from 'react';
import './App.css';
import Product from './Product';
import Total from './Total';
import Add from './Add';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      total: 0,
      productList: []
    };

    this.createProduct = this.createProduct.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.remove = this.remove.bind(this);
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ productList: productList });
  //   }, 1000);
  // }

  createProduct(product) {
    this.setState({
      products: this.state.productList.push(product)
    });
  }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
    console.log(this.state.total);
  }

  remove=(item,cost,num)=> {
      const newProductList = this.state.productList.filter(element => {        
      if (element.name !== item) {
        return element;
      }
    });
    this.setState({
      productList : newProductList,
      total : this.state.total - (num*cost)
    });
  }

  render() {

    var component = this;
    var products = this.state.productList.map(function(product) {
      return (
        <Product
          name={product.name}
          price={product.price}
          qty={product.qty}
          handleTotal={component.calculateTotal}
          removeItem={component.remove} 
        />
      );
    });

    return (
      <div className='App'>
        <Add handleProduct={this.createProduct}/>
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}

export default App;
