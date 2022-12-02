
const form = document.querySelector('.login-form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { elements: { email, password } } = e.currentTarget;
    if (email.value === "" || password.value === "") {
        alert('Щоб продовжити, заповніть всі поля');
    
    }
    else {
        console.log({
            "email": email.value,
            "password": password.value
        });
        form.reset()
    }
})
