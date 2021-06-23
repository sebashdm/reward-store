import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";

const Points = ({ coin }) => {
  return (
    <>
      <Button as="div" labelPosition="right">
        <Button icon>
          <Icon name="bitcoin" />
        </Button>
        <Label as="a" basic pointing="left">
          {coin}
        </Label>
      </Button>
    </>
  );
};

export default Points;
