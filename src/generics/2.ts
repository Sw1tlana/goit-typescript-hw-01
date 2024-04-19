type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, U extends AllType>
    (top: Pick<T, keyof AllType>, bottom: Pick<U, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topObject = {
  name: "Top",
  position: 1,
  color: "red",
  weight: 50,
};

const bottomObject = {
  name: "Bottom",
  position: 2,
  color: "blue",
  weight: 70,
};

export const result = compare(topObject, bottomObject);




