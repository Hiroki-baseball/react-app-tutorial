import { useState } from "react";

function ListGroup() {
  let items = [
    "New York",
    "SanFrancisco",
    "Tokyo",
    "London",
    "Paris",
    "Singapore",
  ];
  let selectedIndex = 0;
  useState;
  return (
    <>
      <h1>List</h1>
      {/* 下の方がスマートな書き方
      {items.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "List-group-item"
            }
            key={item}
            onClick={() => {
              selectedIndex = index;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
