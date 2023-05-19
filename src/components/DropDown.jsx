import { useState } from "react";

import DropDownItem from "./DropDownItem";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import classNames from "classnames";

function DropDown({ values, title = "select an option", className = "" }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(values);

  // closes the dropdowm by clicking and delete the option that selected
  const handleSelect = (item) => {
    // closing the dropdown
    setOpen((prev) => !prev);

    // delete clicked item from the dropdown
    setOptions((prev) => prev.filter((prevItem) => prevItem !== item));
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
