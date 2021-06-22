import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import DisableToBuy from "./DisableToBuy";
import AvailableToBuy from "./AvailableToBuy";

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
        <Card.Content extra>
          <span className="span-semanticCard">
            {cost > points ? (
              <DisableToBuy cost={cost} points={points} />
            ) : (
              <AvailableToBuy
                image={image}
                category={category}
                nameProduct={name}
                setBuys={setBuys}
                id={id}
                setUsers={setUsers}
                nameUser={users.name}
                points={users.points}
                products={users.products}
                record={users.record}
                cost={cost}
              />
            )}
          </span>
        </Card.Content>
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
