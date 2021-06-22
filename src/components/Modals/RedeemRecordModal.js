import React, { useState } from "react";
import { Button, Icon, Image, Modal } from "semantic-ui-react";
import compras from "../../images/compras.png";

const RedeemRecordModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button circular>Trade history</Button>}
    >
      <Modal.Header>trade history</Modal.Header>
      <Modal.Content image scrolling>
        <Image circular size="medium" src={compras} wrapped />

        <Modal.Description>
          <div className="cards">{}</div>
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
