
//Login Page

const login = document.querySelector("form");

if (login) {

    login.addEventListener("submit", function (e) {
        e.preventDefault();

        const input = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            alert("No account found. Please sign up first.");
            return;
        }
        const Match =(storedUser.username === input || storedUser.email === input) && storedUser.password === password;
        if (Match) {
            localStorage.setItem("currentUser", JSON.stringify(storedUser));

            if (storedUser.type === "company") {
                window.location.href = "dashboard.html";
            } else {
                window.location.href = "browse.html";
            }
        } else {
            alert("Incorrect username/email or password. Please try again.");
        }
    });
}