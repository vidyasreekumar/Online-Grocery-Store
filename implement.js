var text = "<products>" +
    "<item>" + 
        "<name>Banana</name>" +
        "<price>0.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Apple</name>" +
        "<price>0.98</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Strawberry</name>" +
        "<price>0.98</price>" +
        "<quantity>5</quantity>" +
    "</item>" + 
    "<item>" +
        "<name>Watermelon</name>" +
        "<price>1.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Carrot</name>" +
        "<price>0.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Tomato</name>" +
        "<price>0.89</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Onion</name>" +
        "<price>0.79</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Potato</name>" +
        "<price>0.95</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Fruit Salad Bowl</name>" +
        "<price>1.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Cantaloupe Bowl</name>" +
        "<price>2.50</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Red Roses</name>" +
        "<price>7.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Carnation Flower Bouquet</name>" +
        "<price>8.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Assorted Rose Bouquet</name>" +
        "<price>10.95</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Salsa</name>" +
        "<price>4.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Buffalo Ranch Dip</name>" +
        "<price>5.55</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Broccoli</name>" +
        "<price>1.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Garlic</name>" +
        "<price>1.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Seasonal Fruit Blend</name>" +
        "<price>4.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Butternut Squash</name>" +
        "<price>3.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Cream Cheese Fruit Dip</name>" +
        "<price>3.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Creamy Spinach Dip</name>" +
        "<price>3.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Peony Bouquet</name>" +
        "<price>5.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Mild Salsa</name>" +
        "<price>3.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "<item>" +
        "<name>Cajun Crab Dip</name>" +
        "<price>2.99</price>" +
        "<quantity>5</quantity>" +
    "</item>" +
    "</products>";


