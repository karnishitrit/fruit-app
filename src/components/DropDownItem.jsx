function DropDownItem({ item, onClick }) {
  return (
    <div className="drop-down-item" onClick={() => onClick(item)}>
      {item}
    </div>
  );
}

export default DropDownItem;
