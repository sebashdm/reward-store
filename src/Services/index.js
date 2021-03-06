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
  setUsers,
  setFetched,
  bitcoinNumber,
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
      setUsers({
        name: name,
        points: coin + bitcoinNumber,
        products: products,
        record: record,
      });
      setNumber(bitcoinNumber);

      console.log("Status:", this.status);
      console.log("Headers:", this.getAllResponseHeaders());
      console.log("Body:", this.responseText);
    }
  };

  var body = {
    amount: bitcoinNumber,
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

export function redeem({
  setCompra,
  id,
  setUsers,
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
      setUsers({
        name: name,
        points: points - cost,
        products: products,
        record: record,
      });

      val = points - cost;
      history({
        setUsers,
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

function history({ setUsers, name, products, val }) {
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
        setUsers({
          name: name,
          points: val,
          products: products,
          record: userList,
        });
      }, 5000);
    });
}
