let myImage = new Image();
let basketArray = [];
let catalog = [
  {
    name: "Aprikosen",
    calori: 300,
    expireDate: "01.01.2022",
    price: 3.6,
    picture: (myImage.src = "./images/aprikosen.jpg"),
  },
  {
    name: "Orangen",
    calori: 700,
    expireDate: "01.01.2021",
    price: 1.1,
    picture: "./images/orangen.jpg",
  },
  {
    name: "Erbeere",
    calori: 300,
    expireDate: "08.11.2022",
    price: 7.6,
    picture: "./images/erdbeere.jpg",
  },
  {
    name: "Kiwi",
    calori: 500,
    expireDate: "27.02.2022",
    price: 2.7,
    picture: "./images/kivi.jpg",
  },
  {
    name: "Pfirsiche",
    calori: 400,
    expireDate: "03.03.2022",
    price: 4.4,
    picture: "./images/Pfirsich.jpg",
  },
];

printCatalog();

for(let index =0; index < catalog.length; index++){
  document.getElementById(index).onclick = function () {
    getClicked(index);
  };
}

for(let index =0; index < basketArray.length; index++){
  let productId = 100+index;
  document.getElementById(productId).onclick = function () {
    alert("test");
    console.log("test");
    //deleteItem((productId));
  };
}
/*  document.getElementById("100").onclick = function () {
  alert("test");
  deleteItem(0);
}; 
document.getElementById("101").onclick = function () {
  console.log("test");
  alert("test");
  deleteItem(1);
};
document.getElementById("102").onclick = function () {
  deleteItem(2);
};
document.getElementById("103").onclick = function () {
  deleteItem(3);
};
document.getElementById("104").onclick = function () {
  deleteItem(4);
}; */
