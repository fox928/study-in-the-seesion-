 document.getElementById("showAlert").addEventListener("click", () => {
    


      Swal.fire({
        title: "تم بنجاح 🎉",
        text: " يارب التاسك يعجبك ",
        icon: "success",
        confirmButtonText: "تمام"
    });
      document.querySelector(".body").remove()
      document.querySelector(".iner").innerHTML=`
      <a href="./proudect/index.html"><button class="btn btn-primary "> لعرض النتجات اضغط هنا  </button>    </a>
  
     

         `
    }); 

    document.querySelector(".btn").onclick =   function changeBackground() {
      document.body.style.background = "linear-gradient(to right, #0096ff, #ffffff)";
    }
 let count = 15;

const counter = setInterval(() => {
  count--;

  document.querySelector(".p-lodear").textContent = count;

  
  if (count === 0) {
    clearInterval(counter);
    document.querySelector(".lodaer").style.height = "0vh";
    document.querySelector(".p-lodear").remove();
    document.getElementById("showAlert").textContent = "لعرض التاسك "
  }
}, 1000);
const products = [
      {name: "موبايل", price: "5000 جنيه", img: "https://via.placeholder.com/200x150?text=Mobile"},
      {name: "لاب توب", price: "12000 جنيه", img: "https://via.placeholder.com/200x150?text=Laptop"},
      {name: "سماعات", price: "800 جنيه", img: "https://via.placeholder.com/200x150?text=Headphones"},
      {name: "ساعة ذكية", price: "1500 جنيه", img: "https://via.placeholder.com/200x150?text=Smartwatch"},
      {name: "تلفزيون", price: "9000 جنيه", img: "https://via.placeholder.com/200x150?text=TV"},
      {name: "كاميرا", price: "7500 جنيه", img: "https://via.placeholder.com/200x150?text=Camera"},
      {name: "طابعة", price: "2000 جنيه", img: "https://via.placeholder.com/200x150?text=Printer"},
      {name: "ماوس", price: "200 جنيه", img: "https://via.placeholder.com/200x150?text=Mouse"},
      {name: "كيبورد", price: "400 جنيه", img: "https://via.placeholder.com/200x150?text=Keyboard"},
      {name: "تكييف", price: "15000 جنيه", img: "https://via.placeholder.com/200x150?text=AC"},
      {name: "ثلاجة", price: "11000 جنيه", img: "https://via.placeholder.com/200x150?text=Fridge"},
      {name: "ميكروويف", price: "3000 جنيه", img: "https://via.placeholder.com/200x150?text=Microwave"},
      {name: "مروحة", price: "600 جنيه", img: "https://via.placeholder.com/200x150?text=Fan"},
      {name: "غسالة", price: "9500 جنيه", img: "https://via.placeholder.com/200x150?text=Washer"},
      {name: "بوتاجاز", price: "7000 جنيه", img: "https://via.placeholder.com/200x150?text=Oven"},
      {name: "مسلاط طعام", price: "400 جنيه", img: "https://via.placeholder.com/200x150?text=Blender"},
      {name: "مكواة", price: "350 جنيه", img: "https://via.placeholder.com/200x150?text=Iron"}, 
      {name: "بلايستيشن", price: "10000 جنيه", img: "https://via.placeholder.com/200x150?text=PS5"},
      {name: "دراجة", price: "2500 جنيه", img: "https://via.placeholder.com/200x150?text=Bike"},
      {name: "كنبة", price: "6000 جنيه", img: "https://via.placeholder.com/200x150?text=Sofa"},
    ]; 

localStorage.setItem("products", JSON.stringify(products));







