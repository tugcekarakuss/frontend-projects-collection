import { useState } from "react";
import { data } from "../src/data"
import '../style.css'
function App() {
  const [items, setItems] = useState(data)

  function handleAddItem(item) {
    setItems((items) => [...items, item])
  }
  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }
  return (
    <>
      <div className="app">
        <Header></Header>
        <Form onAddItem={handleAddItem}></Form>
        <List items={items} onDeleteItem={handleDeleteItem}></List>
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
function Form({ onAddItem }) {
  const [title, seTitle] = useState("")
  const [quantity, setQuantity] = useState(1)


  function handleFormSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return

    const item = {
      id: Date.now(),
      title, quantity,
      completed: false
    }

    console.log(item)
    seTitle("")

    onAddItem(item)
    setQuantity(1)
  }
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Enter item name" value={title} onChange={(e) => seTitle(e.target.value)} />
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 10 }, (v, i) => i + 1).map(num => <option value={num} key={num} >{num}</option>)}
      </select>
      <button type="submit">Add</button>
    </form>
  )
}
function List({ items, onDeleteItem }) {
  return <>
    {
      items.length > 0 ? (
        <div className="list">
          <ul>
            {
              items.map((i, index) => (<Item item={i} key={index} onDeleteItem={onDeleteItem} />))
            }
          </ul>
        </div>
      ) : <p>Your shopping list is empty. Start adding items!</p>
    }
  </>
}
function Item({ item, onDeleteItem }) {
  return (
    <li>
      <input type="checkbox"/>
      <span style={item.completed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.title}</span>
      <button onClick={() => onDeleteItem(item.id)}>x</button>
    </li>
  )
}
function Summary() {
  return (
    <footer className="summary">You have 10 items in your shopping list.</footer>
  )
}
export default App
