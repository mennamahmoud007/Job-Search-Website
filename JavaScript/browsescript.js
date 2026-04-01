// ============================================
//              Browse Page
// ============================================
/*const jobs = [ //ARRAY OF OBJECTS, EACH OBJECT HAS KEYS
    {
        title: "Frontend Developer",
        company: "TechCorp - Cairo, Egypt",
        salary: "$2,500/month",
        experience: "2-4",
        schedule: "full-time",
        location: "onsite",
        status: "Open",
        link: "job-details.html"
    },
    {
        title: "Data Analyst",
        company: "Insight Co - Remote",
        salary: "$1,800/month",
        experience: "0-1",
        schedule: "part-time",
        location: "remote",
        status: "Open",
        link: "job-details.html"
    },
    {
        title: "UI/UX Designer",
        company: "Creative Studio - Alexandria, Egypt",
        salary: "$2,000/month",
        experience: "2-4",
        schedule: "full-time",
        location: "onsite",
        status: "Closed",
        link: "job-details.html"
    },
    {
        title: "Backend Developer",
        company: "NexaSoft - Cairo, Egypt",
        salary: "$3,000/month",
        experience: "+4",
        schedule: "full-time",
        location: "onsite",
        status: "Open",
        link: "job-details.html"
    },
    {
        title: "Mobile App Developer",
        company: "AppWorks - Alexandria, Egypt",
        salary: "$2,200/month",
        experience: "2-4",
        schedule: "full-time",
        location: "onsite",
        status: "Closed",
        link: "job-details.html"
    },
    {
        title: "DevOps Engineer",
        company: "CloudBase - Remote",
        salary: "$3,500/month",
        experience: "+4",
        schedule: "full-time",
        location: "remote",
        status: "Open",
        link: "job-details.html"
    }
];*/ 
//Create HTML cards dynamically
// function buildCards(jobsArray){

//     const jobList = document.querySelector(".job-list");

//     jobList.innerHTML=  "";

//     jobsArray.forEach(function(job) {
//         const li =document.createElement("li");
//         const article = document.createElement("article");

//         article.dataset.schedule = job.schedule;
//         article.dataset.location = job.location;
//         article.dataset.experience = job.experience;
//         //backticks are template literals, allows multiple lines and injection of variables
//         article.innerHTML = ` 
//             <h3>${job.title}</h3>
//             <p>${job.company}</p>
//             <p>Salary: ${job.salary}</p>
//             <p>Experience: ${job.experience}</p>
//             <p>Schedule: ${job.schedule}</p>
//             <span >Status: ${job.status}</span>
//             <a href="${job.link}">View Job Details</a>
//         `;

//         li.appendChild(article);
//         jobList.appendChild(li);
//     });
// }
const jobListTag = document.querySelector('.job-list');
const allJobs = JSON.parse(localStorage.getItem("jobs")) || [];

function displayJobs(jobsToRender) {
    jobListTag.innerHTML = ""; 
    jobsToRender.forEach(job => {
        jobListTag.innerHTML += `
            <article>
                <h3>${job.title}</h3>
                <p>${job.company} - ${job.location}</p> 
                <p>Salary: ${job.salary}</p>
                <p>Experience: ${job.experience}</p>
                <p>Schedule: ${job.schedule}</p>
                <span >Status: ${job.status}</span>
                <a href="job-details.html?id=${job.id}">View Details</a>
            </article>
        `;
    });
}

/*______________________________________________________________________ */
// WHEN any checkbox changes, run this function
function filterjobs(){
    //Get the values of all checked boxes
    const scheduleValues = Array.from(
        document.querySelectorAll(`input[name="schedule"]:checked`))
        .map(cb => cb.value);
        const locationValues = Array.from(
            document.querySelectorAll(`input[name="location"]:checked`))
            .map(cb => cb.value);
            const experienceValues = Array.from(
                document.querySelectorAll(`input[name="experience"]:checked`))
                .map(cb => cb.value);
                const searchvalue = document.querySelector('#job-search').value.toLowerCase();  
                //filter each job based on all filters
                const filteredjobs = jobs.filter(function(job){
                    if(scheduleValues.length > 0 && !scheduleValues.includes(job.schedule))
                        return false;
                    if(locationValues.length > 0 && !locationValues.includes(job.location))
                        return false;
                    if(experienceValues.length > 0 && !experienceValues.includes(job.experience))
                        return false;
                    if(searchvalue && !job.title.toLowerCase().includes(searchvalue))
                        return false;
                    return true;
    });
    displayJobs(filteredjobs); //only shows the matching cards
}
//Adds the filterjobs function to each checkbox, once the box is changed the function works
document.querySelectorAll('input[name="schedule"]').forEach(function(checkbox) {
    checkbox.addEventListener("change", filterjobs);
});
document.querySelectorAll('input[name="location"]').forEach(function(checkbox) {
    checkbox.addEventListener("change", filterjobs);
});
document.querySelectorAll('input[name="experience"]').forEach(function(checkbox) {
    checkbox.addEventListener("change", filterjobs);
});
document.querySelector('.search-bar').addEventListener("submit", function(e){
    e.preventDefault();
    filterjobs();
});
// buildCards(jobs); //Displays the cards once the page loads
displayJobs(allJobs);