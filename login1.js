const BASE_URL = "http://localhost:9090/api"; // Your Spring Boot backend root path

// REGISTER FUNCTION
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.text())
    .then(msg => {
        document.getElementById("responseMsg").innerText = msg;
        console.log("Register response:", msg);
    })
    .catch(err => {
        console.error("Register error:", err);
        document.getElementById("responseMsg").innerText = "Registration failed.";
    });
});

// LOGIN FUNCTION
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.text())
    .then(msg => {
        document.getElementById("responseMsg").innerText = msg;
        console.log("Login response:", msg);
    })
    .catch(err => {
        console.error("Login error:", err);
        document.getElementById("responseMsg").innerText = "Login failed.";
    });
});
