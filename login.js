const BASE_URL = "http://localhost:9090/login";

function login(event) {
  event.preventDefault(); // prevent default form submission

  const username = document.getElementById("UserName").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please enter both username and password");
    return;
  }

  fetch(`${BASE_URL}/get/${username}`)
    .then(res => {
      if (!res.ok) {
        throw new Error("User not found");
      }
      return res.json();
    })
    .then(data => {
      if (data.password === password) {
        alert("Login successful!");
        // Redirect or display dashboard
        window.location.href = "dashboard.html"; // optional page
      } else {
        alert("Incorrect password");
      }
    })
    .catch(err => {
      alert("Login failed: " + err.message);
    });
}
