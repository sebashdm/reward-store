import React from "react";
import ImageHeader from "../Header/ImageHeader";
import ContainerMenu from "../Menu/ContainerMenu";

const Page = ({
  coin,
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
      <ImageHeader />
      <ContainerMenu
        name={name}
        users={users}
        setUsers={setUsers}
        buys={buys}
        setBuys={setBuys}
        filer={filter}
        setFilter={setFilter}
      />
    </>
  );
};

export default Page;
