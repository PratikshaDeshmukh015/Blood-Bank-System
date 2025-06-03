const BASE_URL = "http://localhost:9090/login";
function login(event) {
  event.preventDefault(); // prevent form from reloading

  const username = document.getElementById("UserName").value.trim();
  const password = document.getElementById("password").value.trim();

  const fixedUsername = "donar";
  const fixedPassword = "12345";

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  if (username === fixedUsername && password === fixedPassword) {
    alert("Login successful!");
    window.location.href = "donarview.html"; // redirect
  } else {
    alert("Invalid username or password");
  }
}
