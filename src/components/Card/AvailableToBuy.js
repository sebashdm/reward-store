import React from "react";
import { Button, Header, Image, Modal, Card } from "semantic-ui-react";
import buyblue from "../../images/buy-blue.svg";
import happy from "../../images/happy.png";
import { redeem } from "../../Services/index";

const AvailableToBuy = ({
  image,
  category,
  nameProduct,
  setBuys,
  id,
  setUsers,
  nameUser,
  points,
  products,
  record,
  cost,
}) => {
  const [open, setOpen] = React.useState(false);
  const [fetched, setFetched] = React.useState(false);

  const handleReedem = () => {
    redeem({
      setBuys,
      id,
      setUsers,
      nameUser,
      points,
      products,
      record,
      fetched,
      setFetched,
      cost,
    });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <img
          className="card-buy-icon"
          title="Comprar"
          alt="redem-img"
          src={buyblue}
          onClick={handleReedem}
        />
      }
    >
      <Modal.Header>You've redeem the product successfully</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={happy} wrapped />
        <Modal.Description>
          <Header>redeemed product</Header>
          <div className="card">
            <Card color="blue">
              <Image src={image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{category}</Card.Header>
                <Card.Meta>
                  <span className="date">{nameProduct}</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="blue"
          content="Amazing!"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default AvailableToBuy;
