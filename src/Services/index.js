export function user({ users, setUsers, fetched, setFetched, compra }) {
  const requestInit = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjlmNzRmMDYwOGE4ODAwMTk1YjliZDgiLCJpYXQiOjE2MDQyODU2ODB9.ctaykhWrBlhUdTgGlnbksoRx3LwszENpALaY64K_OuY",
    },
  };

  const endPoint = "https://coding-challenge-api.aerolab.co/user/me";

  let name;
  let coin;
  let record;

  if (!fetched) {
    fetch(endPoint, requestInit)
      .then((response) => response.json())
      .then((userList) => {
        setFetched(true);
        setUsers({
          name: userList.name,
          points: userList.points,
          record: userList.redeemHistory,
        });
        name = userList.name;
        coin = userList.points;
        record = userList.redeemHistory;

        products({ users, setUsers, name, coin, compra, record });
      });
  }
}

export function points({
  users,
  seusers,
  setFetched,
  numberVal,
  setNumber,
  name,
  coin,
  products,
  record,
}) {
  var request = new XMLHttpRequest();

  request.open("POST", "https://coding-challenge-api.aerolab.co/user/points");

  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjlmNzRmMDYwOGE4ODAwMTk1YjliZDgiLCJpYXQiOjE2MDQyODU2ODB9.ctaykhWrBlhUdTgGlnbksoRx3LwszENpALaY64K_OuY"
  );

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      setFetched(true);
      seusers({
        name: name,
        points: coin + numberVal,
        products: products,
        record: record,
      });
      setNumber(numberVal);

      console.log("Status:", this.status);
      console.log("Headers:", this.getAllResponseHeaders());
      console.log("Body:", this.responseText);
    }
  };

  var body = {
    amount: numberVal,
  };

  request.send(JSON.stringify(body));
}

function products({ users, setUsers, name, coin, compra, record }) {
  const requestInit = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjlmNzRmMDYwOGE4ODAwMTk1YjliZDgiLCJpYXQiOjE2MDQyODU2ODB9.ctaykhWrBlhUdTgGlnbksoRx3LwszENpALaY64K_OuY",
    },
  };

  const endPoint = "https://coding-challenge-api.aerolab.co/products";

  fetch(endPoint, requestInit)
    .then((response) => response.json())
    .then((userList) => {
      setUsers({
        name: name,
        points: coin,
        products: userList,
        record: record,
      });
    });
}

export function canjear({
  setCompra,
  id,
  seusers,
  name,
  points,
  products,
  record,
  fetched,
  setFetched,
  cost,
}) {
  var request = new XMLHttpRequest();

  request.open("POST", "https://coding-challenge-api.aerolab.co/redeem");

  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjlmNzRmMDYwOGE4ODAwMTk1YjliZDgiLCJpYXQiOjE2MDQyODU2ODB9.ctaykhWrBlhUdTgGlnbksoRx3LwszENpALaY64K_OuY"
  );

  let val;
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      setFetched(true);
      seusers({
        name: name,
        points: points - cost,
        products: products,
        record: record,
      });

      val = points - cost;
      history({
        seusers,
        name,
        points,
        products,
        record,
        setCompra,
        cost,
        val,
      });
    }
  };

  var body = {
    productId: id,
  };

  request.send(JSON.stringify(body));
}

function history({ seusers, name, products, val }) {
  const requestInit = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjlmNzRmMDYwOGE4ODAwMTk1YjliZDgiLCJpYXQiOjE2MDQyODU2ODB9.ctaykhWrBlhUdTgGlnbksoRx3LwszENpALaY64K_OuY",
    },
  };

  const endPoint = "https://coding-challenge-api.aerolab.co/user/history";

  fetch(endPoint, requestInit)
    .then((response) => response.json())
    .then((userList) => {
      setTimeout(() => {
        seusers({
          name: name,
          points: val,
          products: products,
          record: userList,
        });
      }, 5000);
    });
}
