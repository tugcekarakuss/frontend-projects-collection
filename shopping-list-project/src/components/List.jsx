import Item from "./Item"
export default function List({ items, onDeleteItem ,onUpdateItem}) {
  return <>
    {
      items.length > 0 ? (
        <div className="list">
          <ul>
            {
              items.map((i, index) => (<Item item={i} key={index} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} />))
            }
          </ul>
        </div>
      ) : <div><p className="list">Your shopping list is empty. </p></div>
    }
  </>
}
