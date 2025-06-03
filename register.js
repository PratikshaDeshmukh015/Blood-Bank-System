const BASE_URL = "http://localhost:9090/register";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Collect input values from the form
        const formData = {
            name: document.getElementById("name").value.trim(),
            age: parseInt(document.getElementById("age").value),
            gender: document.getElementById("gender").value,
            bloodGroup: document.getElementById("blood_group").value,
            contact: document.getElementById("contact").value.trim(),
            email: document.getElementById("email").value.trim(),
            address: document.getElementById("address").value.trim(),
            type: document.getElementById("type").value
        };

        // Send data to Spring Boot using POST
        fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to register user");
            }
            return response.text(); // or response.json() if backend returns JSON
        })
        .then(data => {
            alert("Registration successful!");
            window.location.href = "login.html"; // Redirect after success
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong during registration.");
        });
    });
});
