import React from 'react';
import './App.css';
import Calculator from './handlingEvents'
import BasicExample from './formik'
import FilterableProductTable from './ThinkingInReact'

function nameformat(user){
  return (user.firstName + ' ' + user.lastName);
}

const user = {
  firstName : 'Omar',
  lastName : 'Alareeki'
}
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
// stateless function
const App = function(){
  return(
    <div>
       <header>
       <h1>Good afternoon, {nameformat(user)}, {new Date().toLocaleTimeString()} </h1>
       </header>
       <BasicExample />
       <hr />
       <Calculator />
       <FilterableProductTable products={PRODUCTS} />
     </div>
    )
}
setInterval(App, 1000);
// stateless function component with shortcut
// const App = () => {
//   return (
//     <div>
//       <header>
//       <h1>Hello, {nameformat(user)}</h1>
//       </header>
//     </div>
//   );
// }

// stateless function component
// function App(){
//   return(
//     <div>
//       <h1>Hi, {nameformat(user)}</h1>
//     </div>
//     )
// }

// ES6 class component
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//       <h1>Good morning, {nameformat(user)}</h1>
//       </div>
//       )
//   }
// };


export default App;