let products1 = [
    // { name: 'Banana', price: 0.99, quantity: 5, img: "banana.jpg"},
    // { name: 'Apple', price: 0.98, quantity: 5, img: "apple.jpg"},
    // { name: 'Strawberry', price: 0.98, quantity: 5, img: "strawberry.jpg"},
    // { name: 'Watermelon', price: 1.99, quantity: 5, img: "watermelon.jpg"},
    // { name: 'Carrot', price: 0.99, quantity: 5, img: "carrot.jpg"},
    // { name: 'Tomato', price: 0.89, quantity: 5, img: "tomato.jpg"},
    // { name: 'Onion', price: 0.79, quantity: 5, img: "onion.jpg"},
    // { name: 'Potato', price: 0.95, quantity: 5, img: "potato.jpg"},
    // { name: 'Fruit Salad Bowl', price: 1.99, quantity: 5, img: "fruitsaladbowl.jpg"},
    // { name: 'Cantaloupe Bowl', price: 2.50, quantity: 5, img: "cantaloupebowl"},
    // { name: 'Red Roses & free vase', price: 7.99, quantity: 5, img: "redroses.jpg"},
    // { name: 'Carnation Flower Bouquet', price: 8.99, quantity: 5, img: "carnationflowerboquet.jpg"},
    // { name: 'Assorted Rose Bouquet', price: 10.95, quantity: 5, img: "assortedrosebouquet.jpg"},
    // { name: 'Salsa', price: 4.99, quantity: 5, img: "salsa.jpg"},
    // { name: 'Buffalo Ranch Dip', price: 5.55, quantity: 5, img: "buffaloranchdip.jpg"},
    // { name: 'Broccoli', price: 1.99, quantity: 5, img: "broccoli.jpg"},
    // { name: 'Garlic', price: 1.99, quantity: 5, img: "garlic.jpg"},
    // { name: 'Seasonal Fruit Blend', price: 4.99, quantity: 5, img: "seasonalfruitblend.jpg"},
    // { name: 'Butternut Squash', price: 3.99, quantity: 5, img: "butternutsquash.jpg"},
    // { name: 'Cream Cheese Fruit Dip', price: 3.99, quantity: 5, img: "creamcheesefruitdip.jpg"},
    // { name: 'Creamy Spinach Dip', price: 3.99, quantity: 5, img: "creamyspinachdip.jpg"},
    // { name: 'Peony Boquet', price: 5.99, quantity: 5, img: "peonyboquet.jpg"},
    // { name: 'Mild Salsa', price: 3.99, quantity: 5, img: "mildsalsa.jpg"},
    // { name: 'Cajun Crab Dip', price: 2.99, quantity: 5, img: "cajuncrabdip.jpg"},
    { name: 'Ham & Cheese Scramble', price: 2.26, quantity: 5, img: "ham&cheesescramble.jpg"},
    { name: 'Beef & Bean Burritos', price: 5.98, quantity: 5, img: "beef&beanburrito"},
    { name: 'Meat Lovers Breakfast', price: 5.98, quantity: 5, img: "meatloversbreakfastbowl.jpg"},
    { name: 'Buttermilk Pancakes', price: 4.42, quantity: 5, img: "buttermilkpancake.jpg"},
    { name: 'Chocolate Cream Pie', price: 6.98, quantity: 5, img: "chocolatecreampie.jpg"},
    { name: 'Fudge Bars', price: 6.98, quantity: 5, img: "fudgebars.jpg"},
    { name: 'Vanilla Ice Creams', price: 6.98, quantity: 5, img: "vanillaicecream.jpg"},
    { name: 'Ice Cream Cones', price: 6.98, quantity: 5, img: "icecreamcones.jpg"},
    { name: 'Chocolate Ice Cream', price: 6.57, quantity: 5, img: "chcocolateicecream.jpg"},
    { name: 'Chicken Fettuccine', price: 2.94, quantity: 5, img: "chickenfettuccine.jpg"},
    { name: 'Lasagna', price: 5.94, quantity: 5, img: "lasagna.jpg"},
    { name: 'Meat Loaf Meal', price: 3.48, quantity: 5, img: "meatloafmeal.jpg"},
    { name: 'Chicken Enchiladas', price: 4.17, quantity: 5, img: "chickenenchiladas.jpg"},
    { name: 'Cheese Pizza', price: 5.24, quantity: 5, img: "classiccrustcheesepizza.jpg"},
    { name: 'Pepperoni Pizza', price: 5.24, quantity: 5, img: "pepperonipizza.jpg"},
    { name: 'Sausage & Pepperoni Pizza', price: 3.86, quantity: 5, img: "sausage&pepperonipizza.jpg"},
    { name: 'Chicken Drumsticks', price: 2.94, quantity: 5, img: "chickendrumsticks.jpg"},
    { name: 'Chicken Thighs', price: 9.44, quantity: 5, img: "chickenthighs.jpg"},
    { name: 'Chicken Wings', price: 12.98, quantity: 5, img: "chickenwings.jpg"},
    { name: 'Meat Balls', price: 6.99, quantity: 5, img: "meatballs.jpg"},
    { name: 'Pizza Rolls', price: 5.78, quantity: 5, img: "pizzarolls.jpg"},
    { name: 'Potato Sticks', price: 5.94, quantity: 5, img: "potatosticks.jpg"},
    { name: 'Corn Dogs', price: 4.94, quantity: 5, img: "corndogs.jpg"},
    { name: 'Chicken Strips', price: 3.99, quantity: 5, img: "chickenstrips.jpg"},
    { name: 'Fish Sticks', price: 4.69, quantity: 5, img: "fishsticks.jpg"},
    { name: 'Dutch Apple Pie', price: 5.63, quantity: 5, img: "dutchapplepie.jpg"},
    { name: 'Shrimp Alfredo', price: 3.87, quantity: 5, img: "shrimpalfredo.jpg"},
    { name: 'Boiled Peanuts', price: 5.94, quantity: 5, img: "boiledpeanuts.jpg"},
    { name: 'Tomato Sauce', price: 3.94, quantity: 5, img: "tomatosauce.jpg"},
    { name: 'Canned Tuna', price: 3.52, quantity: 5, img: "cannedtuna.jpg"},
    { name: 'Sliced Peaches', price: 1.48, quantity: 5, img: "slicedpeaches.jpg"},
    { name: 'Sliced Carrots', price: 0.96, quantity: 5, img: "slicedcarrots.jpg"},
    { name: 'Canned Green Beans', price: 0.64, quantity: 5, img: "cannedgreenbeans.jpg"},
    { name: 'Mayonnaise', price: 3.65, quantity: 5, img: "mayonnaise.jpg"},
    { name: 'Tomato Ketchup', price: 3.52, quantity: 5, img: "tomatoketchup.jpg"},
    { name: 'Yellow Mustard', price: 4.32, quantity: 5, img: "yellowmustard.jpg"},
    { name: 'Peanut Butter Spread', price: 2.98, quantity: 5, img: "peanutbutterspread.jpg"},
    { name: 'Hazelnut Spread', price: 2.73, quantity: 5, img: "hazelnutspread.jpg"},
    { name: 'Sandwich Spread', price: 2.62, quantity: 5, img: "sandwichspread.jpg"},
    { name: 'Garlic Spread', price: 2.54, quantity: 5, img: "garlicspread.jpg"},
    { name: 'Shells Pasta', price: 0.98, quantity: 5, img: "shellspasta.jpg"},
    { name: 'Penne Pasta', price: 0.98, quantity: 5, img: "pennepasta.jpg"},
    { name: 'Pepperoni Pizza', price: 7.98, quantity: 5, img: "freshpepperonipizza.jpg"},
    { name: 'Five Cheese Pizza', price: 5.98, quantity: 5, img: "5cheesepizza.jpg"},
    { name: 'Meat Trio Pizza', price: 5.88, quantity: 5, img: "meattriopizza.jpg"},
    { name: 'Cereal with Marshmallows', price: 6.98, quantity: 5, img: "cerealwithmarshmallow.jpg"},
    { name: 'Shredded Wheat Cereal', price: 10.98, quantity: 5, img: "shreddedwheatcereal.jpg"},
    { name: 'Belgian Waffle', price: 5.98, quantity: 5, img: "belgianwaffle.jpg"},
    { name: 'Pancake', price: 4.98, quantity: 5, img: "pancake.jpg"},
    { name: 'Peanut Butter Pancake', price: 5.98, quantity: 5, img: "peanutbutterpancake.jpg"},
    { name: 'Cinnamon Raisin Bagels', price: 4.98, quantity: 5, img: "cinamonraisinbagels.jpg"},
    { name: 'Blueberry Bagels', price: 3.99, quantity: 5, img: "blueberrybagels.jpg"},
    { name: 'Butter Croissants', price: 2.98, quantity: 5, img: "buttercroissants.jpg"},
    { name: 'English Muffins', price: 4.98, quantity: 5, img: "englishmuffins.jpg"},
    { name: 'Oatmeal Apples & Cinnamon', price: 7.99, quantity: 5, img: "oatmeal.jpg"},
    { name: 'Oats', price: 3.98, quantity: 5, img: "oats.jpg"},
    { name: 'Instant Grits', price: 5.45, quantity: 5, img: "instantgrits.jpg"},
    { name: 'Fruit Loops', price: 3.32, quantity: 5, img: "fruitloops.jpg"},
    { name: 'Pastries', price: 3.45, quantity: 5, img: "pastries.jpg"},
    { name: 'Blueberry Pie Fillings', price: 2.99, quantity: 5, img: "blueberrypiefillings.jpg"},
    { name: 'Pie Crust', price: 2.50, quantity: 5, img: "piecrust.jpg"},
    { name: 'Vanilla Pudding Mix', price: 4.98, quantity: 5, img: "vanillainstantpuddingmix.jpg"},
    { name: 'Chocolate Pudding Mix', price: 4.98, quantity: 5, img: "chocolatepuddingmix.jpg"},
    { name: 'Potato Chips', price: 2.99, quantity: 5, img: "potatochips.jpg"},
    { name: 'Tortilla Chips', price: 2.99, quantity: 5, img: "tortillachips.jpg"},
    { name: 'Pretzel Crisps', price: 1.99, quantity: 5, img: "pretzelcrisps.jpg"},
    { name: 'Pretzel Sticks', price: 2.99, quantity: 5, img: "pretzelsticks.jpg"},
    { name: 'Nutter Butter Cookies', price: 4.99, quantity: 5, img: "nutterbuttercookies.jpg"},
    { name: 'Lemon Cookies', price: 3.99, quantity: 5, img: "lemoncookies.jpg"},
    { name: 'Chocolate Chip Cookies', price: 3.99, quantity: 5, img: "chocolatechipcookies.jpg"},
    { name: 'Butter Cookies', price: 2.99, quantity: 5, img: "buttercookies.jpg"},
    { name: 'Corn Chips', price: 2.99, quantity: 5, img: "cornchips.jpg"},
    { name: 'Gluten Free Pretzel Twists', price: 3.50, quantity: 5, img: "glutenfreepretzeltwists.jpg"},
    { name: 'Gummy Bears', price: 1.99, quantity: 5, img: "gummybears.jpg"},
    { name: 'Fruit Bubble Gumballs', price: 2.99, quantity: 5, img: "gumballs.jpg"},
    { name: 'Mentos Chewing Gum', price: 2.50, quantity: 5, img: "mentos.jpg"},
    { name: 'Orbit Chewing Gum', price: 2.50, quantity: 5, img: "orbit.jpg"},
    { name: 'Bubble Gum', price: 2.22, quantity: 5, img: "bubblegum.jpg"},
    { name: 'Assorted Chocolate Candy', price: 4.98, quantity: 5, img: "assortedcandy.jpg"},
    { name: 'Milky Way Chocolate Bar', price: 3.98, quantity: 5, img: "milkyway.jpg"},
    { name: 'Kit Kat Chocolate Wafer', price: 3.98, quantity: 5, img: "kitkat.jpg"},
    { name: 'Watermelon Gummy Candy', price: 2.50, quantity: 5, img: "watermelongummycandy.jpg"},
    { name: 'Sour Gummy Worms', price: 2.50, quantity: 5, img: "sourgummyworms.jpg"},
    { name: 'Nightstand', price: 7.99, quantity: 5, img: "nightstand.jpg"},
    { name: 'Bar Stools (Set of 2)', price: 10.99, quantity: 5, img: "barstools.jpg"},
    { name: 'Apple Airpods', price: 290, quantity: 5, img: "appleairpods.jpg"},
    { name: 'Wireless Color Printer', price: 150.99, quantity: 5, img: "printer.jpg"},
    { name: 'Smart Air Fryer', price: 120.50, quantity: 5, img: "smartairfryer.jpg"},
    { name: 'Microwave Oven', price: 160.22, quantity: 5, img: "microwaveoven.jpg"}
];

