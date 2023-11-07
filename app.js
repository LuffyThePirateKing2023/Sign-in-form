const eyeIcon = document.getElementById('eye-button');
const eyeIconinRegistrationPassword = document.getElementById('eye-button-new');
const eyeIconVerifyRegistrationPassword = document.getElementById('eye-button-verify');
const ShowPasswordLogIn = document.getElementById('password');
const showPasswordRegister = document.getElementById('signIn-pass');
const showPasswordVerifyRegister = document.getElementById('signIn-verifypass');
const signUpButton = document.getElementById('signupbtn');
const registrationForm = document.getElementById('form2');
const signInButton = document.getElementById('signInBtn');
const LogInForm = document.getElementById('form1')
const ChckregistrationForm = document.getElementById('form-2')

eyeIcon.addEventListener('click', () => { //Log In show password toggle button
    if(ShowPasswordLogIn.type === "password" ){
        ShowPasswordLogIn.type = "text";
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
    else{
        ShowPasswordLogIn.type = "password";
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
});

eyeIconinRegistrationPassword.addEventListener('click', () => { //registration show password toggle button
        if(showPasswordRegister.type === "password"){
            showPasswordRegister.type = "text";
            eyeIconinRegistrationPassword.classList.remove('fa-eye-slash');
            eyeIconinRegistrationPassword.classList.add('fa-eye');
        }
        else{
            showPasswordRegister.type = "password";
            eyeIconinRegistrationPassword.classList.remove('fa-eye');
            eyeIconinRegistrationPassword.classList.add('fa-eye-slash');
        }
});

eyeIconVerifyRegistrationPassword.addEventListener('click', () => { //registration verify password toggle button
        if(showPasswordVerifyRegister.type === "password"){
            showPasswordVerifyRegister.type = "text";
            eyeIconVerifyRegistrationPassword.classList.remove('fa-eye-slash');
            eyeIconVerifyRegistrationPassword.classList.add('fa-eye');
        }
        else{
            showPasswordVerifyRegister.type = "password";
            eyeIconVerifyRegistrationPassword.classList.remove('fa-eye');
            eyeIconVerifyRegistrationPassword.classList.add('fa-eye-slash');
        }
});

signUpButton.addEventListener('click', () => { //switch to registraion form function
        registrationForm.classList.remove('hidden');
        LogInForm.classList.add('hidden');
});

signInButton.addEventListener('click', () => { //switch to log in form function
        registrationForm.classList.add('hidden');
        LogInForm.classList.remove('hidden');
});

