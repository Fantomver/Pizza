import React from "react";

import Skeleton from "../componens/PizzaBlock/Skeleton";
import Categories from "../componens/Categories";
import Sort from "../componens/Sort";
import PizzaBlock from "../componens/PizzaBlock/PizzaBlock";

 const Home = () => {
    const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading]= React.useState(true);

  React.useEffect(() => {
    fetch("https://635ffd75ca0fe3c21aaa0637.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  },[]);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;