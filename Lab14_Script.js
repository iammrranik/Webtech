document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault();

    // Get input values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value.trim();

    // Reset error messages
    document.querySelectorAll(".error").forEach(el => el.innerText = "");
    document.getElementById("success-msg").innerText = "";

    let isValid = true;

    // 1. Full Name Validation
    if (fullName === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    }

    // 2. Email Validation (Must contain @ and .)
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Invalid email format (must contain @ and .).";
        isValid = false;
    }

    // 3. Password Validation (min 6 chars)
    if (password.length < 6) {
        document.getElementById("passError").innerText = "Password must be at least 6 characters.";
        isValid = false;
    }

    // 4. Confirm Password (match check)
    if (password !== confirmPassword) {
        document.getElementById("confirmError").innerText = "Passwords do not match.";
        isValid = false;
    }

    // 5. Phone Number Validation (digits only)
    if (phone === "" || isNaN(phone)) {
        document.getElementById("phoneError").innerText = "Phone number must contain only digits.";
        isValid = false;
    }

    // Final Check
    if (isValid) {
        document.getElementById("success-msg").innerText = "Registration Successful!";
        // Optionally reset form
        document.getElementById("registrationForm").reset();
    }
});