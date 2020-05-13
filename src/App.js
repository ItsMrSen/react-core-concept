import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products= [
    {name:'Photoshop', price:'90.99'},
    {name: 'Illustrator', price: '88.88'},
    {name: 'PDF Reader', price: '44.99'},
    {name: 'Primume', price: '124.99'},
  ];
  const friendsList =['salman', 'jasu', 'mashu', 'hashu'];
  // const productsPrice = products.map(products => products.price)
  //       console.log(productsPrice);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hoping one day dreams come true.. <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <TodoList></TodoList> 
       <ul>
          { //dynamic way
            products.map(products =><li>{products.name}</li>)
          }{/* normal way */}
          <li>{friendsList[0]}</li>
          <li>{friendsList[1]}</li>
          <li>{friendsList[2]}</li>
        </ul>
        { //dynamic way
          products.map(pro => <Product product={pro}></Product>)
        }
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Person name="Mashrafi Bin Mortuza" pro="cricketer"age="31"></Person>
        <Person name="Sakib AL Hasan" pro="cricketer"age="21"></Person>
        <Person name="Rubel Hasan" pro="bowler"age="18"></Person>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// counter handler
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
        setCount(newCount);
        //setCount(count + 1)-dynamic_calculation_way
  };
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={() => setCount(count +1)}>Mouse</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
// from json palceholder entry
function TodoList(){
  const [todo, setTodo] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => setTodo(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Todo list: {todo.length}</h3>
      <ul>
        {
          todo.map(todoList => <li>{todoList.title}</li>)
        }
      </ul>
    </div>
  )
}
// products property
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    width: '300px',
    height: '300px',
    flat: 'left',
    margin: '20px'
  }
  return (
  <div style={productStyle}>
    <h2>Adobe{props.name}</h2>
    <h4>Price: {props.price}</h4>
    <p>Useing for graphics & photo.</p>
    <button>Buy Now</button>
  </div>
  )
}
function Person(props){
   return (
   <div style={{border:'2px solid lightGreen', width: '500px', margin:'10px', padding: '5px'}}>
    <h1>Name : {props.name}</h1>
    <h3>Profession : {props.pro}</h3>
    <h5>Age : {props.age}</h5>
    <h2>Bangladesh Cricket Team</h2>
    </div>
   )
}

export default App;
