import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Page from "../ElectronicsGrid/Page";
import { user } from "../../Services/index";

const ContainerHeader = () => {
  const [users, setUsers] = useState(0);
  const [fetched, setFetched] = useState(false);
  const [buys, setBuys] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    user({ users, setUsers, fetched, setFetched, buys });
  }, [buys, fetched, users]);

  return (
    <>
      <div className="header">
        <Navbar
          name={users.name}
          coin={users.points}
          users={users}
          setUsuarios={setUsers}
          products={users.products}
          historial={users.record}
          buys={buys}
        />
      </div>

      <Page
        name={users.name}
        coin={users.points}
        users={users}
        setUsers={setUsers}
        buys={buys}
        setBuys={setBuys}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
};

export default ContainerHeader;
