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

const addjobForm = document.getElementById("addjobForm")

if(addjobForm) {

     addjobForm.addEventListener("submit", function(e) {

        
        e.preventDefault();

        let jobId = document.getElementById("job-id").value.trim();
        let title = document.getElementById("job-title").value.trim();
        let type = document.getElementById("job-type").value;
        let category = document.getElementById("category").value.trim();
        let status = document.getElementById("status").value;
        let description = document.getElementById("job-description").value.trim();
        let salary = document.getElementById("job-salary").value.trim();
        let education = document.getElementById("education").value;
        let experience = document.getElementById("experience").value.trim();
        let gender = document.getElementById("gender").value;
        let techSkills = document.getElementById("tech-skills").value.trim();
        let softSkills = document.getElementById("soft-skills").value.trim();
        let benefits = document.getElementById("benefits").value.trim();
        let companyName = document.getElementById("company-name").value.trim();
        let industry = document.getElementById("industry").value.trim();
        let companySize = document.getElementById("company-size").value.trim();
        let location = document.getElementById("location").value.trim();
        let creator = document.getElementById("creator").value.trim();

        let job = {
            jobId,title,type,category,status,description, salary,education,experience,gender,
            techSkills,softSkills,benefits,companyName,industry,companySize,location,creator
        };

         // Get existing jobs from localStorage or initialize array
        let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

        // Add new job to jobs array
        jobs.push(job);

        // Save back to localStorage
        localStorage.setItem("jobs", JSON.stringify(jobs));

        alert("Job added successfully!");

        // Redirect to dashboard
        window.location.href = "dashboard.html";
    });
}
        