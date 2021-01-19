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
          dd = document.createElement("dd");
          dd.innerHTML = m[eigenschaft];
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
  let id = 100;
  function printBasket() {
    let showBasket = document.getElementById("showroom-basket"),
      dl;
    
    if (showBasket) {
      let lastValue = basketArray[basketArray.length - 1];
      dl = showBasket.appendChild(document.createElement("dl"));
      let dd, dt, eigenschaft;
      dt = document.createElement("dt");
      dl.appendChild(dt);
      for (eigenschaft in lastValue) {
        dd = document.createElement("dd");
        dd.innerHTML = lastValue[eigenschaft];
        dt.appendChild(dd);
      }
      let button;
      button = document.createElement("button");
      button.innerHTML = "X";
      button.id = id++;
      button.className = "deleteBtn";
      dt.appendChild(button);
    }
  }

  function calculateTotal(total, num) {
    return total + num;
  }

  function getClicked(pIndex) {
    basketArray.push(catalog[pIndex]);
    printBasket();
    let prices = [];
    basketArray.map((pPrice) => prices.push(pPrice.price));
    document.getElementById("sum").innerHTML = prices.reduce(calculateTotal);
    console.log(prices);
  }

  function deleteItem(pIndex) {
    basketArray.splice(pIndex, 1);
    console.log("dennem")
    printBasket();
  }