fetch("http://localhost:9090/donors/view")
  .then(response => response.json())
  .then(data => {
    const tbody = document.getElementById("donorTableBody");
    tbody.innerHTML = "";

    data.forEach(donor => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${donor.id}</td>
        <td>${donor.name}</td>
        <td>${donor.age}</td>
        <td>${donor.bloodGroup}</td>
        <td>${donor.units}</td>
        <td>${donor.phone}</td>
        <td>${donor.email}</td>
        <td>${donor.username}</td>
        <td>${donor.password}</td>
        <td>
          <button class="btn btn-update" onclick="updateDonor(${donor.id})">Update</button>
          <button class="btn btn-delete" onclick="deleteDonor(${donor.id})">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => console.error("Error loading donors:", error));

// Update donor function (placeholder)
function updateDonor(id) {
window.location.href = `updatedonar.html?id=${id}`;  // e.g. window.location.href = `updateDonor.html?id=${id}`;
}

// Delete donor function
function deleteDonor(id) {
  if (!confirm("Are you sure you want to delete this donor?")) return;

  fetch(`http://localhost:9090/donors/${id}`, {
    method: "DELETE",
  })
    .then(response => {
      if (response.ok) {
        alert("Donor deleted successfully");
        // Reload donor list after deletion
        return fetch("http://localhost:9090/donors/view");
      } else {
        throw new Error("Failed to delete donor");
      }
    })
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById("donorTableBody");
      tbody.innerHTML = "";
      data.forEach(donor => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${donor.id}</td>
          <td>${donor.name}</td>
          <td>${donor.age}</td>
          <td>${donor.bloodGroup}</td>
          <td>${donor.units}</td>
          <td>${donor.phone}</td>
          <td>${donor.email}</td>
          <td>${donor.username}</td>
          <td>${donor.password}</td>
          <td>
            <button class="btn btn-update" onclick="updateDonor(${donor.id})">Update</button>
            <button class="btn btn-delete" onclick="deleteDonor(${donor.id})">Delete</button>
          </td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch(error => alert(error.message));
}
