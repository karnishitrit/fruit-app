import { useContext } from "react";
import { ItemsListContext } from "../context/ItemsList";
import ItemInList from "./ItemInList";

// summary component - includes the item list values and total price
function Summary() {
  const { ItemsList, totalPrice } = useContext(ItemsListContext);
  return (
    <div className="summary">
      <p className="summary__header">Items list:</p>
      {ItemsList.map((item) => {
        return <ItemInList key={"item-list-" + item.id} item={item} />;
      })}
      <p className="summary__header">Total price:</p>${totalPrice()}
    </div>
  );
}

export default Summary;
