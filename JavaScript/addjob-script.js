// ============================================
//              Add-Job Page
// ============================================


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
        