
  // Replace with your real backend endpoint
  const API_URL = "http://localhost:9090/api/requests/all";

  const table = document.getElementById("unitTable");

  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(data => {
      data.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${entry.donorName}</td>
          <td>${entry.bloodGroup}</td>
          <td>${entry.units}</td>
          <td>${entry.date}</td>
        `;
        table.appendChild(row);
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      const errorRow = document.createElement("tr");
      errorRow.innerHTML = `<td colspan="4" style="color: red;">Failed to load data</td>`;
      table.appendChild(errorRow);
    });

