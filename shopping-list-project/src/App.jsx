import { useState } from "react";
import { data } from "../src/data"
import '../style.css'

import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Summary from "./components/Summary";

function App() {
  const [items, setItems] = useState(data)

  function handleAddItem(item) {
    setItems((items) => [...items, item])
  }
  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }
  function handleUpdateItem(id){
    setItems(items=>items.map(item=>item.id==id ?{...item,completed:!item.completed}:item))
  }
  function handleClearList(){
    const confirm=window.confirm("Are you sure you want to clear your shopping list?")
    if(confirm){
      setItems([])
    }
  }
  return (
    <>
      <div className="app">
        <Header></Header>
        <Form onAddItem={handleAddItem} onDeleteItems={handleClearList}></Form>
        <List items={items} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem}></List>
        <Summary items={items} ></Summary>
      </div>
    </>
  )
}
export default App
