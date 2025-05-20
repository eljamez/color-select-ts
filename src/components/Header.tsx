import { memo } from "react";
import type { Color } from "../App";

export const Header = memo(
  ({ currentlySelectedColors }: { currentlySelectedColors: Color[] }) => {
    return (
      <header className="Header">
        {currentlySelectedColors.length > 0 ? (
          <p className="Header__message">
            Your Currently Selected{" "}
            {currentlySelectedColors.length > 1 ? "colors are" : "color is"}{" "}
            {currentlySelectedColors.map((selected, index) => (
              <span className="Header__name" key={selected.name}>
                {selected.name}
                {currentlySelectedColors.length - 1 === index ? "" : ", "}
              </span>
            ))}
          </p>
        ) : (
          <p className="Header__message">Select a Color</p>
        )}
      </header>
    );
  }
);
