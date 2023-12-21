var items_json;
fetchJSON();
async function fetchJSON() {
    const response = await fetch('inventoryAsJson.json');
    const data = await response.json();
    items_json = data.products;
    //console.log(items_json);
}

// fetch('inventory.xml')
//     .then(response => response.text())
//     .then(data => {
//         const parser = new DOMParser();
//         const xml = parser.parseFromString(data, 'application/xml');
//         var root = xml.getElementsByTagName("products")[0];
//         items_json = root.getElementsByTagName("item");
//         generateCart();
//         TotalAmount(); 
//     });

// const date = new Date();
// document.getElementById("date").innerHTML = date;
var shoppingCart = JSON.parse(localStorage.getItem("data")) || [];

filterFunction("all");
function filterFunction(choice) {
    var x, i;
    x = document.getElementsByClassName("card");
    if (choice == "all")
        choice = "";
    for (i = 0; i < x.length; i++) {
        RemoveItem(x[i], "display");
        if (x[i].className.indexOf(choice) > -1)
            AddItem(x[i], "display");
    }
}

function AddItem(item, name) {
    var i, arr1, arr2;
    arr1 = item.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { item.className += " " + arr2[i]; }
    }
}

function RemoveItem(item, name) {
    var i, arr1, arr2;
    arr1 = item.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    item.className = arr1.join(" ");
}

$(document).ready(function() {
    $("#all").click(function() {
        filterFunction('all');
    });
    $("#cerealshop").click(function() {
        filterFunction('cerealshop');
    });
    $("#pancakewaffles").click(function() {
        filterFunction('pancakewaffles');
    });
    $("#breakfastbreads").click(function() {
        filterFunction('breakfastbreads');
    });
    $("#oatmealgrits").click(function() {
        filterFunction('oatmealgrits');
    });
    $("#rollbacks").click(function() {
        filterFunction('rollbacks');
    });
});

// function searchFunction() {
//     var input, filter, item, a, i, txtValue, flag = 0;
//     var letters = /^[a-zA-Z\s]*$/;
//     input = document.getElementById("searchItem");
//     if (!(input.value.match(letters)))
//         alert("Invalid Search Item");
//     filter = input.value.toUpperCase();
//     item = document.getElementsByClassName("card-permanent");
//     for (i = 0; i < item.length; i++) {
//         a = item[i].getElementsByClassName("name");
//         txtValue = a[0].innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             item[i].style.display = "";
//         } else {
//             item[i].style.display = "none";
//             flag++;
//         }
//         if (flag == item.length) {
//             alert("Item not available");
//             break;
//         }
//     }
// }

// function validateFunction() {
//     let fname, lname, phno, gender, gender2, email, comments, flag = 0;
//     var letters = /^[a-zA-Z]+$/;
//     var num = /^\(?([0-9]{3})\)? ([0-9]{3})[-]?([0-9]{4})$/;
//     var mail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}$/;
//     fname = document.getElementById("fname").value;
//     lname = document.getElementById("lname").value;
//     phno = document.getElementById("phno").value;
//     gender = document.getElementById("gender1").checked;
//     gender2 = document.getElementById("gender2").checked;
//     email = document.getElementById("email").value;
//     comments = document.getElementById("comments").value;
//     if (fname[0] != fname[0].toUpperCase() || !(fname.match(letters))) 
//         alert("Invalid First Name");

//     if (lname[0] != lname[0].toUpperCase() || !(lname.match(letters)))
//         alert("Invalid Last Name");

//     if (fname == lname)
//         alert("First Name cannot be same as Last Name");

//     if (!(phno.match(num))) 
//         alert("Invalid Phone Number"); 

//     if (!(gender) && !(gender2)) 
//         alert("Please select gender");

//     if (!(email.match(mail))) 
//         alert("Invalid Email");

//     if (comments.length < 10) 
//         alert("Comment should be at least 10 characters");
// }

let calculation = () => {
    document.getElementById("cartCount").innerHTML = localStorage.getItem("cart") ? localStorage.getItem("cart") : 0;
  };
calculation();

