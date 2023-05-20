import DropDown from "../components/DropDown";
import FruitItemsList from "../components/FruitItemsList";
import Summary from "../components/Summary";
import Loading from "../components/Loading";

import { useContext } from "react";
import { ItemsListContext } from "../context/ItemsList";
import { useSubmitMutation } from "../store";

import { useState, isValidElement } from "react";
import { useFetchFruitsQuery } from "../store";

// fetching data for the selected item
function useFetchItem(selectedItem, setSelectedItem) {
  // fetching the data if item selected
  const { data, isError, isLoading } = useFetchFruitsQuery(
    selectedItem.toLowerCase(),
    {
      skip: selectedItem ? false : true,
    }
  );

  const { addToItemsList } = useContext(ItemsListContext);
  // if the is error with fetching - the error massage will apear
  if (isError) {
    return <div>{isError}</div>;
  }
  // if the is loading- the loading component will apear

  if (isLoading) {
    return <Loading />;
  }

  // if the data is ok - adding it to the itemslist
  if (data) {
    addToItemsList(data, 0);
    setSelectedItem("");
  }

  return null;
}

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
  const [selectedItem, setSelectedItem] = useState("");
  const dataMsg = useFetchItem(selectedItem, setSelectedItem);

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
        setSelectedItem={setSelectedItem}
        className="fruit-page__drop-down"
      />
      {isValidElement(dataMsg) ? dataMsg : <FruitItemsList />}
      <span className="fruit-page__space"></span>
      <Summary />
      <button className="fruit-page__submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
}

export default FruitPage;
