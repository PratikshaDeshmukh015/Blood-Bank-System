const LOGIN_URL = "http://localhost:9090/donors/login";

// Get username and password stored from login page (make sure you saved these correctly on login)
const username = localStorage.getItem("username");
const password = localStorage.getItem("password");

if (!username || !password) {
  alert("No login credentials found. Please login again.");
  window.location.href = ""; // redirect to login page
} else {
  fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
      username: username,   // lowercase 'username' to match backend
      password: password
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Invalid username or password");
    }
    return response.json();
  })
  .then(data => {
    // Replace placeholders with real donor data using IDs (assumes you updated your HTML)
    document.getElementById("welcomeName").textContent = `Welcome, ${data.fullName}!`;
    document.getElementById("fullName").textContent = data.fullName;
    document.getElementById("bloodGroup").textContent = data.bloodGroup;
    document.getElementById("age").textContent = data.age;
    document.getElementById("email").textContent = data.email;
    document.getElementById("contactNumber").textContent = data.contactNumber;
    document.getElementById("location").textContent = data.location;
  })
  .catch(error => {
    alert("Login failed: " + error.message);
    window.location.href = "";  // redirect if login fails
  });
}
