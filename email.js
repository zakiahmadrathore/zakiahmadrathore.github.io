// JavaScript to handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();  // Prevent default form submission
    sendMail();  // Call your custom function to handle the form submission
  });
  
  function sendMail(){
    let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    }
  
    console.log("Form Data Captured:", params);  // Log form data to ensure it's captured
  
    emailjs.send("service_mopg7qi", "template_gneowtc", params)
    .then(function(response) {
        console.log("Success!", response.status, response.text);  // Log success response from EmailJS
        alert("We have received your inquiry. We will get back to you shortly!");
    }, function(error) {
        console.log("Failed...", error);  // Log error if sending fails
        alert("There was an issue sending your message. Please try again later.");
    });
  }
  