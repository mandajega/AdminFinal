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
    { month: "7/5/2023", downloads: 300 },
    { month: "8/5/2023", downloads: 450 },
    { month: "9/5/2023", downloads: 400 },
    { month: "10/5/2023", downloads: 600 },
    { month: "11/5/2023", downloads: 550 },
    { month: "12/5/2023", downloads: 700 }
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
        label: "Monthly Downloads",
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

  // Weekly Active Users data
  var weeklyActiveUsersData = [
    { week: "7/5/2023", users: 50 },
    { week: "7/5/2023", users: 70 },
    { week: "7/5/2023", users: 60 },
    // Add more data points as needed
  ];

  // Create Weekly Active Users chart
  var weeklyActiveUsersCtx = document.getElementById("weeklyActiveUsersChart").getContext("2d");
  var weeklyActiveUsersChart = new Chart(weeklyActiveUsersCtx, {
    type: "bar",
    data: {
      labels: weeklyActiveUsersData.map(function(data) {
        return data.week;
      }),
      datasets: [{
        label: "Weekly Active Users",
        data: weeklyActiveUsersData.map(function(data) {
          return data.users;
        }),
        backgroundColor: "#01344b",
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