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





// عرض المنتجات من المصفوفة باستخدام forEach
document.addEventListener('DOMContentLoaded', function () {
  var row = document.getElementById('productsRow');
  if (!row) return;
  row.innerHTML = '';

  if (!Array.isArray(products) || products.length === 0) {
    row.innerHTML = '<div class="col-12"><div class="alert alert-warning text-center">لا توجد منتجات</div></div>';
    return;
  }

  products.forEach(function (item) {
    var col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
    col.innerHTML =
      '<div class="card h-100 shadow-sm">' +
        '<img src="' + (item.img || '') + '" class="card-img-top" alt="' + (item.name || '') + '" loading="lazy">' +
        '<div class="card-body d-flex flex-column">' +
          '<h5 class="card-title mb-2">' + (item.name || '') + '</h5>' +
          '<p class="card-text text-muted mb-0">' + (item.price || '') + '</p>' +
        '</div>' +
      '</div>';
    row.appendChild(col);
  });
});
