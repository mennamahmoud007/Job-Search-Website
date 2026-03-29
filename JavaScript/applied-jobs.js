// ============================================
//              Applied Jobs Page
// ============================================
let applications = JSON.parse(localStorage.getItem("applications")) || [];

let tbody = document.getElementById("jobsBody");

function renderApplications() {
    let emptyState = document.getElementById("emptyState");
    let tableContainer = document.getElementById("tableContainer");
    //let statsSection = document.querySelector(".stats"); 

    if (applications.length === 0) {
        emptyState.style.display = "block";
        tableContainer.style.display = "none";
       //if(statsSection) statsSection.style.display = "none";
    } else {
        emptyState.style.display = "none";
        tableContainer.style.display = "block";
       // if(statsSection) statsSection.style.display = "flex";

        tbody.innerHTML = "";
        applications.forEach(function(app) {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${app.title} <p class="schedule">Full-time</p></td>
                <td>${app.company}</td>
                <td>${app.location}</td>
                <td>${app.date}</td>
                <td><span class="badge ${getStatusClass(app.status)}">${app.status}</span></td>
                <td><a href="#">View Job</a></td>
            `;
            tbody.appendChild(row);
        });
    }
}

function getStatusClass(status) {
    if (status === "Accepted") return "accepted";
    if (status === "Rejected") return "rejected";
    if (status === "Under Review") return "review";
    return "applied";
}
function updateStats() {

    let total = applications.length;

    let review = applications.filter(app => app.status === "Under Review").length;

    let accepted = applications.filter(app => app.status === "Accepted").length;
    let rejected = applications.filter(app => app.status === "Rejected").length;

    let responseRate = total > 0 ? Math.round(((accepted + rejected) / total) * 100) : 0;

    document.getElementById("total").textContent = total;
    document.getElementById("review").textContent = review;
    document.getElementById("accepted").textContent = accepted;
    document.getElementById("response").textContent = responseRate + "%";
    
}

renderApplications();
updateStats();
