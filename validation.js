// Function to validate the login form fields
function validateForm() {
    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value;

    // Check if User ID and Password fields are empty
    if (userid === "") {
        alert("Please enter your User ID.");
        return false; // Prevent form submission
    }
    if (password === "") {
        alert("Please enter your password.");
        return false; // Prevent form submission
    }
    return true; // Allow form submission if validation passes
}
