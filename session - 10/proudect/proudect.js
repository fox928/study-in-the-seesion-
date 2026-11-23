 document.addEventListener("DOMContentLoaded", () => {
      Swal.fire({
        title: "مرحبًا بكم في صفحة المنتجات",
        icon: "success",
        confirmButtonText: "ابدأ التصفح"
      });
      
    });
  
  
  // const cart =  JSON.parse(localStorage.getItem("products"))
// اقرأ المنتجات من التخزين (أو Array فاضية لو مش موجودة)
const products = JSON.parse(localStorage.getItem("products")) || [];




