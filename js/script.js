/*======================= toggle icon navbar =============================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
/*======================= scrolling section ovtive link =============================*/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active')
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      })
    }
     
  });
  /*======================= sticky navbar =============================*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /*=================== remove toggle icon and navbar when click navbar link (scroll) ==========================*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

/*=================== Form Validation ==========================*/

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username-input');
    const passwordInput = document.getElementById('password-input');

    // Validate username
    if (usernameInput.value.trim() === '') {
      alert('Please enter your username.');
      return;
    }

    // Validate password
    if (passwordInput.value.trim() === '') {
      alert('Please enter your password.');
      return;
    }

    // If both username and password are filled, submit the form
    // You can replace this alert with actual form submission logic
    alert('Form submitted successfully!');
  });
});

/*---------------Form Validation------------/** */

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};

