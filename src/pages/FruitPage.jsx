import DropDown from "../components/DropDown";
import FruitItemsList from "../components/FruitItemsList";
import Summary from "../components/Summary";

import { useContext } from "react";
import { ItemsListContext } from "../context/ItemsList";
import { useSubmitMutation } from "../store";

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

  const { ItemsList } = useContext(ItemsListContext);
  const [submit] = useSubmitMutation();

  // sent the items to the api and alert the resaults
  const handleSubmit = async () => {
    const values = ItemsList.map(({ id, quantity }) => ({
      id,
      amount: quantity,
    }));
    try {
      const response = await submit(values);
      alert(response.data.message);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="fruit-page">
      <DropDown
        values={fruits}
        title="Select to add item to basket"
        className="fruit-page__drop-down"
      />
      <FruitItemsList />
      <span className="fruit-page__space"></span>
      <Summary />
      <button className="fruit-page__submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
}

export default FruitPage;
