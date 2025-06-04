// const BASE_URL = "http://localhost:9090/request-login";

// function login(event) {
//   event.preventDefault(); // prevent form from reloading

//   // ✅ Hardcoded credentials
//   const username = "request";
//   const password = "12345";

//   // Send login request to backend
//   fetch(BASE_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ username, password })
//   })
//   .then(response => {
//     if (!response.ok) {
//       return response.json().then(err => {
//         throw new Error(err.error || "Login failed");
//       });
//     }
//     return response.json();
//   })
//   .then(data => {
//     alert(data.message || "Login successful!");
//     window.location.href = "donarview.html"; // Redirect after success
//   })
//   .catch(error => {
//     alert(error.message || "Invalid username or password");
//   });
// }

const BASE_URL = "http://localhost:9090/request-login";
function login(event) {
  event.preventDefault(); // prevent form from reloading

  const username = document.getElementById("UserName").value.trim();
  const password = document.getElementById("password").value.trim();

  const fixedUsername = "request";
  const fixedPassword = "12345";

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  if (username === fixedUsername && password === fixedPassword) {
    alert("Login successful!");
    window.location.href = "requestview.html"; // redirect
  } else {
    alert("Invalid username or password");
  }
}
