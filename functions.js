function printCatalog() {
  let showCatalog = document.getElementById("product-container"),
    dl;
  let id = 0;
  if (showCatalog) {
    dl = showCatalog.appendChild(document.createElement("dl"));
    catalog.forEach(function (m, i) {
      let dd, dt, eigenschaft;
      dt = document.createElement("dt");
      dl.appendChild(dt);
      for (eigenschaft in m) {
        if ("picture" == eigenschaft) {
          dd = document.createElement("img");
          dd.src = m.picture;
        } else {
          dd = document.createElement("dd");
          dd.innerHTML = m[eigenschaft];
        }
        dt.appendChild(dd);
      }
      let button;
      button = document.createElement("button");
      button.innerHTML = "Warenkorb";
      button.id = id++;
      dt.appendChild(button);
    });
  }
}

let count = 1;
let id = 100;
function printBasket(pElement, pIndex) {
  let showBasket = document.getElementById("showroom-basket"),
    dl;

  if (showBasket) {
    dl = showBasket.appendChild(document.createElement("dl"));
    let dd, dt, eigenschaft;
    dt = document.createElement("dt");
    dl.appendChild(dt);
    if ("picture" == eigenschaft) {
      dd = document.createElement("img");
      dd.src = m.picture;
    } else {
      for (eigenschaft in pElement) {
        dd = document.createElement("dd");
        dd.innerHTML = pElement[eigenschaft];
        dt.appendChild(dd);
      }
    }

    let button;
    button = document.createElement("button");
    button.innerHTML = "X";
    button.id = pIndex;
    button.className = "deleteBtn";
    dt.appendChild(button);
  }
}

function calculateTotal(total, num) {
  return total + num;
}

function getClicked(pIndex) {
  basketArray.push(catalog[pIndex]);
  document.getElementById("showroom-basket").innerHTML = "";
  for (let i = 0; i < basketArray.length; i++) {
    printBasket(basketArray[i], i);
  }
  updateCalculating();
}

function deleteItem(id) {
  basketArray.splice(id, 1);
}

function updateCalculating() {
  let prices = [];
  basketArray.map((pPrice) => prices.push(pPrice.price));
  document.getElementById("sum").innerHTML = prices.reduce(calculateTotal);
}
