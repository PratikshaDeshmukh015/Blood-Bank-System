const BASE_URL = "http://localhost:9090/api/donors/all";

// This function fetches all donors and displays them in a table
function fetchAllDonors() {
  fetch(BASE_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch donor data");
      }
      return response.json();
    })
    .then(data => {
      const tableBody = document.getElementById("donorTableBody");
      tableBody.innerHTML = "";

      data.forEach(donor => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${donor.number}</td>
          <td>${donor.name}</td>
          <td>${donor.age}</td>
          <td>${donor.bloodgroup}</td>
          <td>${donor.email}</td>
          <td>${donor.phone}</td>
          <td>${donor.location}</td>
          <td>
                        <button onclick="deleteDonor(${donor.id})" style="background-color:red; color:white; border:none; padding:5px 10px; border-radius:5px;">Delete</button>
                        <button onclick="updateDonor(${donor.id})" style="background-color:#ffa500; color:white; border:none; padding:5px 10px; border-radius:5px;">Update</button>
                    </td>
        `;

        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error fetching donor data.");
    });
}

// Automatically fetch when page loads
document.addEventListener("DOMContentLoaded", fetchAllDonors);
