import React from "react";
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
  const [page, setPage] = React.useState(1);
  return (
    <>
      <div>
        <Menu />
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
