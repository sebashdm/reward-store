import React from "react";
import Menu from "./Menu";

const ContainerMenu = ({
  name,
  users,
  setUsers,
  buys,
  setBuys,
  filter,
  setFilter,
}) => {
  return (
    <>
      <div>
        <Menu />
      </div>
    </>
  );
};

export default ContainerMenu;
