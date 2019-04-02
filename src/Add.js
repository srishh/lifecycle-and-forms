import React, { Component } from 'react';
import './Add.css';

class Add extends Component {
    
    submit(e) {
        e.preventDefault();
        var value = document.getElementById('input').value;
        var splitString = value.split("-");
        var product = {
           name: splitString[0],
           price: Number(splitString[1]),
           qty: 1
        };
        this.props.handleProduct(product);
         this.name = "";
         this.price = 0;
         this.qty = 0;
      }

    enter = () => { 
        var input = document.getElementById("input");
        input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("form").onSubmit();
        }
    });
    }   

      render() {
        return (
          <form id="form" onSubmit={this.submit.bind(this)}>
            <h2>My Cart</h2>
            <div>
                <input
                  id="input"
                  placeholder="Enter item and price seperated by a - (hyphen)"
                  required
                />
            </div>
          </form>
        );
      }
}

export default Add;