const d = new Date();
document.getElementById("date").innerHTML = d;

const shoppingCart = JSON.parse(localStorage.getItem("data")) || [];

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

function searchFunction() {
    var input, filter, items, a, i, txtValue, flag = 0;
    var letters = /^[a-zA-Z\s]*$/;
    input = document.getElementById("searchItem");
    if (!(input.value.match(letters)))
        alert("Invalid Search Item");
    filter = input.value.toUpperCase();
    items = document.getElementsByClassName("card-permanent");
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

function validateFunction() {
    let fname, lname, phno, gender, gender2, email, comments, flag = 0;
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
    if (fname[0] != fname[0].toUpperCase() || !(fname.match(letters))) {
        alert("Invalid First Name");
    }

    if (lname[0] != lname[0].toUpperCase() || !(lname.match(letters))) {
        alert("Invalid Last Name");
    }

    if (fname == lname) { alert("First Name cannot be same as Last Name"); }

    if (!(phno.match(num))) { alert("Invalid Phone Number"); }

    if (!(gender) && !(gender2)) {
        alert("Please select gender");
    }

    if (!(email.match(mail))) { alert("Invalid Email"); }

    if (comments.length < 10) { alert("Comment should be at least 10 characters"); }
}

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(text, "text/xml");
var root = xmlDoc.getElementsByTagName("products")[0];
var items = root.getElementsByTagName("item");

// Function to add an item to the shopping cart
function addToCart(clickedElement) {
    var element = clickedElement.parentElement.parentElement;
    var iname = element.getElementsByClassName("name")[0].innerText;
    var iprice = element.getElementsByClassName("price")[0].innerText;
    var iquantity = clickedElement.parentElement;
    var product = shoppingCart.find((p) => p.name === iname);
    var flag = 0;

    
    Object.keys(items).forEach((i) => {
        if(items[i].childNodes[0].childNodes[0].nodeValue == iname)
        {  
            if(items[i].childNodes[2].childNodes[0].nodeValue == 0)
            {
                alert("Item not available");
                product = false;
                flag = 1;
            }
            else
                items[i].childNodes[2].childNodes[0].nodeValue--;
        }
    })
    //let search = shoppingCart.find((x) => x.name === iname) || [];
    if (product) {
        Object.keys(shoppingCart).forEach((item) => {
            if(shoppingCart[item].name == iname) {
                shoppingCart[item].quantity++;
                localStorage.setItem("data",JSON.stringify(shoppingCart));
                //iquantity.getElementsByClassName("quantity")[0].innerHTML = search.quantity; 
            }
        })
    }
    else if(flag == 0){
        const cartItem = {
            name: iname,
            price: iprice,
            quantity: 1
        };
        shoppingCart.push(cartItem);
        //iquantity.getElementsByClassName("quantity")[0].innerHTML = 1;
    }
    if(product || flag == 0)
    {
        count = localStorage.getItem("cart");
        count++;
        localStorage.setItem("cart", count);
        localStorage.setItem("data",JSON.stringify(shoppingCart));
        document.getElementById("cartCount").innerHTML = localStorage.getItem("cart");
    }
    console.log(shoppingCart); 
}

function removeFromCart(clickedElement) {
    var element = clickedElement.parentElement.parentElement;
    var iname = element.getElementsByClassName("name")[0].innerText;
    var iquantity = clickedElement.parentElement;
    let search = shoppingCart.find((x) => x.name === iname) || [];
    
    let count = 0;
    const product = shoppingCart.find((p) => p.name === iname);
    if (product) {
        Object.keys(shoppingCart).forEach((item) => {
            if(shoppingCart[item].name == iname) {
                shoppingCart[item].quantity--;
                localStorage.setItem("data",JSON.stringify(shoppingCart));
                //iquantity.getElementsByClassName("quantity")[0].innerHTML = search.quantity;
                count = localStorage.getItem("cart");
                count--;
                localStorage.setItem("cart", count);
                document.getElementById("cartCount").innerHTML = localStorage.getItem("cart");
                
            }
            if(shoppingCart[item].quantity == 0)
            {
                shoppingCart.splice(item,1);
                localStorage.setItem("data",JSON.stringify(shoppingCart));
            }
        })
        Object.keys(items).forEach((i) => {
            if(items[i].childNodes[0].childNodes[0].nodeValue == iname){
                items[i].childNodes[2].childNodes[0].nodeValue++;
            }
        })  

    }
    console.log(shoppingCart);
}
document.getElementById("cartCount").innerHTML = localStorage.getItem("cart");

// let itemQuantity = document.getElementById("itemQuantity");
// let displayQuantity = (iname) => {
//     if(itemQuantity){
//         if (shoppingCart.length !== 0) {
//             Object.keys(shoppingCart).forEach((item) => {
//                 console.log(shoppingCart[item]);
//                 let itemQuantity = item.getElementById("name");
//                 itemQuantity.innerHTML = shoppingCart[item].quantity;
                    
//             })


//             // return(itemQuantity.innerHTML = shoppingCart.map((x) => {
//             //     let { name, quantity } = x;
//             //     let search = shoppingCart.find((y) => y.name === iname) || [];
//             //     console.log(search);
//             //     return `<p class="quantity">${search.quantity === undefined? 0 : search.qu}</p>`;
//             // }).join(""));
//         }
//     }
// };
// displayQuantity();


//Function to display items in my cart page
let cartMain = document.getElementById("cartMain");
let generateCart = () => {
    return (cartMain.innerHTML = shoppingCart.map((x) => {
        let { name, price, quantity } = x;
        return `
            <div class="card-cart">
                <p>${name}</p>
                <p class="price">Unit Price : ${price}</p>
                <div class="buttons">
                    <p class="quantity">Quantity : ${quantity}</p>
                </div>
            </div>`
    }).join(""));
};
generateCart();

let TotalAmount = () => {
    if (shoppingCart.length !== 0) {
        let amount = 0;
        shoppingCart.map((x) => {
            let { name, quantity } = x;
            let searchprice;
            Object.keys(items).forEach((i) => {
                if (items[i].childNodes[0].childNodes[0].nodeValue == name) {
                    console.log(items[i].childNodes[1].childNodes[0].nodeValue);
                    searchprice = items[i].childNodes[1].childNodes[0].nodeValue;
                }
            })
            amount += (quantity * searchprice);
        })
        label.innerHTML = `
      <h2>Total Bill : $ ${amount.toFixed(2)}</h2>
      <button class="checkout">Checkout</button>`;
    }
    else {
        label.innerHTML = `
      <h2>Total Bill : $0</h2>`;
    }
};
TotalAmount();

let calculation = () => {
    document.getElementById("cartCount").innerHTML = localStorage.getItem("cart") ? localStorage.getItem("cart") : 0;
  };
calculation();

