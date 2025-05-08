//REGISTERING NEW USERS

const registerForm = document.querySelector(" #register-form");
if(registerForm){
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
    // Get values from inputs
    const firstName = document.querySelector(".first-name").value;
    const lastName = document.querySelector(".last-name").value;
    const email = document.querySelector(".mail").value;
    const phone = document.querySelector(".phone-number").value;
    const password = document.querySelector(".password").value;
    const passwordConfirm = document.querySelector(".password-confirm").value;
    const newsletterOption = document.querySelector('input[name="option"]:checked')?.value || "Not selected";

    if (password === passwordConfirm){
        
        //saving to local storage

        user = {
            'First-Name': firstName,
            'Last-Name': lastName,
            'mail': email,
            'Phone-Number': phone,
            'password': password
            };
        localStorage.setItem('userDetails', JSON.stringify(user));
        window.location.href ="index.html"; 
         }
    else{
        alert("passwords don't match");
    }

  })
};


//   LOGGING IN USERS

const loginForm = document.querySelector("#login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const userEmail = document.querySelector(".user-mail").value;
    const userPassword = document.querySelector(".user-password").value;
    const loginMessage = document.querySelector('.login-message');
    loginMessage.style.display = 'block';

    const user = JSON.parse(localStorage.getItem('userDetails'));

    if (user && userEmail === user.mail && userPassword === user.password) {
        loginMessage.textContent = "Logged in successfully!";
        localStorage.setItem('isLoggedIn', 'true');

        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
    } else {
        loginMessage.textContent = "Invalid user details!";
    }
  });
}