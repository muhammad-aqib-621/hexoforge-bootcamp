const loginform = document.getElementById("login-form");
const userinput = document.getElementById("username");
const emailinput = document.getElementById("email");
const passinput = document.getElementById("password");

loginform.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = userinput.value.trim();
    const email = emailinput.value.trim();
    const password = passinput.value.trim();

   
    if (username === "") {
        alert("Please enter your username.");
        return;
    }
    if (email === "") {
        alert("Please enter your email.");
        return;
    }
    if (password === "") {
        alert("Please enter your password.");
        return;
    }

   
    alert("Logged in as " + username);
    alert("You have logged in successfully!");
    loginform.reset();
});