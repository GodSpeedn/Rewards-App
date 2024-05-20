
    let email = document.getElementById("exampleInputEmail1");
    let password = document.getElementById("exampleInputPassword1");
    let button = document.getElementById("submitBut");

    
    button.addEventListener("click", function(event) {
        
        event.preventDefault();

        // Retrieve values from input fields
        let emailValue = email.value;
        let passwordValue = password.value;

        // Log the values
        console.log("Email:", emailValue);
        console.log("Password:", passwordValue);

        // Perform validation and redirection
        if (emailValue === "narayan@gmail.com" && passwordValue === "1234") {
            window.location.href = 'reedeme.html';
        } else {
            alert("Wrong Email and Password");
        }
    });

