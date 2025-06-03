const BASE_URL = "http://localhost:9090/register";

document.addEventListener("DOMContentLoaded", () => {
  fetch(BASE_URL)
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    })
    .then(users => {
      const tbody = document.querySelector("#usersTable tbody");
      tbody.innerHTML = "";

      users.forEach(user => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.age}</td>
          <td>${user.gender}</td>
          <td>${user.bloodGroup}</td>
          <td>${user.contact}</td>
          <td>${user.email}</td>
          <td>${user.address}</td>
          <td>${user.type}</td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch(error => {
      console.error("Error fetching users:", error);
      alert("Failed to load users data");
    });
});
