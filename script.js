const signUpForm = document.getElementById('signup');
const loginForm = document.getElementById('login');
const switchToSignUp = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');

switchToSignUp.addEventListener('click', () => {
    loginForm.classList.add("inactive");
    loginForm.classList.remove("active");

    signUpForm.classList.add('active');
    signUpForm.classList.remove('inactive');
});

switchToLogin.addEventListener('click', () => {
    signUpForm.classList.add("inactive");
    signUpForm.classList.remove("active");

    loginForm.classList.add('active');
    loginForm.classList.remove('inactive');
});
