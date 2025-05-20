"use client";

import { memo, useState } from "react";

type Item = {
  name: string;
  color: string;
};

type ItemProps = {
  item: Item;
  handleAddClick: (item: Item) => void;
  handleRemoveClick: (item: Item) => void;
};

// Item component
export const Item = memo(
  ({ item, handleAddClick, handleRemoveClick }: ItemProps) => {
    // selected state
    const [isSelected, setIsSelected] = useState(false);

    const handleItemClick = () => {
      // I could also just change the selected state this way
      // setIsSelected(!isSelected)

      if (isSelected) {
        setIsSelected(false);
        handleRemoveClick(item);
      } else {
        setIsSelected(true);
        handleAddClick(item);
      }
    };

    // I would consider using a button for this. I like using buttons when it's a clickable element.
    return (
      <li
        className={`List__item List__item--${item.color} ${
          isSelected ? "List__item--selected" : ""
        }`}
        onClick={handleItemClick}
      >
        {item.name}
      </li>
    );
  }
);
