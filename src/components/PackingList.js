import { useState } from "react";
import Item from "./Item.js";

export default function PackingList({
  items,
  onDeleteItem,
  handleToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "descripton")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => sortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packet status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
