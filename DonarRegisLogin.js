
const LOGIN_URL = "http://localhost:9090/login";

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  const loginData = {
    username: username,
    password: password
  };

  fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData)
  })
  .then(response => {
    if (!response.ok) {
      return response.text().then(msg => { throw new Error(msg); });
    }
    return response.text();
  })
  .then(message => {
    alert(message); // Login successful
    window.location.href = "donarDashboard.html"; // Redirect after successful login
  })
  .catch(error => {
    alert("Login failed: " + error.message);
  });
});
