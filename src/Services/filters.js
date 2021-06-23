export function filterLowPrice({ users, setUsers, filter, setFilter }) {
  let name = users.name;
  let points = users.points;
  let products = users.products;
  let record = users.record;

  let productsOrder = products.sort((a, b) => a.cost - b.cost);

  setUsers({
    name: name,
    points: points,
    products: productsOrder,
    record: record,
  });

  setFilter("Lowest Price - Highest price");
}

export function filterHighPrice({ users, setUsers, filter, setFilter }) {
  let name = users.name;
  let points = users.points;
  let products = users.products;
  let record = users.record;

  let productsOrder = products.sort((a, b) => b.cost - a.cost);

  setUsers({
    name: name,
    points: points,
    products: productsOrder,
    record: record,
  });

  setFilter("Highest price - Lowest Price");
}

export function filterCategory({ users, setUsers, filter, setFilter }) {
  let name = users.name;
  let points = users.points;
  let products = users.products;
  let record = users.record;

  let productsOrder = products.sort(function (a, b) {
    if (a.category > b.category) {
      return 1;
    }
    if (a.category < b.category) {
      return -1;
    }

    return 0;
  });

  setUsers({
    name: name,
    points: points,
    products: productsOrder,
    record: record,
  });
  setFilter("Category");
}
