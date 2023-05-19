import { useFetchFruitsQuery } from "../store";
import DropDown from "../components/DropDown";
import FruitItemsList from "../components/FruitItemsList";

function FruitPage() {
  const { data, isError, isLoading } = useFetchFruitsQuery("apple");

  if (isError) {
    return <div> {isError}</div>;
  }

  if (isLoading) {
    return (
      <div className="menu">
        <div> {isError}</div>;
      </div>
    );
  }

  const fruits = [
    "Apple",
    "Carrot",
    "Melon",
    "Pear",
    "Lemon",
    "Orange",
    "Salad",
  ];

  console.log(data);
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
