//1. Katalog array olarak olusturulur.
//2. Katalog dom da gösterilir.
//3. Sepet alani olusturulur.
//4. Sepet butonuno basilan ürünler sepet arrayine pushlanir.
//5. Sepet arayindeki ürünler domda gösterilir.
//5. Sepete eklenen ürünlerin fiyati toplam olarak altta gösterilir.
//6. Cikarma butonuna basinca sepetteki eleman cikartilir.
//7. Sepetten eleman cikinca ya da eklenince toplam fiyat güncellenir.

let myImage = new Image();
let basketArray = [];
let catalog = [
  {
    name: "Aprikosen",
    calori: 300,
    expireDate: "01.01.2022",
    price: 3.6,
    picture: "./images/aprikosen.jpg",
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

for (let index = 0; index < catalog.length; index++) {
  document.getElementById(index).onclick = function () {
    getClicked(index);
  };
}

document.querySelector(".showroom").addEventListener("click", (event) => {
  if (event.target.className == "deleteBtn") {
    let productId = event.target.id;
    basketArray.splice(productId, 1);
    console.log(basketArray);
    document.getElementById("showroom-basket").innerHTML = "";

    for (let i = 0; i < basketArray.length; i++) {
      printBasket(basketArray[i], i);
    }
    updateCalculating();
  }
});

function buildImage(url) {
  var img = new Image();
  img.onerror = function () {
    console.log("could not load image on URL " + url);
  };
  img.src = url;
  return img;
}
