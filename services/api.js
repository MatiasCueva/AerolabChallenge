var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQ0ZGQ2YjdlNzE4NzAwMjBlMzhmNDgiLCJpYXQiOjE2MTUxMjU4Njd9.aqFYxOcrQ_nm5xGykz039sgdNAm5lYFpk8jcRLgV1ps"
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
};

export async function getProducts() {
  const res = await fetch(
    "https://coding-challenge-api.aerolab.co/products",
    requestOptions
  );
  return await res.json();
}

export async function getUser() {
  const res = await fetch(
    "https://coding-challenge-api.aerolab.co/user/me",
    requestOptions
  );
  return await res.json();
}


export async function redeemItem(_data){
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: "POST",
  body: JSON.stringify(_data),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
/*.then(json => console.log(json));*/
.catch(err => console.log(err));
}


