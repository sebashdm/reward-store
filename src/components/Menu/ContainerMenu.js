import React, { useState } from "react";
import Card from "../Card/Card";
import Menu from "./Menu";

const ContainerMenu = ({
  name,
  coin,
  users,
  setUsers,
  buys,
  setBuys,
  filter,
  setFilter,
}) => {
  const [page, setPage] = useState(1);
  return (
    <>
      <div className="menu">
        <Menu
          users={users}
          setUsers={setUsers}
          buys={buys}
          page={page}
          setPage={setPage}
          filter={filter}
          setFilter={setFilter}
        />
        <h1>Page {page}</h1>
        <div className="semanticMenuText">
          {page === 1 ? (
            <p>1-16 of 32 Products</p>
          ) : (
            <p>16-32 of 32 Products</p>
          )}
        </div>
      </div>
      <Card
        name={name}
        coin={coin}
        users={users}
        setUsers={setUsers}
        page={page}
        setPage={setPage}
        buys={buys}
        setBuys={setBuys}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
};

export default ContainerMenu;
