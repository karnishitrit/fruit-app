import React, { createContext, useState } from "react";

// Create the context
const ItemsListContext = createContext();

// Create the provider component
const ItemsListProvider = ({ children }) => {
  const [ItemsList, setItemsList] = useState([]);

  // add new item to items list
  const addToItemsList = (item, quantity) => {
    if (!ItemsList.find((itemInList) => itemInList.id === item.id))
      setItemsList((prevItemsList) => [
        ...prevItemsList,
        {
          ...item,
          quantity: quantity,
        },
      ]);
  };

  // remove item from items list
  const removeFromItemsList = (item) => {
    setItemsList((prevItemsList) =>
      prevItemsList.filter((itemInList) => itemInList.id !== item.id)
    );
  };

  const updateInItemsList = (item, quantity) => {
    if (ItemsList.find((itemInList) => itemInList.id === item.id)) {
      setItemsList((prevList) =>
        prevList.map((itemInList) =>
          itemInList.id === item.id
            ? { ...itemInList, quantity: quantity }
            : itemInList
        )
      );
    }
  };

  // Define the context value
  const contextValue = {
    ItemsList,
    addToItemsList,
    updateInItemsList,
    removeFromItemsList,
  };

  // Provide the context value to the children components
  return (
    <ItemsListContext.Provider value={contextValue}>
      {children}
    </ItemsListContext.Provider>
  );
};

export { ItemsListProvider, ItemsListContext };
