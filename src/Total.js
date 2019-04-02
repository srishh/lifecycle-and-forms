import React, { Component } from 'react';
import './Total.css';

class Total extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        
        let total = this.props.total;
        
        return (
          <div className="total">
              <div>Total</div>
              <div>{total}</div>
          </div>
        );
      }
}

export default Total;