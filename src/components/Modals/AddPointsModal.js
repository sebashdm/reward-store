import React, { useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import IncresePointsOptions from "../IncresePointsOptions";

const AddPointsModal = ({
  users,
  setUsers,
  name,
  coin,
  products,
  record,
  buys,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button circular>+ Bitcoins</Button>}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <Header icon="money" content="Bitcoin Factory" />
      <Modal.Content>
        <p>
          If you want increase your bitcoins, please select the number of them
          you want!!
        </p>
        <IncresePointsOptions
          users={users}
          setUsers={setUsers}
          name={name}
          coin={coin}
          products={products}
          record={record}
          buys={buys}
        />
      </Modal.Content>

      <Modal.Actions>
        <Button color="blue" onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Enough
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddPointsModal;
