import { AiOutlineCloseCircle } from "react-icons/ai";
import Slider from "@mui/material/Slider";

import { useContext } from "react";
import { ItemsListContext } from "../context/ItemsList";

function FruitItem({ item }) {
  const trackColor = "#c6c0c0"; // Define the desired track color
  const trackFillColor = "#b6b2b2"; // Define the desired fiiled track color
  const thumbColor = "#fff"; // Define the desired thumb color

  const { removeFromItemsList, updateInItemsList } =
    useContext(ItemsListContext);

  // deleting item from the itemsList
  const handleDeleteItem = () => {
    removeFromItemsList(item);
  };

  // changing the amount in the itemsList while slider changes
  const handleSliderChange = (e) => {
    const value = e.target.value;
    updateInItemsList(item, value);
  };

  return (
    <div className="fruit-item">
      <div className="fruit-item__header">
        <div
          className="fruit-item__header--title"
          style={{ backgroundColor: item.color }}
        >
          <span>{item.icon}</span>
          {item.name}
        </div>
        <div className="fruit-item__header--close" onClick={handleDeleteItem}>
          <AiOutlineCloseCircle />
        </div>
      </div>
      <div className="fruit-item__quantity">
        select quantity:
        <span className="fruit-item__quantity--amount">
          <span className="fruit-item__quantity--amount--number">
            {item.quantity}
          </span>
          KG
        </span>
      </div>
      <Slider
        className="fruit-item__slider"
        aria-label="Temperature"
        defaultValue={0}
        valueLabelDisplay="auto"
        max={item.stock}
        onChange={(e) => handleSliderChange(e)}
        sx={{
          "& .MuiSlider-track": {
            backgroundColor: trackFillColor,
            border: `2px solid ${thumbColor}`,
          },
          "& .MuiSlider-rail": {
            backgroundColor: trackColor,
          },
          "& .MuiSlider-thumb": {
            backgroundColor: thumbColor,
            boxShadow: "None",
          },
        }}
      />
      <div className="fruit-item__price">
        Price:
        <span className="fruit-item__price--number">
          ${item.price * item.quantity}
        </span>
      </div>
    </div>
  );
}

export default FruitItem;
