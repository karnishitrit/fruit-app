import { AiOutlineCloseCircle } from "react-icons/ai";
import Slider from "@mui/material/Slider";

import { useContext } from "react";
import { ItemsListContext } from "../context/ItemsList";

function FruitItem({ item }) {
  const trackColor = "#c6c0c0"; // Define the desired track color
  const trackFillColor = "#b6b2b2"; // Define the desired fiiled track color
  const thumbColor = "#fff"; // Define the desired thumb color

  const { removeFromItemsList } = useContext(ItemsListContext);

  // deleting item from the itemsList
  const handleDeleteItem = () => {
    removeFromItemsList(item);
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
          <span className="fruit-item__quantity--amount--number">0</span>
          KG
        </span>
      </div>
      <Slider
        className="fruit-item__slider"
        aria-label="Temperature"
        defaultValue={0}
        valueLabelDisplay="auto"
        max={item.stock}
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
        <span className="fruit-item__price--number">${item.price}</span>
      </div>
    </div>
  );
}

export default FruitItem;
