type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

export function compare<T extends AllType, U extends AllType>
    (top: Pick<T, keyof AllType>, bottom: Pick<U, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}


