function validateRegister() {
    let username, pwd1, pwd2, fname, lname, age, email, phno, address;
    var letters = /^[a-zA-Z]+$/;
    var num = /^[0-9]{10}$/;
    var mail = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.com$/;
    username = document.getElementById("username").value;
    pwd1 = document.getElementById("pwd1").value;
    pwd2 = document.getElementById("pwd2").value;
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    age = document.getElementById("age").value;
    email = document.getElementById("email").value;
    phno = document.getElementById("phno").value;
    address = document.getElementById("address").value;
    if(username == "") {
        alert("Enter Username");
        return false;
    }

    if(pwd1 == "" || pwd1.length < 8) {
        alert("Password should be atleast 8 characters");
        return false;
    }

    if(pwd1 != pwd2) {
        alert("Passwords do not match");
        return false;
    }

    if (fname == "" || fname[0] != fname[0].toUpperCase() || !(fname.match(letters))) {
        alert("Invalid First Name");
        return false;
    }

    if (lname == "" || lname[0] != lname[0].toUpperCase() || !(lname.match(letters))) {
        alert("Invalid Last Name");
        return false;
    }

    if (fname == lname) {
        alert("First Name cannot be same as Last Name");
        return false;
    }

    if (!(email.match(mail))) {
        alert("Invalid Email");
        return false;
    }

    if (!(phno.match(num))) {
        alert("Invalid Phone Number");
        return false;
    }

    if (address.length < 10) {
        alert("Address should be at least 10 characters");
        return false;
    }
    return true;
}

function submitForm(event) {
    event.preventDefault();
    if (validateRegister()) {
        console.log("validated");
        let formData = new FormData(document.getElementById('signup'));

        fetch('signup.php', {
            method: 'POST',
            body: formData
        })
        document.getElementById("signup_success").innerHTML = "Registration successful!";
    }
}

function loginForm(event) {
    event.preventDefault();
    let formData = new FormData(document.getElementById('login'));
    fetch('login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data) {
            console.log(data);
            if(data[0] == 'admin')
            {
                localStorage.setItem('TID', "");
                localStorage.setItem('CID', "");
                window.location.href = "adminAccount.html";
            }
            else if(data[0] == 'invalid') {
                document.getElementById("signup_success").innerHTML = "Invalid Username or Password";
            }
            else {
                localStorage.setItem('TID', data[0]);
                localStorage.setItem('CID', data[1]);
                window.location.href = "freshproducts.html";
            }
        }
        else
            document.getElementById("signup_success").innerHTML = "Invalid Username or Password";
    })
    .catch(error => {
        console.error('Error:', error);   
    });
}