import { useState } from "react";
import { items } from "../src/data"
import '../style.css'
function App() {
  return (
    <>
      <div className="app">
        <Header></Header>
        <Form></Form>
        <List></List>
        <Summary></Summary>
      </div>
    </>
  )
}
function Header() {
  return (
    <h1> 🛒Shopping List</h1>
  );
}
function Form() {
  const[title,seTitle]=useState("")
  const[quantity,setQuantity]=useState(1)
  function handleFormSubmit(e){
    e.preventDefault()
    const item={id:Date.now(),title,quantity,completed:false}
    console.log(item)
    seTitle("")
    setQuantity(1)
  }
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Enter item name" value={title} onChange={(e)=>seTitle(e.target.value)} />
      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
        {Array.from({ length: 10 }, (v, i) => i + 1).map(num => <option value={num} key={num} >{num}</option>)}
      </select>
      <button type="submit">Add</button>
    </form>
  )
}
function List() {
  return (
    <div className="list">
      <ul>
        {
          items.map((i, index) => (<Item item={i} key={index} />))
        }
      </ul>
    </div>
  )
}
function Item({ item }) {
  return (
    <li>
      <span style={item.completed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.title}</span>
      <button>x</button>
    </li>
  )
}
function Summary() {
  return (
    <footer className="summary">You have 10 items in your shopping list.</footer>
  )
}
export default App
