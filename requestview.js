const BASE_URL = "http://localhost:9090/api/requests/all";

document.addEventListener("DOMContentLoaded", function () {
  fetch(BASE_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch requests");
      }
      return response.json();
    })
    .then((data) => {
      const tableBody = document.getElementById("requestTableBody");
      data.forEach((request, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${request.name}</td>
          <td>${request.email}</td>
          <td>${request.bloodGroup}</td>
          <td>${request.units}</td>
          <td>${request.date}</td>
          <td>${request.hospital}</td>
          <td>${request.contact}</td>
        `;

        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Could not fetch blood requests.");
    });
});
