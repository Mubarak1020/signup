let users = JSON.parse(localStorage.getItem('users')) || [];

function login() {
  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;

  const user = users.find(u => u.username === loginUsername && u.password === loginPassword);

   if (user) {
    alert('You are logged in successfully');
  } else {
    alert('Try again');
  }
  document.getElementById('loginUsername').value ='';
  document.getElementById('loginPassword').value ='';
}
