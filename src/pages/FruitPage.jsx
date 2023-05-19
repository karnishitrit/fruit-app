import { useFetchFruitsQuery } from "../store";

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

  console.log(data);
  return <div className="fruit-page"></div>;
}

export default FruitPage;
