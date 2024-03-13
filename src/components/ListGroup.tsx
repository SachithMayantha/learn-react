import { Fragment, useState } from "react";
// import { MouseEvent } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
}

function ListGroup({items,heading}: ListGroupProps) {

  // useState hook
  // This is array distructring
  /** constant variable "selectedIndex" initialized with the value -1, 
  and a function "setSelectedIndex" that can be used to update the value of selectedIndex */ 
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
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
