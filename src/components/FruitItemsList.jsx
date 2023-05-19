import FruitItem from "./FruitItem";

import { useContext } from "react";
import { ItemsListContext } from "../context/ItemsList";

function FruitItemsList() {
  const { ItemsList } = useContext(ItemsListContext);

  return (
    <div className="fruit-items-list">
      {ItemsList.map((item) => (
        <FruitItem key={"fruit-item-" + item.id} item={item} />
      ))}
    </div>
  );
}

export default FruitItemsList;
