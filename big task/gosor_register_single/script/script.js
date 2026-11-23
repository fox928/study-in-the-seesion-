// function handleRegister(e){
//     e.preventDefault();
//     const name = document.querySelector("#name")
//     const email = document.querySelector("#email")
//     const password = document.querySelector("#password")
//     const passwordConfirmation = document.querySelector("#passwordConfirmation")
     

//     const dataObject = {
//      name: name.value ,
//      email : email.value,
//      password : password.value,
//      password_confirmation:passwordConfirmation.value


//     };
   
//     fetch("https://api.gosorsolutions.com/api/register" ,{
//         method:"POST",
//         headers: {
//            Accept : "application/json" ,
//            "Content-Type": "application/json",     
//          },
//          body:JSON.stringify(dataObject)
//     }).then((res)=> res.json())
//     .then((data)=> {
//    console.log(data);             
//    console.log(data.data);        
//    console.log(data.data.user); 
//    console.log(data.data.token)
//    Cookies.set('token', data.data.token)
//    const mo = JSON.parse(localStorage.getItem('user'));
//    if(mo == data.data.token){
//       return window.location.href = "../login.html"
//    }
// })
    
    

   
  

// }



function handleRegister(e){
    e.preventDefault();
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const passwordConfirmation = document.querySelector("#passwordConfirmation");

    const dataObject = {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirmation.value
    };

    fetch("https://api.gosorsolutions.com/api/register", {
        method:"POST",
        headers: {
            Accept : "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObject)
    })
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        // console.log(data.data);
        // console.log(data.data.user);
        // console.log(data.data.token);

        Cookies.set('token', data.data.token); 

        // localStorage.setItem('user', JSON.stringify(data.data.token));
        const fox = JSON.parse(localStorage.getItem('user'));

        if (fo === data.data.token) {
            window.location.href = "./gosor_login/index.html"; 
        }
    });
}



const from = document.querySelector(".form")


from.addEventListener("submit",handleRegister)