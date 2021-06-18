import React, { useState, useEffect } from "react";
import Header from "./ContainerHeader";
import Page from "../ElectronicsGrid/Page";
import { user } from "../../Services/index";
import "../index.css";

const ContainerHeader = () => {
  const [users, setUsers] = useState(0);
  const [fetched, setFetched] = useState(false);
  const [buys, setBuy] = useState(false);

  useEffect(() => {
    user({ users, setUsers, fetched, setFetched, buys });
  }, [buys, fetched, users]);

  return (
    <>
      <div className="header">
        <Header
          name={users.name}
          coin={users.points}
          users={users}
          setUsuarios={setUsers}
          products={users.products}
          historial={users.record}
          buys={buys}
        />
      </div>

      <Page />
    </>
  );
};

export default ContainerHeader;
