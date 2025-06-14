const BASE_URL = "http://localhost:9090/donors/register";

function registerDonor(event) {
  event.preventDefault(); // prevent form from submitting normally

  // Get form values
  const donor = {
    name: document.getElementById("name").value.trim(),
    age: parseInt(document.getElementById("age").value),
    bloodGroup: document.getElementById("bloodGroup").value,
    phone: document.getElementById("phone").value.trim(),
    email: document.getElementById("email").value.trim(),
    username: document.getElementById("username").value.trim(),
    password: document.getElementById("password").value.trim(),
    units: parseInt(document.getElementById("units").value) // ✅ NEW FIELD
  };

  // Validate fields
  if (
    !donor.name || !donor.age || !donor.bloodGroup || !donor.phone ||
    !donor.email || !donor.username || !donor.password || isNaN(donor.units)
  ) {
    alert("Please fill in all fields including units.");
    return;
  }

  // Send POST request to backend
  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(donor)
  })
  .then(response => {
    if (!response.ok) {
      return response.text().then(msg => { throw new Error(msg); });
    }
    return response.text(); // backend returns plain text message
  })
  .then(message => {
    alert(message);
    window.location.href = "thankyou.html";
  })
  .catch(error => {
    alert("Error: " + error.message);
  });
}
