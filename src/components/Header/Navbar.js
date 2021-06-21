import React from "react";
import { Header, Image } from "semantic-ui-react";
import Page from "../ElectronicsGrid/Page";

const Navbar = ({
  name,
  coin,
  users,
  setUsuarios,
  products,
  historial,
  compra,
}) => {
  return (
    <>
      <div>
        <Header as="h2" className="semanticHeader">
          <Image
            circular
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
          />{" "}
          <div className="user">{name}</div>
        </Header>
      </div>
    </>
  );
};

export default Navbar;
