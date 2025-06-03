
    const BASE_URL = "http://localhost:9090/api/donors";

    document.getElementById("donorForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const donor = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        bloodgroup: document.getElementById("bloodgroup").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        location: document.getElementById("location").value,
      };

      fetch(`${BASE_URL}/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(donor)
      })
      .then(response => {
        if (response.ok) {
          alert("Donor Registered Successfully!");
          window.location.href = "view.html"; // Redirect to view.html
        } else {
          alert("Error submitting form.");
        }
      });
    });

