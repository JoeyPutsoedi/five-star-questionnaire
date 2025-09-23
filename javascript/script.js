const form = document.querySelector("#form");
const userName = document.querySelector("#user");


form.addEventListener('submit', event => {
    event.preventDefault();

    const nameValue = userName.value;

    localStorage.setItem('user-name', nameValue);

    window.location.href = "question1.html";

})