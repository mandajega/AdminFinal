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

document.addEventListener("DOMContentLoaded", function() {
  // Monthly Downloads data
  var monthlyDownloads = [
    { month: "Pregnancy info", downloads: 5 },
    { month: "Baby care tips", downloads: 3 },
    { month: "Exercise Tips", downloads: 10 },
    { month: "Food option", downloads: 4 },
    { month: "Mother's care tips", downloads: 1 },
    { month: "Guide books", downloads: 7 }
  ];

  // Create Monthly Downloads chart
  var monthlyCtx = document.getElementById("monthlyDownloadsChart").getContext("2d");
  var monthlyDownloadsChart = new Chart(monthlyCtx, {
    type: "bar",
    data: {
      labels: monthlyDownloads.map(function(data) {
        return data.month;
      }),
      datasets: [{
        label: "Viewers",
        data: monthlyDownloads.map(function(data) {
          return data.downloads;
        }),
        backgroundColor: "#015d86",
        borderColor: "#007bff",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});


// Sample data
var contentData = [
  { item: "Content 1", views: 100, likes: 20 },
  { item: "Content 2", views: 150, likes: 30 },
  { item: "Content 3", views: 200, likes: 25 },
  // Add more data objects as needed
];

// Get the table body element
var tableBody = document.getElementById("tableBody");

// Iterate over the data array and create table rows
contentData.forEach(function(data) {
  // Create a new table row
  var row = document.createElement("tr");

  // Create table cells for each column
  var itemCell = document.createElement("td");
  itemCell.textContent = data.item;
  row.appendChild(itemCell);

  var viewsCell = document.createElement("td");
  viewsCell.textContent = data.views;
  row.appendChild(viewsCell);

  var likesCell = document.createElement("td");
  likesCell.textContent = data.likes;
  row.appendChild(likesCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});
