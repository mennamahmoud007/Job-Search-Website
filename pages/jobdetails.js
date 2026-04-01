let applyBtn = document.getElementById('apply-btn');
let applyForm = document.querySelector('.apply-form');

applyBtn.addEventListener('click', function() {
  if (applyForm.style.display === 'none') {
    applyForm.style.display = 'block';
  } else {
    applyForm.style.display = 'none';
  }
});

let nameInput = document.querySelector('input[name="name"]');
let emailInput = document.querySelector('input[name="email"]');
let resumeInput = document.querySelector('input[name="resume"]');
let phoneInput = document.querySelector('input[name="phone"]');
 document.getElementById("application-form").onsubmit= function(e) {
  let namevalid = false;
  let emailvalid = false;
  let phonevalid = false;
  let resumevalid = false;
  if (nameInput.value !="" && nameInput.value.length < 100){
    namevalid = true;
  }
  if (emailInput.value != "" && emailInput.value.includes('@') && emailInput.value.includes('.')){
    emailvalid = true;
  }
  if (phoneInput.value != "" && phoneInput.value.length===11 && phoneInput.value.startsWith('0')){
    phonevalid = true;
  }
  if (resumeInput.value != ""){
    resumevalid = true;
  }

  if(namevalid ===false || emailvalid === false || resumevalid === false || phonevalid === false){
    e.preventDefault();
    alert("Please fill all fields correctly!");
  }
  if(namevalid && emailvalid && resumevalid && phonevalid){

  let application ={
    title: document.querySelector('#job-title').textContent,
    company: document.querySelector('#company-name').textContent,
    location: document.querySelector('#location').textContent,
    date: new Date().toLocaleDateString(),
    status: "under review",
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    resume: resumeInput.value
  }
  let applications = JSON.parse(localStorage.getItem('applications')) || []; // Get existing applications from localStorage or initialize an empty array
  applications.push(application); // Add the new application to the array
  localStorage.setItem('applications', JSON.stringify(applications)); // Save the updated applications array back to localStorage
    alert("Application submitted successfully!");
    console.log(applications);
  }
  else{
    e.preventDefault(); // Prevent form submission if validation fails
  }
 }

 let shareBtn = document.querySelector('.share-btn');
  shareBtn.addEventListener('click', async  function() {
    try{
      await navigator.clipboard.writeText(window.location.href);
      alert("Job details page URL copied to clipboard!");
    }
    catch(e){
      alert("Failed to copy URL: " + e);
    }});