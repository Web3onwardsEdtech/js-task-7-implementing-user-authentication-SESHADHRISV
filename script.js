function registerUser(name, email, username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, email, username, password });
    localStorage.setItem('users', JSON.stringify(users));
}


function authenticateUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.username === username && user.password === password);
}


document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (authenticateUser(username, password)) {
        document.getElementById('feedback').innerHTML = 'Login successful!';
        document.getElementById('feedback').style.color = 'green';
    } else {
        document.getElementById('feedback').innerHTML = 'Invalid username or password.';
        document.getElementById('feedback').style.color = 'red';
    }
});


document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (name && email && username && password) {
        registerUser(name, email, username, password);
        document.getElementById('feedback').innerHTML = 'Registration successful!';
        document.getElementById('feedback').style.color = 'green';
    } else {
        document.getElementById('feedback').innerHTML = 'Please fill in all fields.';
        document.getElementById('feedback').style.color = 'red';
    }
});

