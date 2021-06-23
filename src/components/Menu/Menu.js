import React from "react";
import { Button, Header } from "semantic-ui-react";
import {
  filterHighPrice,
  filterLowPrice,
  filterCategory,
} from "../../Services/filters";

const Menu = ({ users, setUsers, buys, page, setPage, filter, setFilter }) => {
  return (
    <div className="filter-Menu">
      <div className="filter-tittle">
        <Header as="h3">Sort By: </Header>
      </div>
      <div className="filter-buttons">
        <Button
          circular
          onClick={() => filterCategory({ users, setUsers, filter, setFilter })}
        >
          <Button.Content visible>Category</Button.Content>
        </Button>
        <Button
          circular
          onClick={() => filterLowPrice({ users, setUsers, filter, setFilter })}
        >
          <Button.Content visible>Lowest Price</Button.Content>
        </Button>
        <Button
          circular
          onClick={() =>
            filterHighPrice({ users, setUsers, filter, setFilter })
          }
        >
          <Button.Content visible>Highest price</Button.Content>
        </Button>
      </div>

      <div className="arrow-icon">
        {page === 1 ? (
          <Button
            circular
            icon="arrow alternate circle right outline"
            onClick={() => setPage(2)}
          />
        ) : (
          <Button
            circular
            icon="arrow alternate circle left outline"
            onClick={() => setPage(1)}
          />
        )}
      </div>
    </div>
  );
};

export default Menu;
