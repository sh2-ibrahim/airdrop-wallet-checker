// Handle wallet submission
document.getElementById("walletForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  const walletAddress = document.getElementById("walletAddress").value.trim();
  const messageElement = document.getElementById("eligibilityMessage");

  if (walletAddress) {
      // Display the eligibility message
      messageElement.textContent = "Address not eligible.";
      messageElement.style.display = "block";
  } else {
      alert("Please enter a valid wallet address!");
      // Hide the message if the input is invalid
      messageElement.style.display = "none";
  }
});
