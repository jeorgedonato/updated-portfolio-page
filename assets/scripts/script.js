document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  const footerBtn = document.querySelector("#footer-btn");
  let alertArea = document.querySelector(".alert-area");

  let validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //Show Alert
  let stateAlert = (content, type) => {
    alertArea.innerHTML = `<div class="notification is-${type} is-light" id="alert-clip" role="alert"><p class="title is-6">${content}</p></div>`;
    setTimeout(() => { document.getElementById("alert-clip").style.display = "none"; }, 600);
  };
  //Show Alert


  footerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.querySelector("input#name");
    let email = document.querySelector("#email");
    let message = document.querySelector("#message");
    if (name.value && validateEmail(email.value) && message.value) {
      //Validation works
      name.value = '';
      email.value = '';
      message.value = '';
      stateAlert(`Email sent!`, "success");
    } else if (!validateEmail(email.value)) {
      stateAlert(`Please provide a valid email!`, "danger");
    } else {
      stateAlert(`All fields are required!`, "danger");
    }
  })

})



