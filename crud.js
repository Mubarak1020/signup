let users = JSON.parse(localStorage.getItem('users')) || [];
const content = document.querySelector('.content');

function createUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const user = { username, password, email, number };

   users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  document.getElementById('email').value = '';
  document.getElementById('number').value = '';
  showUserList();
}

function showUserList() {
  const userList = document.getElementById('userList');
  userList.innerHTML = '<h2>User List</h2>';
  
  users = JSON.parse(localStorage.getItem('users')) || [];

  users.forEach((user, index) => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-item');
    userDiv.innerHTML = `
      <span>${user.username} - ${user.email} - ${user.number}</span>
      <button onclick="editUser(${index})">Edit</button>
      <button onclick="deleteUser(${index})">Delete</button>
    `;
    userList.appendChild(userDiv);
  });
}

function editUser(index) {
  const user = users[index];
  document.getElementById('username').value = user.username;
  document.getElementById('password').value = user.password;
  document.getElementById('email').value = user.email;
  document.getElementById('number').value = user.number;

  document.querySelector('.content button').onclick = () => {
    users[index] = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      email: document.getElementById('email').value,
      number: document.getElementById('number').value,
    };
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    
    localStorage.setItem('users', JSON.stringify(users));
    showUserList();
  };
  
}

function deleteUser(index) {
  users.splice(index, 1);
  localStorage.setItem('users', JSON.stringify(users));
  showUserList();
}

window.onload = showUserList;
