import React from "react";
import { Card, Image } from "semantic-ui-react";

const RedeemHistory = ({ name, image }) => {
  return (
    <div className="card">
      <Card>
        <Card.Content extra></Card.Content>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
        </Card.Content>
      </Card>
    </div>
  );
};

export default RedeemHistory;
