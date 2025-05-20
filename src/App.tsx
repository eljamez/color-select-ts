import { useCallback, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Item } from "./components/Item";
import { items } from "./consts";

// Define the Color type
export type Color = {
  name: string;
  color: string;
};

function App() {
  // Implement a feature to allow item selection with the following requirements:
  // 1. Clicking an item selects/unselects it.
  // 2. Multiple items can be selected at a time.
  // 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
  // 4. Currently selected items should be visually highlighted.
  // 5. Currently selected items' names should be shown at the top of the page.
  //
  // Feel free to change the component structure at will.

  const [currentlySelectedColors, setCurrentlySelectedColors] = useState<
    Color[]
  >([]);

  // adding a color
  const handleAddClick = useCallback((item: Color) => {
    setCurrentlySelectedColors((prev) => [...prev, item]);
  }, []);

  // removing a color
  const handleRemoveClick = useCallback((item: Color) => {
    setCurrentlySelectedColors((prev) =>
      prev.filter((color) => color.name !== item.name)
    );
  }, []);

  return (
    <>
      <Header currentlySelectedColors={currentlySelectedColors} />
      <ul className="List">
        {items.map((item) => (
          <Item
            key={item.name}
            item={item}
            handleAddClick={handleAddClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
