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

//graphs 
// Sample data
var weeklyData = [
  { day: "Mon", users: 120 },
  { day: "Tue", users: 180 },
  { day: "Wed", users: 150 },
  { day: "Thu", users: 200 },
  { day: "Fri", users: 220 },
  { day: "Sat", users: 190 },
  { day: "Sun", users: 230 }
];

var monthlyData = [
  { month: "Jan", users: 3000 },
  { month: "Feb", users: 3200 },
  { month: "Mar", users: 2800 },
  { month: "Apr", users: 3400 },
  { month: "May", users: 3800 },
  { month: "Jun", users: 3600 },
  { month: "Jul", users: 4000 },
  { month: "Aug", users: 3900 },
  { month: "Sep", users: 4100 },
  { month: "Oct", users: 4300 },
  { month: "Nov", users: 4200 },
  { month: "Dec", users: 4400 }
];

var yearlyData = [
  { year: "2017", users: 25000 },
  { year: "2018", users: 28000 },
  { year: "2019", users: 32000 },
  { year: "2020", users: 40000 },
  { year: "2021", users: 45000 },
  { year: "2022", users: 48000 },
  { year: "2023", users: 52000 }
];

var activeUsersChart = new Chart(document.getElementById("activeUsersChart"), {
  type: "line",
  data: {
    labels: weeklyData.map(data => data.day),
    datasets: [{
      label: "Active Users",
      data: weeklyData.map(data => data.users),
      fill: false,
      borderColor: "#007bff",
      borderWidth: 2
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


//week click change button
var weekButton = document.getElementById("weekButton");
var monthButton = document.getElementById("monthButton");
var yearButton = document.getElementById("yearButton");

weekButton.addEventListener("click", function() {
  setActiveButton(weekButton);
  updateChartData(weeklyData.map(data => data.day), weeklyData.map(data => data.users));
});

// Function to set the active button styling
function setActiveButton(button) {
  var buttons = [weekButton, monthButton, yearButton];
  buttons.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
}

// Function to update the chart data
function updateChartData(labels, data) {
  activeUsersChart.data.labels
}

//month change click code
monthButton.addEventListener("click", function() {
  setActiveButton(monthButton);
  updateChartData(monthlyData.map(data => data.month), monthlyData.map(data => data.users));
});

// Function to update the chart data
function updateChartData(labels, data) {
  activeUsersChart.data.labels = labels;
  activeUsersChart.data.datasets[0].data = data;
  activeUsersChart.update();
}


//year click change code
yearButton.addEventListener("click", function() {
  setActiveButton(yearButton);
  updateChartData(yearlyData.map(data => data.year), yearlyData.map(data => data.users));
});
