   ``






document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const emailInpu = document.querySelector("#email")
    const passwordInpu = document.querySelector("#password")

    const loginObj = {
        email: emailInpu.value,
        password: passwordInpu.value
    }

    fetch("https://api.gosorsolutions.com/api/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            'content-type': "application/json"
        },
        body: JSON.stringify(loginObj)
    }).then((res) => res.json())
        .then((data) => {
            Cookies.set('token', data.data.token)
            localStorage.setItem("user", JSON.stringify(data.data.user))
            window.location.assign("/index.html")
        })
})


