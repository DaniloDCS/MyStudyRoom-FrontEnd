import { useState } from "react";
import { Item } from "./Item";

export function List() {
  const [items, setItems] = useState<string[]>([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  function addNewItem() {
    setItems([...items, "New Item"]);
  }

  return (
    <div>
      <h1>My Todo List</h1>

      <ul>
        {items.map(myItem => {
          return <Item text={myItem} />;
        })}
      </ul>

      <button onClick={addNewItem}>Add Item</button>
    </div>
  );
}
