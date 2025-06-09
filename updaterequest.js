const apiBaseUrl = "http://localhost:9090/api/requests";

// Utility to get query parameter value by name
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", () => {
  const number = getQueryParam("id");
  if (!number) {
    alert("No request number provided.");
    return;
  }

  // Fetch existing request data and fill the form
  fetch(`${apiBaseUrl}/all`)
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch requests");
      return res.json();
    })
    .then(requests => {
      const request = requests.find(r => r.number == number);
      if (!request) {
        alert("Request not found");
        return;
      }
      // Populate form fields
      document.getElementById("number").value = request.number;
      document.getElementById("name").value = request.name;
      document.getElementById("email").value = request.email;
      document.getElementById("bloodGroup").value = request.bloodGroup;
      document.getElementById("units").value = request.units;
      document.getElementById("date").value = request.date;
      document.getElementById("hospital").value = request.hospital;
      document.getElementById("contact").value = request.contact;
    })
    .catch(err => {
      console.error(err);
      alert("Error loading request data.");
    });

  // Handle form submission
  document.getElementById("updateRequestForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const updatedRequest = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      bloodGroup: document.getElementById("bloodGroup").value,
      units: parseInt(document.getElementById("units").value, 10),
      date: document.getElementById("date").value,
      hospital: document.getElementById("hospital").value,
      contact: document.getElementById("contact").value
    };

    fetch(`${apiBaseUrl}/update/${number}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedRequest)
    })
    .then(response => {
      if (!response.ok) throw new Error("Failed to update request");
      return response.json();
    })
    .then(data => {
      const msg = document.getElementById("responseMessage");
      msg.textContent = "Request updated successfully!";
      msg.style.color = "green";
    })
    .catch(err => {
      console.error(err);
      const msg = document.getElementById("responseMessage");
      msg.textContent = "Error updating the request.";
      msg.style.color = "red";
    });
  });
});
