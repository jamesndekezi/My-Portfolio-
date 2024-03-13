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

/*---------------Form Validation on Longin------------/** */
// Function to handle editing a blog post
function editPost(postId) {
  const post = document.querySelector(`.blog[data-post-id="${postId}"]`);
  const newContent = prompt('Enter new content:');
  if (newContent !== null) {
    post.querySelector('p').textContent = newContent;
    // Update post content in local storage or send to server
  }
}

// Function to handle deleting a blog post
function deletePost(postId) {
  const confirmDelete = confirm('Are you sure you want to delete this post?');
  if (confirmDelete) {
    const post = document.querySelector(`.blog[data-post-id="${postId}"]`);
    post.remove();
    // Remove post data from local storage or send delete request to server
  }
}

// Event listeners for editing and deleting posts
document.querySelectorAll('.edit-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const postId = btn.closest('.blog').dataset.postId;
    editPost(postId);
  });
});

document.querySelectorAll('.delete-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const postId = btn.closest('.blog').dataset.postId;
    deletePost(postId);
  });
});

// Add functionality for liking, disliking, and commenting if needed
// Function to handle editing a blog post
function editPost(postId) {
  const post = document.querySelector(`.blog[data-post-id="${postId}"]`);
  const newContent = prompt('Enter new content:');
  if (newContent !== null) {
    post.querySelector('p').textContent = newContent;
    // Update post content in local storage or send to server
  }
}

// Function to handle deleting a blog post
function deletePost(postId) {
  const confirmDelete = confirm('Are you sure you want to delete this post?');
  if (confirmDelete) {
    const post = document.querySelector(`.blog[data-post-id="${postId}"]`);
    post.remove();
    // Remove post data from local storage or send delete request to server
  }
}

// Event listeners for editing and deleting posts
document.querySelectorAll('.edit-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const postId = btn.closest('.blog').dataset.postId;
    editPost(postId);
  });
});

document.querySelectorAll('.delete-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const postId = btn.closest('.blog').dataset.postId;
    deletePost(postId);
  });
});

// Add functionality for liking, disliking, and commenting if needed



