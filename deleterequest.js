// deleteRequest.js

// Function to delete a blood request by number
async function deleteBloodRequest(number) {
  try {
    const response = await fetch(`http://localhost:8080/api/requests/delete/${number}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const result = await response.text();
      alert(result);  // Show success message
      // Optionally, refresh the list or UI here
    } else if (response.status === 404) {
      const errorMsg = await response.text();
      alert(errorMsg);  // Show not found error message
    } else {
      alert('Failed to delete the request. Please try again.');
    }
  } catch (error) {
    console.error('Error deleting request:', error);
    alert('An error occurred while deleting the request.');
  }
}

// Example usage:
// deleteBloodRequest(123);
