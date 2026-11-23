 

// https://api.gosorsolutions.com/api/register




document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()

    const nameInpu = document.querySelector("#name")
    const emailInpu = document.querySelector("#email")
    const passwordInpu = document.querySelector("#password")
    const passwordConfirmationInpu = document.querySelector("#passwordConfirmation")

    const userObj = {
        name: nameInpu.value,
        email: emailInpu.value,
        password: passwordInpu.value,
        password_confirmation: passwordConfirmationInpu.value
    }



    console.log(userObj)

    // nameInpu.value = ""
    // emailInpu.value = ""
    // passwordInpu.value = ""
    // passwordConfirmationInpu.value = ""


    fetch("https://api.gosorsolutions.com/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObj)
    }).then((res) => res.json())
        .then((data) => {
            // console.log(data.data.token)
            // Cookies.set('token', data.data.token)
            window.location.assign("/login.html")
        })
})