import React, { useState } from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import { points } from "../Services/index";

const IncresePointsOptions = ({
  users,
  setUsers,
  name,
  coin,
  products,
  record,
  buys,
}) => {
  const [fetched, setFetched] = useState(false);
  const [number, setNumber] = useState(0);

  const handleIncreasePoints = (bitcoinNumber) => {
    points({
      users,
      setUsers,
      name,
      setFetched,
      setNumber,
      coin,
      bitcoinNumber,
      products,
      record,
      buys,
    });
  };

  return (
    <div>
      <Button
        as="div"
        labelPosition="right"
        onClick={() => handleIncreasePoints(1000)}
      >
        <Button icon>
          <Icon name="bitcoin" />
        </Button>
        <Label as="a" basic pointing="left">
          1000
        </Label>
      </Button>

      <Button
        as="div"
        labelPosition="right"
        onClick={() => handleIncreasePoints(5000)}
      >
        <Button icon>
          <Icon name="bitcoin" />
        </Button>
        <Label as="a" basic pointing="left">
          5000
        </Label>
      </Button>

      <Button
        as="div"
        labelPosition="right"
        onClick={() => handleIncreasePoints(7500)}
      >
        <Button icon>
          <Icon name="bitcoin" />
        </Button>
        <Label as="a" basic pointing="left">
          7500
        </Label>
      </Button>

      {number > 0 && <h1> you increased your points in: {number}</h1>}
    </div>
  );
};

export default IncresePointsOptions;
