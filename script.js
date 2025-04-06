document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
  
    // Simple check (replace this with real validation or backend call)
    if (username === 'admin' && password === '1234') {
      alert('Login successful!');
      errorMsg.textContent = '';
      // Redirect or proceed further
    } else {
      errorMsg.textContent = 'Invalid username or password';
    }
  });