(function(){
  const form = document.querySelector("form.form, form#loginForm, form") || null;
  if(!form) return;
  const emailEl = document.querySelector("#email,[name='email'],input[type='email']");
  const passEl = document.querySelector("#password,[name='password'],input[type='password']");

  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const payload = {email: emailEl?.value||"", password: passEl?.value||""};
    try{
      const res = await fetch("https://api.gosorsolutions.com/api/login", {
        method:"POST",
        headers: {Accept:"application/json","Content-Type":"application/json"},
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if(!res.ok){
        Swal.fire({icon:"error",title:"خطأ في الدخول",text:data?.message||"بيانات غير صحيحة"});
        return;
      }
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user||{}));
      Swal.fire({icon:"success",title:"تم الدخول",text:"مرحبًا بك",confirmButtonText:"اذهب للصفحة الرئيسية"})
        .then(()=>{window.location.href="../home.html"});
    }catch(err){
      Swal.fire({icon:"error",title:"مشكلة اتصال",text:"تأكد من الإنترنت"});
    }
  });
})();