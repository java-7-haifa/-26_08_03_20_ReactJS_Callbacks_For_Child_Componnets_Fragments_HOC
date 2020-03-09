import React from "react";
import Product from "./components/Product";

export default class  extends React.Component{
  state = {
    products: [...getProducts()],
    cart:[]
  };

  add = (id) => {
    let cart = [...this.state.cart];
    let index = -1;
    for(let i = 0; i < cart.length; i++){
      if(cart[i].id === id){
        index = i;
        break;
      }
    }
    cart[index] = {...cart[index],count:cart[index].count + 1};
    // cart.splice(index,1);
    // cart.push(p);
    this.setState({...this.state,cart});
  }

  sub = (id)=>{
    let cart = [...this.state.cart];
    let index = cart.findIndex(p => p.id === id);
    cart[index] = {...cart[index],count:cart[index].count - 1};
    if(cart[index].count === 0){
      cart.splice(index,1);
    }
    this.setState({...this.state,cart});
  }
  
  findInCart = (id) => {
    let p = this.state.cart.find(cp => cp.id === id);
    return p ? p.count : 0;
  }

  addToCart = (id)=>{
    let cart = [...this.state.cart];
    let p = this.state.products.find(p => p.id === id);
    cart.push({...p,count:1});
    this.setState({...this.state,cart});
  }

  render() {
    return (
      <div className="container">
        <div className="component-container">
          {this.state.products.map(p => (
            <Product 
            count={this.findInCart(p.id)}
            key={p.id} 
            pid={p.id}
            title={p.title} 
            price={p.price} 
            onAdd={this.add}
            onSub={this.sub}
            addToCart={this.addToCart}/>
          ))}
        </div>
      </div>
    );
  }
}

// export default App;

function getProducts() {
  return [
    {
      id: 123,
      title: "Product 1",
      price: 15.0
    },
    {
      id: 321,
      title: "Product 2",
      price: 5.0
    },
    {
      id: 234,
      title: "Product 3",
      price: 7.5
    },
    {
      id: 456,
      title: "Product 4",
      price: 3.75
    },
    {
      id: 567,
      title: "Product 5",
      price: 12.2
    },
    {
      id: 654,
      title: "Product 6",
      price: 13.5
    },
    {
      id: 432,
      title: "Product 7",
      price: 14.0
    },
    {
      id: 658,
      title: "Product 8",
      price: 12.1
    },
    {
      id: 987,
      title: "Product 9",
      price: 10.4
    }
  ];
}
