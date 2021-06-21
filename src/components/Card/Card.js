import React from "react";
import Product from "./Product";

const Card = ({
  name,
  coin,
  users,
  setUsers,
  buys,
  page,
  setPage,
  setBuys,
  filter,
  setFilter,
}) => {
  const validateProducts = users.products
    ? page === 1
      ? users.products.slice(0, 16)
      : users.products.slice(16, 32)
    : [];

  const cards = users.products ? (
    validateProducts.map((card) => (
      <Product
        name={card.name}
        image={card.img.url}
        createDate={card.createDate}
        cost={card.cost}
        key={card._id}
        category={card.category}
        points={users.points}
        buys={buys}
        setBuys={setBuys}
        users={users}
        setUsers={setUsers}
        id={card._id}
      />
    ))
  ) : (
    <h1>There are'nt products available</h1>
  );

  return <div className="cards">{cards}</div>;
};

export default Card;
