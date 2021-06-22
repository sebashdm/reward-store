import React, { useState } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import coin from "../../images/coin.svg";
import cry from "../../images/cry.png";

const DisableToBuy = ({ cost, points }) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Header>
          <div className="disble-header-text">{cost - points} needed</div>
          <Image circular src={coin} className="card-coin-icon" />{" "}
        </Header>
      }
    >
      <Modal.Header>You don't have enough Bitcoins</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src={cry}
          title="expresión png de pngtree.com"
          wrapped
        />
        <Modal.Description>
          <Header>We are sorry but you need: {cost - points} Bitcoins</Header>
          <Header>to redeem this item!</Header>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Okay"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DisableToBuy;
