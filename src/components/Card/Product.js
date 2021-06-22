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
            <span className="date">{name}</span>
          </Card.Meta>
          <Card.Meta>
            <span className="date">
              {" "}
              <Icon name="money">Cost:{cost}</Icon>
            </span>
          </Card.Meta>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Product;
