import React from "react";
import { Header, Image } from "semantic-ui-react";
import Points from "./Points";
import AddPointsModal from "../Modals/AddPointsModal";
import RedeemRecordModal from "../Modals/RedeemRecordModal";

const Navbar = ({ name, coin, users, setUsers, products, record, buys }) => {
  return (
    <>
      <div>
        <Header as="h2" className="semanticHeader">
          <Image
            circular
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
          />{" "}
          <div className="user">{name}</div>
          <div className="points">
            <Points coin={coin} />
          </div>
          <div className="btn-modal-points">
            <AddPointsModal
              users={users}
              setUsers={setUsers}
              name={name}
              coin={coin}
              products={products}
              record={record}
              buys={buys}
            />
          </div>
          <div className="btn-modal-redeem">
            <RedeemRecordModal users={users} />
          </div>
        </Header>
      </div>
    </>
  );
};

export default Navbar;
