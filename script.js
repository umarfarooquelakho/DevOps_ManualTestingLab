const form = document.getElementById('loginForm');
const msg = document.getElementById('message');
const dashboard = document.getElementById('dashboard');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (!username.trim() || !password.trim()) {
    msg.textContent = 'Username and password are required.';
    return;
  }
  if (username === 'student' && password === 'Test@123') {
    msg.textContent = '';
    form.hidden = true;
    dashboard.hidden = false;
  } else {
    msg.textContent = 'Invalid username or password.';
  }
});
document.getElementById('logout').addEventListener('click', () => {
  dashboard.hidden = true;
  form.hidden = false;
  form.reset();
  msg.textContent = '';
});
