// JavaScript to handle form submission
document.getElementById("job-application-form").addEventListener("submit", function(event){
    event.preventDefault();  // Prevent default form submission
    sendJobMail();  // Call your custom function to handle the form submission
  });
  
  function sendJobMail(){
    let params = {
      name: document.getElementById("jobname").value,
      email: document.getElementById("jobemail").value,
      subject: document.getElementById("jobsubject").value,
      message: document.getElementById("jobmessage").value,
    }
  
    console.log("Form Data Captured:", params);  // Log form data to ensure it's captured
  
    emailjs.send("service_mopg7qi", "template_gneowtc", params)
    .then(function(response) {
        console.log("Success!", response.status, response.text);  // Log success response from EmailJS
        alert("We have received your job application request. We will get back to you shortly!");
    }, function(error) {
        console.log("Failed...", error);  // Log error if sending fails
        alert("There was an issue sending your application. Please try again later.");
    });
  }
  