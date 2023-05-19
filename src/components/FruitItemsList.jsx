import FruitItem from "./FruitItem";

function FruitItemsList() {
  const ItemsList = [
    { color: "Red", id: "apple", name: "Apple", price: 3, stock: 12 },
    { color: "Red", id: "apple", name: "Apple", price: 3, stock: 12 },
  ];
  return (
    <div className="fruit-items-list">
      {ItemsList.map((item) => (
        <FruitItem key={"fruit-item-" + item.id} item={item} />
      ))}
    </div>
  );
}

export default FruitItemsList;
