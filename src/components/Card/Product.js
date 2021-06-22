import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const Product = ({
  name,
  image,
  createDate,
  cost,
  key,
  category,
  points,
  buys,
  setBuys,
  users,
  setUsers,
  id,
}) => {
  return (
    <div className="card">
      <Card color="blue">
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{category}</Card.Header>
          <Card.Meta>
            <span>{name}</span>
          </Card.Meta>
          <Card.Meta>
            <span>
              <Icon name="bitcoin">{`Cost:${cost} Bitcoins`}</Icon>
            </span>
          </Card.Meta>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Product;
