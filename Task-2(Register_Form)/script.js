document.getElementById('user').addEventListener('submit', function (event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    

    if (password != confirmpassword) {
        alert('Please enter correct password');
        return;
    }

    alert('Form submitted successfully!');
    // Add further processing here (e.g., send data to server)
});
