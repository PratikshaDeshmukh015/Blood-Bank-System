// const BASE_URL = "http://localhost:9090/Recipientlogin";

// function login(event) {
//   event.preventDefault(); // Prevent default form submission

//   const username = document.getElementById("UserName").value.trim();
//   const password = document.getElementById("password").value;

//   if (!username || !password) {
//     alert("Please enter both username and password.");
//     return;
//   }

//   fetch(`${BASE_URL}/post/${username}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error("User not found");
//       }
//       return res.json();
//     })
//     .then(data => {
//       if (data.password === password) {
//         alert("Login successful!");
//         window.location.href = "dashboard.html"; // Redirect to dashboard
//       } else {
//         alert("Incorrect password.");
//       }
//     })
//     .catch(err => {
//       alert("Login failed: " + err.message);
//     });
// }




const BASE_URL = "http://localhost:9090/Recipientlogin";
  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      gender: document.getElementById("gender").value,
      bloodGroup: document.getElementById("blood_group").value,
      contact: document.getElementById("contact").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      type: document.getElementById("type").value
    };

    // Send data to backend
    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        alert("Registration successful!");
        window.location.href = "login.html"; // redirect after success
      } else {
        return response.text().then(text => { throw new Error(text); });
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Registration failed: " + error.message);
    });
  });

