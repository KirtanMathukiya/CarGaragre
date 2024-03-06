// JavaScript logic for the appointment form and car animation
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('appointmentForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Gather form data
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var date = document.getElementById('date').value;
  
      // Perform validation (not shown here)
  
      // Send appointment request to server or perform desired action
      console.log('Appointment requested:', { name: name, email: email, phone: phone, date: date });
  
      // Optional: Display confirmation message to the user
      alert('Your appointment request has been submitted. We will contact you shortly.');
    });

  // JavaScript - Add this after your existing JavaScript code
  document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Code to send appointment data to server and check availability
    // For demonstration, we'll just display a confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = 'Your appointment request has been submitted. We will contact you shortly.';
  });

  // JavaScript - Add this after your existing JavaScript code
  document.getElementById('askUsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const question = document.getElementById('question').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Code to handle question submission (you can send it to your backend for processing)
    // For demonstration, we'll just display a confirmation message
    const confirmationMessage = document.getElementById('askUsConfirmation');
    confirmationMessage.innerHTML = `
      <div class="alert alert-success" role="alert">
        Thank you, ${name}! Your question "${question}" has been submitted. We will get back to you via email (${email}) shortly.
      </div>`;
    
    // Clear the form fields after submission
    document.getElementById('question').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  });

  document.getElementById('maintenanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let make = document.getElementById('make').value;
    let model = document.getElementById('model').value;
    let year = document.getElementById('year').value;
    let mileage = document.getElementById('mileage').value;
    
    // Generate maintenance schedule based on car make, model, year, and mileage
    const maintenanceSchedule = generateSchedule(mileage);
  
    // Display maintenance schedule
    const maintenanceScheduleDiv = document.getElementById('maintenanceSchedule');
    maintenanceScheduleDiv.innerHTML = `<h3>Maintenance Schedule for ${year} ${make} ${model}:</h3>${maintenanceSchedule}`;
  });
  
  function generateSchedule(mileage) {
    // Replace with actual maintenance schedule logic
    // For demonstration, we'll provide a generic maintenance schedule based on mileage
    let maintenanceTasks = [];
    if (mileage >= 5000) {
      maintenanceTasks.push('Oil change');
    }
    if (mileage >= 10000) {
      maintenanceTasks.push('Brake inspection');
    }
    if (mileage >= 15000) {
      maintenanceTasks.push('Air filter replacement');
    }
    // Add more tasks based on mileage or other factors
    
    // Format the maintenance tasks into a readable list
    if (maintenanceTasks.length > 0) {
      return `<ul>${maintenanceTasks.map(task => `<li>${task}</li>`).join('')}</ul>`;
    } else {
      return 'No scheduled maintenance tasks at this time.';
    }
  }
  
});
  
