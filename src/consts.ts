// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

export const sizes: string[] = ["tiny", "small", "medium", "large", "huge"];
export const colors: string[] = [
  "navy",
  "blue",
  "aqua",
  "teal",
  "olive",
  "green",
  "lime",
  "yellow",
  "orange",
  "red",
  "maroon",
  "fuchsia",
  "purple",
  "silver",
  "gray",
  "black",
];
export const fruits: string[] = [
  "apple",
  "banana",
  "watermelon",
  "orange",
  "peach",
  "tangerine",
  "pear",
  "kiwi",
  "mango",
  "pineapple",
];

type Item = {
  name: string;
  color: string;
};

export const items: Item[] = sizes.reduce(
  (items: Item[], size: string) => [
    ...items,
    ...fruits.reduce(
      (acc: Item[], fruit: string) => [
        ...acc,
        ...colors.reduce(
          (acc: Item[], color: string) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          []
        ),
      ],
      []
    ),
  ],
  []
);
