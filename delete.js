const BASE_URL = "http://localhost:9090/api/donors/delete";
function deleteDonor(id) {
    if (confirm("Are you sure you want to delete this donor?")) {
        fetch(`http://localhost:9090/donors/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert("Donor deleted successfully.");
                // Reload the page to reflect the change
                location.reload();
            } else {
                alert("Failed to delete donor. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error deleting donor:", error);
            alert("An error occurred while deleting the donor.");
        });
    }
}
