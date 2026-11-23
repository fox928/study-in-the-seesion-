document.addEventListener("DOMContentLoaded", () => {
  Swal.fire({
    title: "مرحبًا بكم في صفحة المنتجات",
    icon: "success",
    confirmButtonText: "ابدأ التصفح"
  });
});

// المنتجات المحلية مباشرة
const products = [
  {name: "موبايل", price: "—", img: "../images_v6/mobile.png"},
  {name: "لاب توب", price: "—", img: "../images_v6/laptop.png"},
  {name: "سماعات", price: "—", img: "../images_v6/headphones.png"},
  {name: "ساعة ذكية", price: "—", img: "../images_v6/smartwatch.png"},
  {name: "تلفزيون", price: "—", img: "../images_v6/tv.png"},
  {name: "كاميرا", price: "—", img: "../images_v6/camera.png"},
  {name: "طابعة", price: "—", img: "../images_v6/printer.png"},
  {name: "ماوس", price: "—", img: "../images_v6/mouse.png"},
  {name: "كيبورد", price: "—", img: "../images_v6/keyboard.png"},
  {name: "تكييف", price: "—", img: "../images_v6/ac.png"},
  {name: "ثلاجة", price: "—", img: "../images_v6/fridge.png"},
  {name: "ميكروويف", price: "—", img: "../images_v6/microwave.png"},
  {name: "مروحة", price: "—", img: "../images_v6/fan.png"},
  {name: "غسالة", price: "—", img: "../images_v6/washer.png"},
  {name: "بوتاجاز", price: "—", img: "../images_v6/oven.png"},
  {name: "مسلاط طعام", price: "—", img: "../images_v6/blender.png"},
  {name: "مكواة", price: "—", img: "../images_v6/iron.png"},
  {name: "بلايستيشن", price: "—", img: "../images_v6/ps5.png"},
  {name: "دراجة", price: "—", img: "../images_v6/bike.png"},
  {name: "كنبة", price: "—", img: "../images_v6/sofa.png"}
];

function renderProducts(list) {
  const container = document.getElementById("productsRow");
  if (!container) return;
  container.innerHTML = "";
  if (!list || list.length === 0) {
    container.innerHTML = '<div class="col-12"><div class="alert alert-warning text-center">لا توجد منتجات</div></div>';
    return;
  }
  list.forEach((item) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${item.img}" class="card-img-top" alt="${item.name}" loading="lazy">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title mb-2">${item.name}</h5>
          <p class="card-text text-muted mb-3">${item.price}</p>
        </div>
      </div>`;
    container.appendChild(col);
  });
}

document.addEventListener("DOMContentLoaded", () => renderProducts(products));