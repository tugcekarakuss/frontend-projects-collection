export default function Summary({items}) {
  if(items.length===0){
    return(
      <footer className="summary">Your shopping list is empty. Start adding items to get started.</footer>
    )
  }
    const itemsCount=items.length
    const completedItemCount=items.filter(item=>item.completed).length
  return (
    <footer className="summary">
      {itemsCount===completedItemCount ?
      <p>You’ve completed your shopping list.</p> : 
      <p>You’ve added {completedItemCount} out of {itemsCount} items to your cart.</p>}
      </footer>
  )
}