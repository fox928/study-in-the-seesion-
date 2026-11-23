
const products = [
  { id: 1, name: "هاتف سامسونج A52", price: 7500, category: "إلكترونيات", image: "https://placehold.co/400x300?text=Samsung+A52" },
  { id: 2, name: "لاب توب HP", price: 15000, category: "إلكترونيات", image: "https://placehold.co/400x300?text=HP+Laptop" },
  { id: 3, name: "سماعة JBL", price: 1200, category: "إلكترونيات", image: "https://placehold.co/400x300?text=JBL+Speaker" },
  { id: 4, name: "شاحن سريع", price: 250, category: "إكسسوارات", image: "https://placehold.co/400x300?text=Fast+Charger" },
  { id: 5, name: "كابل Type-C", price: 100, category: "إكسسوارات", image: "https://placehold.co/400x300?text=Type‑C+Cable" },
  { id: 6, name: "قميص رجالي", price: 400, category: "ملابس", image: "https://placehold.co/400x300?text=Shirt" },
  { id: 7, name: "بنطلون جينز", price: 550, category: "ملابس", image: "https://placehold.co/400x300?text=Jeans" },
  { id: 8, name: "جاكيت شتوي", price: 850, category: "ملابس", image: "https://placehold.co/400x300?text=Winter+Jacket" },
  { id: 9, name: "فستان نسائي", price: 950, category: "ملابس", image: "https://placehold.co/400x300?text=Women%27s+Dress" },
  { id: 10, name: "حذاء رياضي", price: 600, category: "أحذية", image: "https://placehold.co/400x300?text=Sneakers" },
  { id: 11, name: "ميكروويف سامسونج", price: 2300, category: "أجهزة منزلية", image: "https://placehold.co/400x300?text=Samsung+Microwave" },
  { id: 12, name: "ثلاجة شارب", price: 9500, category: "أجهزة منزلية", image: "https://placehold.co/400x300?text=Sharp+Fridge" },
  { id: 13, name: "غسالة إل جي", price: 8700, category: "أجهزة منزلية", image: "https://placehold.co/400x300?text=LG+Washer" },
  { id: 14, name: "مكواة بخار", price: 450, category: "أجهزة منزلية", image: "https://placehold.co/400x300?text=Steam+Iron" },
  { id: 15, name: "مكنسة كهربائية", price: 1100, category: "أجهزة منزلية", image: "https://placehold.co/400x300?text=Vacuum+Cleaner" },
  { id: 16, name: "كرسي مكتب", price: 950, category: "أثاث", image: "https://placehold.co/400x300?text=Office+Chair" },
  { id: 17, name: "مكتب خشب", price: 1500, category: "أثاث", image: "https://placehold.co/400x300?text=Wooden+Desk" },
  { id: 18, name: "كنبة 3 مقاعد", price: 4500, category: "أثاث", image: "https://placehold.co/400x300?text=3‑Seater+Sofa" },
  { id: 19, name: "سرير مفرد", price: 3200, category: "أثاث", image: "https://placehold.co/400x300?text=Single+Bed" },
  { id: 20, name: "مكتبة كتب", price: 800, category: "أثاث", image: "https://placehold.co/400x300?text=Bookshelf" },
  { id: 21, name: "ساعة يد ذكية", price: 2200, category: "إلكترونيات", image: "https://placehold.co/400x300?text=Smart+Watch" },
  { id: 22, name: "تابلت لينوفو", price: 4000, category: "إلكترونيات", image: "https://placehold.co/400x300?text=Lenovo+Tablet" },
  { id: 23, name: "كاميرا مراقبة", price: 1800, category: "أمن ومراقبة", image: "https://placehold.co/400x300?text=Security+Camera" },
  { id: 24, name: "جهاز تتبع GPS", price: 950, category: "أمن ومراقبة", image: "https://placehold.co/400x300?text=GPS+Tracker" },
  { id: 25, name: "جهاز رش عطر", price: 300, category: "منزل", image: "https://placehold.co/400x300?text=Air+Freshener" },
  { id: 26, name: "منظف أرضيات", price: 90, category: "منظفات", image: "https://placehold.co/400x300?text=Floor+Cleaner" },
  { id: 27, name: "صابون سائل", price: 60, category: "منظفات", image: "https://placehold.co/400x300?text=Liquid+Soap" },
  { id: 28, name: "شامبو شعر", price: 70, category: "عناية شخصية", image: "https://placehold.co/400x300?text=Shampoo" },
  { id: 29, name: "كريم مرطب", price: 110, category: "عناية شخصية", image: "https://placehold.co/400x300?text=Moisturizer" },
  { id: 30, name: "معجون أسنان", price: 35, category: "عناية شخصية", image: "https://placehold.co/400x300?text=Toothpaste" },
];

const productContainer = document.querySelector(".product-container");

products.forEach(product => {
  productContainer.innerHTML += `
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="card h-100">
        <div class="image">
          <img src="${product.image}" alt="${product.name}" class="card-img-top">
        </div>
        <div class="card-body">
          <p><strong>ID:</strong> ${product.id}</p>
          <p><strong>الاسم:</strong> ${product.name}</p>
          <p><strong>السعر:</strong> ${product.price} جنيه</p>
          <p><strong>الفئة:</strong> ${product.category}</p>
        </div>
      </div>
    </div>
  `;
});
