$(document).ready(function(){

    console.log('script is linked');

    let register = document.querySelector('.signin__reg-btn');
    let signInBtn = document.querySelector('.signin__btn');
    let signUpBtn = document.querySelector('.signin__signup');
    let loginLink = document.querySelector('.go-to-sign-in');
    let signOutBtn = document.querySelector('#signOutLink');

    $(".register").hide();
    $(".main").hide();

    function registerForm(){
        $(".signin").hide();
        $(".register").show();
    }

    function signIn(){
        $(".signin").hide();
        $(".register").hide();
        $(".main").show();
    }

    function login(){
        $(".signin").show();
    }

    function signUp(){
        $(".register").hide();
        $(".signin").hide();
        $(".main").show();
    }

    function signOut(){
        $(".main").hide();
        $(".signin").show();
    }


    register.addEventListener("click", registerForm);
    signInBtn.addEventListener("click", signIn);
    signUpBtn.addEventListener("click", signUp);
    loginLink.addEventListener("click", login);
    signOutBtn.addEventListener("click", signOut);

});