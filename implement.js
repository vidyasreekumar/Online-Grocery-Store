// updateDateTime()
displayCart()
onLoadCart()
function updateProductDisplay(data) {
    const main = document.getElementById('main');
    main.innerHTML = '';
    if (data && data.length > 0) {
        data.forEach(product => {
            product.image = product.image.replace('\/', '/');
            const productCard = document.createElement('div');
            productCard.classList.add('card');

            productCard.innerHTML = `
                <img class="images" src="${product.image}" alt="${product.Name}">
                <p class="name">${product.Name}</p>
                <p class="price">$${product.UnitPrice}</p>
                <div class="buttons">
                    <a class="count" onclick="addToCart(this, 1)">+</a>
                </div>
            `;

            main.appendChild(productCard);
        });
    }
}

function updateSCProductDisplay(data) {
    const main = document.getElementById('main');
    if (data && data.length > 0) {
        data.forEach(product => {
            product.image = product.image.replace('\/', '/');
            const productCard = document.createElement('div');
            productCard.classList.add('card');

            productCard.innerHTML = `
                <img class="images" src="${product.image}" alt="${product.Name}">
                <p class="name">${product.Name}</p>
                <p class="price">$${product.UnitPrice}</p>
                <input type="number" class="quant" placeholder="Quantity">
                <div class="buttons">
                    <a class="count" onclick="addItem_Value(this)">+</a>
                </div>
            `;
            main.appendChild(productCard);
        });
    }
}

function searchFunction() {
    var input, filter, items, a, i, txtValue, flag = 0;
    var letters = /^[a-zA-Z\s]*$/;
    input = document.getElementById("searchItem");
    if (!(input.value.match(letters)))
        alert("Invalid Search Item");
    else {
        filter = input.value.toUpperCase();
        items = document.getElementsByClassName("card");
        for (i = 0; i < items.length; i++) {
            a = items[i].getElementsByClassName("name");
            txtValue = a[0].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
                flag++;
            }
            if (flag == items.length) {
                alert("Item not available");
                break;
            }
        }
    }
}

function validateFunction() {
    let fname, lname, phno, gender, gender2, email, comments;
    var letters = /^[a-zA-Z]+$/;
    var num = /^\(?([0-9]{3})\)? ([0-9]{3})[-]?([0-9]{4})$/;
    var mail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}$/;
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    phno = document.getElementById("phno").value;
    gender = document.getElementById("gender1").checked;
    gender2 = document.getElementById("gender2").checked;
    email = document.getElementById("email").value;
    comments = document.getElementById("comments").value;
    if (fname[0] != fname[0].toUpperCase() || !(fname.match(letters))) 
        alert("Invalid First Name");

    if (lname[0] != lname[0].toUpperCase() || !(lname.match(letters)))
        alert("Invalid Last Name");

    if (fname == lname)
        alert("First Name cannot be same as Last Name");

    if (!(phno.match(num))) 
        alert("Invalid Phone Number"); 

    if (!(gender) && !(gender2)) 
        alert("Please select gender");

    if (!(email.match(mail))) 
        alert("Invalid Email");

    if (comments.length < 10) 
        alert("Comment should be at least 10 characters");
}


function addToCart(clickedElement,iquant) {
    var element = clickedElement.parentElement.parentElement;
    var iname = element.getElementsByClassName("name")[0].innerText;
    // var iprice = element.getElementsByClassName("price")[0].innerText;
    var iquantity = parseInt(iquant);
    var cid = localStorage.getItem('CID');
    var tid = localStorage.getItem('TID');
    fetch('fetchItem.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item: iname })
    })
        .then(response => response.json())
        .then(data => {
            var itemno = data.ItemNo;
            var name = data.Name;
            var unitPrice = data.UnitPrice;
            var quantity = data.Quantity;
            setProducts(itemno, name, unitPrice, quantity, iquantity);
        })
        .catch((error) => {
            console.error('Error:', error);
        });   
}

