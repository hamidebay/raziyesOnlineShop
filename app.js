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

document.getElementById("0").onclick = function () {
  getClicked(0);
};
document.getElementById("1").onclick = function () {
  getClicked(1);
};
document.getElementById("2").onclick = function () {
  getClicked(2);
};
document.getElementById("3").onclick = function () {
  getClicked(3);
};
document.getElementById("4").onclick = function () {
  getClicked(4);
};
 document.getElementById("100").onclick = function () {
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
};
