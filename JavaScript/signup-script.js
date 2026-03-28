// ============================================
//              Sign-Up Page
// ============================================


const signupForm = document.getElementById("signupForm");

if(signupForm) {

    const companyRadio = document.getElementById("company_radio");
    const userRadio = document.getElementById("user_radio");
    const companyField = document.querySelector(".company_name_field");
    const companyInput = document.getElementById("company_name");

    companyRadio.addEventListener("change", () => {
        companyField.style.display = "block";
    });
    userRadio.addEventListener("change", () => {
        companyField.style.display = "none";
        companyInput.value = ""; 
    });

    signupForm.addEventListener("submit", function(e) {

        
        e.preventDefault();
        

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm_password").value;
        let email = document.getElementById("email").value.trim();
        let accountType = document.querySelector('input[name="account_type"]:checked');
        let companyName = document.getElementById("company_name").value.trim();


        if (!username) { alert("Enter username"); return; }
        if (!password) { alert("Enter password"); return; }
        if (!confirmPassword) { alert("Confirm your password"); return; }
        if (!email) { alert("Enter email"); return; }
        if (!accountType) { alert("Select account type"); return; }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Invalid email format");
            return;
        }

        if (accountType.value === "company" && companyName === "") {
            alert("Company name is required");
            return;
        }

        let user = {
            username: username,
            password: password,
            email: email,
            type: accountType.value,
            company: accountType.value === "company" ? companyName : null
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Signed-up successfully!");

        window.location.href = "browse.html";
    });

}

