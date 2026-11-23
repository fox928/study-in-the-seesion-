(function(){
  const form = document.querySelector("form.form, form#registerForm, form") || null;
  if(!form) return;
  const nameEl = document.querySelector("#name,[name='name']");
  const emailEl = document.querySelector("#email,[name='email'],input[type='email']");
  const passEl = document.querySelector("#password,[name='password'],input[type='password']");
  const pass2El = document.querySelector("#passwordConfirmation,[name='password_confirmation']") || passEl;

  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const payload = {
      name: nameEl?.value || "", 
      email: emailEl?.value || "",
      password: passEl?.value || "",
      password_confirmation: pass2El?.value || ""
    };
    try{
      const res = await fetch("https://api.gosorsolutions.com/api/register", {
        method:"POST",
        headers: {Accept:"application/json","Content-Type":"application/json"},
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if(!res.ok){
        Swal.fire({icon:"error",title:"خطأ",text:data?.message||"مشكلة في التسجيل"});
        return;
      }
      // localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user||{}));
      Swal.fire({icon:"success",title:"تم التسجيل",text:"تم إنشاء الحساب بنجاح",confirmButtonText:"متابعة"})
        .then(()=>{window.location.href="./gosor_login/index.html"});
    }catch(err){
      Swal.fire({icon:"error",title:"مشكلة اتصال",text:"تأكد من الإنترنت"});
    }
  });
})();