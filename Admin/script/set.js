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

//this is for heading and content part
const headings = document.getElementsByClassName('heading');

for (let heading of headings) {
  heading.addEventListener('click', function() {
    this.classList.toggle('open');
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

//change language 
const selectElement = document.getElementById("language-select");
const selectedLanguage = selectElement.value;

console.log(selectedLanguage);

//change logo
const logoUpload = document.getElementById('logo-upload');
const logoImage = document.querySelector('.logo-image');

logoUpload.addEventListener('change', function() {
  const file = this.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    logoImage.src = e.target.result;
  };

  reader.readAsDataURL(file);
});
  

