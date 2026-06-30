import { useState } from "react"
export default function Form({ onAddItem,onDeleteItems }) {
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
      <button type="button" className="reset-btn" onClick={onDeleteItems} >Clear All</button>
    </form>
  )
}
