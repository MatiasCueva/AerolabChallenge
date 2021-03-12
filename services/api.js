var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQ0ZGQ2YjdlNzE4NzAwMjBlMzhmNDgiLCJpYXQiOjE2MTUxMjU4Njd9.aqFYxOcrQ_nm5xGykz039sgdNAm5lYFpk8jcRLgV1ps"
);
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

export async function getProducts() {
  const res = await fetch("https://coding-challenge-api.aerolab.co/products", {
    method: "GET",
    headers: myHeaders,
  });
  return await res.json();
}

export async function getUser() {
  const res = await fetch("https://coding-challenge-api.aerolab.co/user/me", {
    method: "GET",
    headers: myHeaders,
  });
  return await res.json();
}

export async function getHistory() {
  const res = await fetch("https://coding-challenge-api.aerolab.co/user/history",{
    method: "GET",
    headers: myHeaders,
  });
  return await res.json();
}

export async function redeemItem(productId) {
  const res = await fetch("https://coding-challenge-api.aerolab.co/redeem", {
    method: "POST",
    body: JSON.stringify({ productId:productId }),
    headers: myHeaders,
  });
  const user=await getUser();
  return user;
}

export async function addPoints(amount) {
  const res = await fetch("https://coding-challenge-api.aerolab.co/user/points", {
    method: "POST",
    body: JSON.stringify({ amount:amount }),
    headers: myHeaders,
  });
  const user=await getUser();
  return user;
}
