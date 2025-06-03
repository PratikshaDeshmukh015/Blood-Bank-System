const BASE_URL = "http://localhost:9090/api/requests";

// Save blood request
function saveBloodRequest() {
  const number = document.getElementById("number").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const bloodGroup = document.getElementById("bloodGroup").value;
  const units = document.getElementById("units").value;
  const date = document.getElementById("date").value;
  const hospital = document.getElementById("hospital").value;
  const contact = document.getElementById("contact").value;

  const requestData = {
    number: parseInt(number),
    name: name.trim(),
    email: email.trim(),
    bloodGroup: bloodGroup.trim(),
    units: parseInt(units),
    date: date.trim(),
    hospital: hospital.trim(),
    contact: contact.trim()
  };

  fetch(`${BASE_URL}/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
  })
    .then(response => {
      if (response.ok) {
        alert("✅ Blood request submitted successfully!");
        document.querySelector("form").reset();
      } else {
        alert("❌ Failed to submit blood request.");
      }
    })
    .catch(error => {
      console.error("Error submitting request:", error);
      alert("⚠️ Error occurred while submitting the request.");
    });
}

// Attach submit handler to the form
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  saveBloodRequest();
});
