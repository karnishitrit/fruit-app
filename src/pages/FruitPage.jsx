import DropDown from "../components/DropDown";
import FruitItemsList from "../components/FruitItemsList";

function FruitPage() {
  const fruits = [
    "Apple",
    "Carrot",
    "Melon",
    "Pear",
    "Lemon",
    "Orange",
    "Salad",
  ];

  return (
    <div className="fruit-page">
      <DropDown
        values={fruits}
        title="Select to add item to basket"
        className="fruit-page__drop-down"
      />
      <FruitItemsList />
    </div>
  );
}

export default FruitPage;
