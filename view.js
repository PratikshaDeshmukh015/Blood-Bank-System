const DONOR_URL = "http://localhost:9090/api/donors/all";
const REQUEST_URL = "http://localhost:9090/api/requests/all";

document.addEventListener("DOMContentLoaded", function () {
  fetchDonors();
  fetchRequests();
});

function fetchDonors() {
  fetch(DONOR_URL)
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById("donorTable").querySelector("tbody");
      tbody.innerHTML = "";
      data.forEach(donor => {
        const row = `
          <tr>
            <td>${donor.number}</td>
            <td>${donor.name}</td>
            <td>${donor.age}</td>
            <td>${donor.bloodgroup}</td>
            <td>${donor.email}</td>
            <td>${donor.phone}</td>
            <td>${donor.location}</td>
          </tr>`;
        tbody.innerHTML += row;
      });
    })
    .catch(err => console.error("Error fetching donors:", err));
}

function fetchRequests() {
  fetch(REQUEST_URL)
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById("requestTable").querySelector("tbody");
      tbody.innerHTML = "";
      data.forEach(req => {
        const row = `
          <tr>
            <td>${req.number}</td>
            <td>${req.name}</td>
            <td>${req.email}</td>
            <td>${req.bloodGroup}</td>
            <td>${req.units}</td>
            <td>${req.date}</td>
            <td>${req.hospital}</td>
            <td>${req.contact}</td>
          </tr>`;
        tbody.innerHTML += row;
      });
    })
    .catch(err => console.error("Error fetching requests:", err));
}
