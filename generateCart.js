var items;
async function fetchXML() {
    const response = await fetch('inventory.xml');
    const data = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, 'application/xml');
    var root = xml.getElementsByTagName("products")[0];
    items = root.getElementsByTagName("item");
}

var items_json;
async function fetchJSON() {
    const response = await fetch('inventoryAsJson.json');
    const data = await response.json();
    items_json = data.products;
//console.log(items_json);
}

async function updateXML(productName,quantityChange) {
    const response = await fetch('update_xml.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `productName=${productName}&quantityChange=${quantityChange}`,
    });
    console.log("awaiting");
    const data = await response.text();
    console.log(data);
}

async function updateJSON(productName,quantityChange) {
    const response = await fetch('update_json.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `productName=${productName}&quantityChange=${quantityChange}`,
    });
    console.log("awaiting");
    const data = await response.text();
    console.log(data);
}

let cartMain = document.getElementById("cartMain");
function generateCart() {
    if(shoppingCart.length != 0) {
        cartMain.innerHTML = shoppingCart.map((x) => {
            let { name, price, quantity } = x;
            return `
                <div class="card-cart">
                    <p>${name}</p>
                    <p class="price">Unit Price : ${price}</p>
                    <div class="buttons">
                        <p class="quantity">Quantity : ${quantity}</p>
                    </div>
                </div>`
        }).join("");
    }
    else {
        cartMain.innerHTML = '<h3>Cart is Empty<h3>';
    }
}
generateCart();

async function TotalAmount() {
    if (shoppingCart.length !== 0) {
        console.log("inside total function");
        await fetchXML();
        await fetchJSON();
        let amount = 0;
        shoppingCart.map((x) => {
            let { name, quantity, type } = x;
            let searchprice;
            if(type == 1) {
                for(let i=0;i<items.length;i++) {
                    if (items[i].childNodes[1].textContent == name) {
                        searchprice = items[i].childNodes[3].textContent;
                        break;
                    }
                }
            }
            else {
                for (let i = 0; i < items_json.length; i++) {
                    if(items_json[i].name == name) {  
                        searchprice = items_json[i].price;
                        break;
                    }
                }
            }
            amount += (quantity * searchprice);
        })
        label.innerHTML = `
      <h2>Total Bill : $ ${amount.toFixed(2)}</h2>
      <button class="checkout">Checkout</button> <br><br>
      <button class="cancel" onClick="cancelOrder()">Cancel Order</button>`;
    }
    else {
        label.innerHTML = `
      <h2>Total Bill : $0</h2>`;
    }
}
TotalAmount();

async function cancelOrder() {
    for (const cartItem of shoppingCart) {
        const { name, quantity, type } = cartItem;
        if(type == 1)
            await updateXML(name, -quantity);
        else
            await updateJSON(name, -quantity);
    }
    var Cart = [];
    localStorage.setItem('data', JSON.stringify(Cart));
    shoppingCart = [];
    TotalAmount();
    generateCart();
    localStorage.setItem("cart", 0);
    calculation();
}
