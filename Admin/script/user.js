// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


          //table

// Example user data
const users = [
  { name: 'User 1', email: 'user1@example.com', status: 'Active' },
  { name: 'User 2', email: 'user2@example.com', status: 'Inactive' },
  { name: 'User 3', email: 'user3@example.com', status: 'Active' },
  { name: 'User 1', email: 'user1@example.com', status: 'Active' },
  { name: 'User 2', email: 'user2@example.com', status: 'Inactive' },
  { name: 'User 3', email: 'user3@example.com', status: 'Active' },
  { name: 'User 1', email: 'user1@example.com', status: 'Active' },
  { name: 'User 2', email: 'user2@example.com', status: 'Inactive' },
  { name: 'User 3', email: 'user3@example.com', status: 'Active' },
  // Add more user objects as needed
];

// Function to populate the table
function populateTable() {
  const tableBody = document.querySelector('#userTable tbody');
  
  users.forEach(user => {
    const row = document.createElement('tr');
    const checkboxCell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkboxCell.appendChild(checkbox);
    
    const nameCell = document.createElement('td');
    nameCell.textContent = user.name;
    
    const emailCell = document.createElement('td');
    emailCell.textContent = user.email;
    
    const statusCell = document.createElement('td');
    statusCell.textContent = user.status;
    
    row.appendChild(checkboxCell);
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(statusCell);
    
    tableBody.appendChild(row);
  });
}

// Function to handle select all checkbox
function handleSelectAll() {
  const checkboxes = document.querySelectorAll('#userTable tbody input[type="checkbox"]');
  const selectAllCheckbox = document.querySelector('#selectAll');
  
  checkboxes.forEach(checkbox => {
    checkbox.checked = selectAllCheckbox.checked;
  });
}

// Call the populateTable function when the page loads
window.addEventListener('DOMContentLoaded', () => {
  populateTable();
  
  const selectAllCheckbox = document.querySelector('#selectAll');
  selectAllCheckbox.addEventListener('change', handleSelectAll);
});

