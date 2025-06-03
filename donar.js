const BASE_URL = "http://localhost:9090/api/donors";

// Save donor
function saveDonor() {
  const number = document.getElementById("number").value;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const bloodgroup = document.getElementById("bloodgroup").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;

  const donor = {
    number: parseInt(number),
    name: name.trim(),
    age: parseInt(age),
    bloodgroup: bloodgroup.trim(),
    email: email.trim(),
    phone: phone.trim(),
    location: location.trim()
  };

  fetch(`${BASE_URL}/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(donor)
  })
    .then(res => {
      if (res.ok) {
        alert("Donor saved successfully!");
        document.querySelector("form").reset();
      } else {
        alert("Failed to save donor.");
      }
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Error while saving donor.");
    });
}

// Attach form submit handler
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  saveDonor();
});
