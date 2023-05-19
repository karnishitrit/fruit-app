import { useState, useContext } from "react";
import { useFetchFruitsQuery } from "../store";

import { ItemsListContext } from "../context/ItemsList";

import DropDownItem from "./DropDownItem";

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import classNames from "classnames";

// fetcing the data for the seleted item and adding it to the context
function UseAddItemToList(selectedItem) {
  const { data, isError, isLoading } = useFetchFruitsQuery(
    selectedItem.toLowerCase()
  );

  // Extract this function from the ItemsListContext
  const { addToItemsList } = useContext(ItemsListContext);

  if (isError) {
    return <div> {isError}</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  // adding the item to items list
  addToItemsList(data, 0);
}

function DropDown({ values, title = "select an option", className = "" }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(values);
  const [selectedItem, setSelectedItem] = useState("");

  UseAddItemToList(selectedItem);

  // closes the dropdowm by clicking and delete the option that selected
  const handleSelect = (item) => {
    // closing the dropdown
    setOpen((prev) => !prev);

    // delete clicked item from the dropdown
    setOptions((prev) => prev.filter((prevItem) => prevItem !== item));

    // change the selected item to the clicked item
    setSelectedItem(item);
  };

  return (
    <div className={classNames("drop-down", className)}>
      <div
        className="drop-down__title"
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
        {open ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
      </div>
      <div className="drop-down__items">
        {open &&
          options.map((option) => (
            <DropDownItem
              key={"drop-down-" + option}
              item={option}
              onClick={handleSelect}
            />
          ))}
      </div>
    </div>
  );
}

export default DropDown;