// Function to add an item to the shopping cart
async function addToCart(clickedElement,iquant) {
    await fetchJSON();
    var element = clickedElement.parentElement.parentElement;
    var iname = element.getElementsByClassName("name")[0].innerText;
    var iprice = element.getElementsByClassName("price")[0].innerText;
    var iquantity = parseInt(iquant);
    var product = shoppingCart.find((p) => p.name === iname);
    var flag = 0;
    Object.keys(items_json).forEach((i) => {
        if(items_json[i].name == iname) {  
            if(items_json[i].quantity == 0) {
                alert("Item not available");
                product = false;
                flag = 1;
            }
        }
    })
    if (product) {
        Object.keys(shoppingCart).forEach((item) => {
            if(shoppingCart[item].name == iname) {
                shoppingCart[item].quantity += iquantity;
                localStorage.setItem("data",JSON.stringify(shoppingCart));
                updateJSON(iname,iquantity);
            }
        })
    }
    else if(flag == 0){
        const cartItem = {
            name: iname,
            price: iprice,
            quantity: iquantity,
            type: 2
        };
        shoppingCart.push(cartItem);
        updateJSON(iname,iquantity);
    }
    if(product || flag == 0)
    {
        var count = parseInt(localStorage.getItem("cart")) || 0;
        count += iquantity;
        localStorage.setItem("cart", count);
        localStorage.setItem("data",JSON.stringify(shoppingCart));
        document.getElementById("cartCount").innerHTML = localStorage.getItem("cart");
    }
    console.log(shoppingCart); 
}

async function removeFromCart(clickedElement,iquantity) {
    await fetchJSON();
    var element = clickedElement.parentElement.parentElement;
    var iname = element.getElementsByClassName("name")[0].innerText;
    
    let count = 0;
    const product = shoppingCart.find((p) => p.name === iname);
    if (product) {
        Object.keys(shoppingCart).forEach((item) => {
            if(shoppingCart[item].name == iname) {
                shoppingCart[item].quantity -= iquantity;
                localStorage.setItem("data",JSON.stringify(shoppingCart));
                count = localStorage.getItem("cart");
                count -= iquantity;
                localStorage.setItem("cart", count);
                document.getElementById("cartCount").innerHTML = localStorage.getItem("cart");
                
            }
            if(shoppingCart[item].quantity <= 0)
            {
                shoppingCart.splice(item,1);
                localStorage.setItem("data",JSON.stringify(shoppingCart));
            }
        })
        Object.keys(items_json).forEach((i) => {
            if(items_json[i].name == iname){
                updateJSON(iname,-iquantity);
            }
        })  
    }
    console.log(shoppingCart);
}
document.getElementById("cartCount").innerHTML = localStorage.getItem("cart");

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
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'update_json.php', true);
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // // Send the request
    // xhr.send('productName=' + productName + '&quantityChange=' + quantityChange);


// function addItem_Value(clickedElement){
//     var iquantity = clickedElement.parentElement.parentElement.querySelector(".quant").value;
//     var iname = clickedElement.parentElement.parentElement.querySelector(".name").innerText;
//     if(iquantity > 0)
//         addToCart(iname,iquantity);
// }

// function removeItem_Value(clickedElement){
//     var iquantity = clickedElement.parentElement.parentElement.querySelector(".quant").value;
//     var iname = clickedElement.parentElement.parentElement.querySelector(".name").innerText;
//     if(iquantity > 0)
//         removeFromCart(iname,iquantity);
// }

//Function to display items_json in my cart page
// let cartMain = document.getElementById("cartMain");
// let generateCart = () => {
//     if(shoppingCart.length !== 0) {
//         return (cartMain.innerHTML = shoppingCart.map((x) => {
//             let { name, price, quantity } = x;
//             return `
//                 <div class="card-cart">
//                     <p>${name}</p>
//                     <p class="price">Unit Price : ${price}</p>
//                     <div class="buttons">
//                         <p class="quantity">Quantity : ${quantity}</p>
//                     </div>
//                 </div>`
//         }).join(""));
//     }
// };
// function cancelOrderJson() {
//     Object.keys(shoppingCart).forEach((item) => {
//         updateJSON(shoppingCart[item].name,-shoppingCart[item].quantity);
//     })
// }

// let TotalAmount = () => {
//     if (shoppingCart.length !== 0) {
//         let amount = 0;
//         shoppingCart.map((x) => {
//             let { name, quantity } = x;
//             let searchprice;
//             for(let i=0;i<items_json.length;i++) {
//                 if (items_json[i].childNodes[1].textContent == name) {
//                     searchprice = items_json[i].childNodes[3].textContent;
//                 }
//             }
//             amount += (quantity * searchprice);
//         })
//         label.innerHTML = `
//       <h2>Total Bill : $ ${amount.toFixed(2)}</h2>
//       <button class="checkout">Checkout</button> <br><br>
//       <button class="cancel" onClick="cancelOrderJson()">Cancel Order</button>`;
//     }
//     else {
//         label.innerHTML = `
//       <h2>Total Bill : $0</h2>`;
//     }
// };




