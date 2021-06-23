import React, { useState } from "react";
import { Button, Icon, Image, Modal } from "semantic-ui-react";
import compras from "../../images/compras.png";
import RedeemHistory from "../Header/RedeemHistory";

const RedeemRecordModal = ({ users }) => {
  const [open, setOpen] = useState(false);

  const cards = users.record ? (
    users.record.map((card) => (
      <RedeemHistory
        name={card.name}
        image={card.img.url}
        createDate={card.createDate}
        cost={card.cost}
        key={card.createDate}
        category={card.category}
        points={users.points}
      />
    ))
  ) : (
    <h1>no products redeemed</h1>
  );

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button circular>Trade history</Button>}
    >
      <Modal.Header>Trade history</Modal.Header>
      <Modal.Content image scrolling>
        <Image circular size="medium" src={compras} wrapped />

        <Modal.Description>
          <div className="cards">{cards}</div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Great! <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default RedeemRecordModal;