function updateInventory(itemNumber, iquantity) {
    fetch('updateInventory.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'quantity=' + encodeURIComponent(iquantity) + '&itemNo=' + encodeURIComponent(itemNumber)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
        if(data == "Item unavailable") {
            alert("Item out of stock");
        }
    });
}

function updateTransaction(transactionID,flag) {
    let totalCost = localStorage.getItem('totalCost');
    fetch('insertTransaction.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'totalCost=' + encodeURIComponent(totalCost) + '&transactionID=' + encodeURIComponent(transactionID) + '&flag=' + encodeURIComponent(flag)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // var transactionID = data.transactionID;
            // console.log('Transaction ID:', transactionID);
            // localStorage.setItem('transactionID', transactionID);

            // You can update the UI or perform other actions as needed
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// function removeFromCart(clickedElement,iquant) {
//     var element = clickedElement.parentElement.parentElement;
//     var iname = element.getElementsByClassName("name")[0].innerText;
//     var element = clickedElement.parentElement.parentElement;
//     var iname = element.getElementsByClassName("name")[0].innerText;
//     var iprice = element.getElementsByClassName("price")[0].innerText;
//     var iquantity = parseInt(iquant);
//     var cid = localStorage.getItem('CID');
//     var tid = localStorage.getItem('TID');
//     fetch('removeFromCart.php', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: 'transactionID=' + encodeURIComponent(tid) +
//               '&customerID=' + encodeURIComponent(cid) +
//               '&itemName=' + encodeURIComponent(iname) +
//               '&quantity=' + encodeURIComponent(iquantity) +
//               '&cartStatus=' + encodeURIComponent("Cancelled")
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.text();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
//     updateInventory(iname,-iquantity);
// }

function setProducts(itemNumber, name, unitPrice, quantity, insertQuant) {
    let cartContainsItems = localStorage.getItem('productsInCart');
    cartContainsItems = JSON.parse(cartContainsItems);

    if (cartContainsItems != null) {
        console.log("cart not empty");
        if (quantity - insertQuant < 0) {
            alert (name + " Out of stock");
        } else if (cartContainsItems[name] == undefined) {
            console.log("adding new item in cart");
            cartContainsItems = {
                ...cartContainsItems,
                [name]: {
                    name: name,
                    cartContains: insertQuant,
                    price: unitPrice,
                    itemNumber: itemNumber
                }
            }
            totalCostOfProducts(unitPrice, insertQuant);
            shoppingCartNumber(insertQuant);
            updateTransaction(localStorage.getItem('TID'),1);
            updateInventory(itemNumber, insertQuant);
            updateCart(localStorage.getItem('TID'),localStorage.getItem('CID'), itemNumber, insertQuant, 'In Cart');
        } else {
            cartContainsItems[name].cartContains += insertQuant;
            totalCostOfProducts(unitPrice, insertQuant);
            shoppingCartNumber(insertQuant);
            console.log("item already in cart");
            updateTransaction(localStorage.getItem('TID'),1);
            updateInventory(itemNumber, insertQuant);
            updateCart(localStorage.getItem('TID'),localStorage.getItem('CID'), itemNumber, insertQuant, 'In Cart');
        }
    } else {
        localStorage.setItem('totalCost', 0);
        if (quantity != 0) {
            cartContainsItems = {
                [name]: {
                    name: name,
                    cartContains: insertQuant,
                    price: unitPrice,
                    itemNumber: itemNumber
                }
            }
            totalCostOfProducts(unitPrice, insertQuant);
            shoppingCartNumber(insertQuant);
            updateTransaction(localStorage.getItem('TID'),0);
            updateInventory(itemNumber, insertQuant);
            updateCart(localStorage.getItem('TID'),localStorage.getItem('CID'), itemNumber, insertQuant, 'In Cart');
        } else {
            alert (name + " Out of stock");
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartContainsItems));
}

function updateCart(transactionID, customerID, itemNumber, quantity, cartStatus) {
    fetch('addToCart.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'transactionID=' + encodeURIComponent(transactionID) +
              '&customerID=' + encodeURIComponent(customerID) +
              '&itemNumber=' + encodeURIComponent(itemNumber) +
              '&quantity=' + encodeURIComponent(quantity) +
              '&cartStatus=' + encodeURIComponent(cartStatus)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function totalCostOfProducts(unitPrice, insertQuant) {
    let totalCost = localStorage.getItem('totalCost');
    let totalprice = unitPrice * insertQuant;
    console.log(totalprice);
    if(totalCost == 0) {
        localStorage.setItem("totalCost", parseFloat(totalprice).toFixed(2));
    } else {
        totalCost = parseFloat(totalCost) + parseFloat(totalprice);
        console.log(totalCost);
        localStorage.setItem("totalCost", parseFloat(totalCost).toFixed(2));
    }
    console.log(localStorage.getItem('totalCost'));
}

function shoppingCartNumber(insertQuant) {
    let pNumber = localStorage.getItem('shopCartNumber');
    pNumber = parseInt(pNumber);
    if (pNumber) {
        localStorage.setItem('shopCartNumber', pNumber + insertQuant);
        document.getElementById('cartCount').innerHTML = pNumber + insertQuant;
    } else {
        localStorage.setItem('shopCartNumber', insertQuant);
        document.getElementById('cartCount').innerHTML = insertQuant;
    }
}

function displayCart() {
    let totalCost = localStorage.getItem('totalCost');
    let customerID = localStorage.getItem('CID');
    let transactionID = localStorage.getItem('TID');
    fetch('displayCart.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'customerID=' + encodeURIComponent(customerID) +
              '&transactionID=' + encodeURIComponent(transactionID)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then(cartItems => {
        console.log(cartItems);
        let productContainer = document.querySelector(".products");
        if(cartItems.length > 0) {
            const headers = Object.keys(cartItems[0]);
            console.log(headers);
            if( cartItems && productContainer) {
                productContainer.innerHTML = '';
                const table = document.createElement("table");
                const headerRow = table.insertRow();
                headers.forEach(header => {
                    const th = document.createElement('th');
                    th.textContent = header;
                    headerRow.appendChild(th);
                });
                cartItems.forEach(item => {
                    const row = table.insertRow();
                    headers.forEach(header => {
                        const cell = row.insertCell();
                        cell.textContent = item[header];
                    });
                    // const actionsCell = row.insertCell();
                    // const checkItemsButton = document.createElement("button");
                    // checkItemsButton.textContent = "View Items";
                    // checkItemsButton.addEventListener("click", () => checkItems(transaction.TransactionID, row));
                    // actionsCell.appendChild(checkItemsButton);
                });
                productContainer.appendChild(table);


                // Object.values(cartItems).map(item => {
                //     productContainer.innerHTML += `
                //     <div class="products">
                //         <div class="tid">${item.TransactionID}</div>
                //         <div class="item_Number">${item.ItemNo}</div>
                //         <div class="item_name">${item.Name}</div>
                //         <div class="categoryfield">${item.Category}</div>
                //         <div class="subcategory">${item.Subcategory}</div>
                //         <div class="price_of_item">${item.UnitPrice}</div>
                //         <div class="quantity_of_products">
                //             ${item.Quantity}
                //         </div>
                //         <div class="total_price">
                //             ${parseFloat(item.Total_Price).toFixed(2)}
                //         </div>
                //     </div>
                //     `;
                // });

                productContainer.innerHTML += `
                    <div class="totalBasket">
                        <h4 class="totalTitle">Total Amount: ${totalCost}</h4>
                        <div class="row" style="text-align: center; padding-top: 10px ;" id="removeButtons">
                        <button onclick="revert()">Cancel</button>
                        <button onclick="checkout()">Checkout</button>
                    </div>
                    </div>
                    
                `;
            }
        }
        else {
            productContainer.innerHTML = `<h2 id="cartHeading" style="align-items: center;">Cart Empty</h2>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function onLoadCart() {
    let pNumbers = localStorage.getItem('shopCartNumber');

    if (pNumbers) {
        document.getElementById('cartCount').innerHTML = pNumbers;
    }
}

async function revert() {
    let customerID = localStorage.getItem('CID');
    let transactionID = localStorage.getItem('TID');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);

    updateTransactionStatus(transactionID, 'Cancelled');

    console.log('Transaction ID:', transactionID);
    console.log('Transaction Status:', 'Cancelled');

    Object.values(cartItems).map(item => {
        console.log(item.itemNumber, item.cartContains);
        updateInventory(item.itemNumber, -item.cartContains);
    });

    updateCartStatus(transactionID, customerID,'Cancelled');
    localStorage.removeItem('TID');
    const tid = randomInt(1, 1000);
    localStorage.setItem('TID', tid);
    localStorage.removeItem('totalCost');
    localStorage.removeItem('productsInCart');
    localStorage.removeItem('shopCartNumber');  
    window.location.href = 'mycart.html';
    let productContainer = document.querySelector(".products");
    productContainer.innerHTML = `<h2 id="cartHeading" style="align-items: center;">Cart Empty</h2>`;
}

async function checkout() {
    let customerID = localStorage.getItem('CID');
    let transactionID = localStorage.getItem('TID');

    updateTransactionStatus(transactionID, 'Shipped');

    console.log('Transaction ID:', transactionID);
    console.log('Transaction Status:', 'Shipped');

    updateCartStatus(transactionID, customerID,'Shopped');
    localStorage.removeItem('TID');
    const tid = randomInt(1, 1000);
    localStorage.setItem('TID', tid)
    localStorage.removeItem('totalCost');
    localStorage.removeItem('productsInCart');
    localStorage.removeItem('shopCartNumber');
    window.location.href = 'mycart.html';
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateCartStatus(transactionID, customerID, cartStatus) {
    fetch('updateCartStatus.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'transactionID=' + encodeURIComponent(transactionID) +
              '&customerID=' + encodeURIComponent(customerID) +
              '&cartStatus=' + encodeURIComponent(cartStatus)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function updateTransactionStatus(transactionID, transactionStatus) {
    fetch('updateTransaction.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'transactionID=' + encodeURIComponent(transactionID) +
              '&transactionStatus=' + encodeURIComponent(transactionStatus)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function addItem_Value(clickedElement){
    var iquantity = clickedElement.parentElement.parentElement.querySelector(".quant").value;
    if(iquantity > 0)
        addToCart(clickedElement,iquantity);
}

// function removeItem_Value(clickedElement){
//     var iquantity = clickedElement.parentElement.parentElement.querySelector(".quant").value;
//     if(iquantity > 0)
//         removeFromCart(clickedElement,iquantity);
// }

function loadTransactionTable(flag) {
    const customerid = localStorage.getItem('CID');
    if(flag == 0) {
        const month = document.getElementById("specificMonth").value;
        fetch('getTransactionsByMonth.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'month=' + encodeURIComponent(month) +
                  '&customerID=' + encodeURIComponent(customerid)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then(data => {
                console.log(data);
                if (data.length > 0) {
                    const headers = Object.keys(data[0]);
                    displayTransactionTable(headers, data, 'getTransactionsByMonth');
                }
                else {
                    displayMessage('No transactions', 'getTransactionsByMonth')
                }
            })
            .catch(error => {
                console.error("Error fetching transaction data:", error);
            });
    }
    else if(flag == 1) {
        fetch('getTransactionsOf3Months.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'customerID=' + encodeURIComponent(customerid)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            console.log(data);
            if (data.length > 0) {
                const headers = Object.keys(data[0]);
                displayTransactionTable(headers, data, 'getTransactions');
            }
            else {
                displayMessage('No transactions', 'getTransactions')
            }
        })
        .catch(error => {
            console.error("Error fetching transaction data:", error);
        });
    }
    else if (flag == 2) {
        const year = document.getElementById("specificYear").value;
        fetch('getTransactionByYear.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'customerID=' + encodeURIComponent(customerid) +
                  '&year=' + encodeURIComponent(year)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then(data => {
                console.log(data);
                if (data.length > 0) {
                    const headers = Object.keys(data[0]);
                    displayTransactionTable(headers, data, 'getTransactionsByYear');
                }
                else {
                    displayMessage('No transactions', 'getTransactionsByYear')
                }
            })
            .catch(error => {
                console.error("Error fetching transaction data:", error);
            });
    }
}

function displayMessage(message, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `<p style="color: red;">${message}</p>`;
}

function displayTransactionTable(headers, data, containerId) {
    console.log(headers);
    let tableContainer = document.getElementById(containerId);
    if (!tableContainer) {
        console.log(`Container with ID '${containerId}' not found.`);
        return;
    }
    tableContainer.innerHTML = '';
    const table = document.createElement("table");
    const headerRow = table.insertRow();

    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    headerRow.insertCell().textContent = "Actions";
    headerRow.cells[headerRow.cells.length - 1].style.fontWeight = "bold";
    data.forEach(transaction => {
        const row = table.insertRow();
        headers.forEach(header => {
            const cell = row.insertCell();
            cell.textContent = transaction[header];
        });
        const actionsCell = row.insertCell();
        const checkItemsButton = document.createElement("button");
        checkItemsButton.textContent = "View Items";
        checkItemsButton.addEventListener("click", () => checkItems(transaction.TransactionID, row));
        actionsCell.appendChild(checkItemsButton);

        if (transaction.TransactionStatus === 'In Cart') {
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Cancel";
            deleteButton.addEventListener("click", () => deleteTransaction(transaction.TransactionID));
            actionsCell.appendChild(deleteButton);
        }
    });
    tableContainer.appendChild(table);
}

function deleteTransaction(transactionId) {
    updateTransactionStatus(transactionId, 'Cancelled');
    updateCartStatus(transactionId, localStorage.getItem('CID'), 'Cancelled');
    const tid = randomInt(1, 1000);
    localStorage.setItem('TID', tid);
    localStorage.removeItem('totalCost');
    localStorage.removeItem('productsInCart');
    localStorage.removeItem('shopCartNumber'); 
    window.location.href = 'my-account.html';
}

function checkItems(transactionId, clickedRow) {
    const customerID = localStorage.getItem('CID');
    fetch("getCartItems.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'transactionId=' + encodeURIComponent(transactionId) +
              '&customerID=' + encodeURIComponent(customerID)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(cartItems => {
            console.log(cartItems);
            displayCartItems(clickedRow, cartItems);
            clickedRow.querySelector("button").style.display = "none";
        })
        .catch(error => {
            console.error("Error fetching cart items:", error.message);
        });
}

function displayCartItems(clickedRow, cartItems) {
    const cartTable = document.createElement("table");
    cartTable.classList.add("cart-table");
    const headerRow = cartTable.insertRow();
    for (const key in cartItems[0]) {
        const headerCell = document.createElement("th");
        headerCell.textContent = key;
        headerRow.appendChild(headerCell);
    }

    cartItems.forEach(cartItem => {
        const row = cartTable.insertRow();
        for (const key in cartItem) {
            const cell = row.insertCell();
            cell.textContent = cartItem[key];
        }
    });

    const cartTableContainer = document.createElement("div");
    cartTableContainer.classList.add("cart-table-container");
    cartTableContainer.appendChild(cartTable);
    const newRow = clickedRow.parentNode.insertRow(clickedRow.rowIndex + 1);
    const newCell = newRow.insertCell();
    newCell.colSpan = clickedRow.cells.length;
    newCell.appendChild(cartTableContainer);
}




