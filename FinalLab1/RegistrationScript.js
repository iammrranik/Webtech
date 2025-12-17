const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission

    function getValue(name) {
        const el = form.elements[name];
        return el ? el.value.trim() : '';
    }

    // Get all values
    const firstName = getValue('first_name');
    const lastName = getValue('last_name');
    const dob = getValue('dob');
    const gender = getValue('gender');
    const religion = getValue('religion');
    const phone = getValue('phone');
    const email = getValue('email');
    const emergencyContact = getValue('emergency_contact');
    const street = getValue('street');
    const city = getValue('city');
    const country = getValue('country');
    const zip = getValue('zip');
    const username = getValue('username');
    const password = getValue('password');
    const confirmPassword = getValue('confirm_password');
    const terms = form.elements['terms'].checked;

    // Regex patterns
    const phoneRegex = /^\d{7,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation
    if (!firstName || !lastName || !dob || !gender || !religion ||
        !phone || !emergencyContact || !street || !city || !country ||
        !zip || !username || !password || !confirmPassword) {
        alert('Please fill in all required fields.');
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number (digits only, at least 7 digits).');
        return;
    }

    if (email && !emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!terms) {
        alert('You must agree to the Terms and Conditions.');
        return;
    }

    // All validations passed
    alert('Registration successful!');
    form.submit();
});
