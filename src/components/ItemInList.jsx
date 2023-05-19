// item in list (in the summary items)
function ItemInList({ item }) {
  return item.quantity ? (
    <div className="item-in-list">
      {item.name}
      <div>{item.quantity}KG</div>
    </div>
  ) : (
    <></>
  );
}

export default ItemInList;
