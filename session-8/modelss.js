// const models = [
//   { id: 1, name: "fox", title: "204 30 07 05 IMG 0082", price: 4846, description: "منتج رقم 1 - صورة عرض مميزة بعنوان '2025 04 30 07 05 IMG 0082'.", src: "img/2025_04_30_07_05_IMG_0082.JPG" },
//   { id: 2, name: "fox-", title:" 05 02 15 01 IMG 0561", price: 1369, description: "منتج رقم 2 - صورة عرض مميزة بعنوان '2025 05 02 15 01 IMG 0561'.", src: "img/2025_05_02_15_01_IMG_0561.JPG" },
//   { id: 3, name: "fox-", title:" 05 03 13 51 IMG 0576", price: 1513, description: "منتج رقم 3 - صورة عرض مميزة بعنوان '2025 05 03 13 51 IMG 0576'.", src: "img/2025_05_03_13_51_IMG_0576.JPG" },
//   { id: 4, name: "fox", title:"205 03 13 51 IMG 0578", price: 1372, description: "منتج رقم 4 - صورة عرض مميزة بعنوان '2025 05 03 13 51 IMG 0578'.", src: "img/2025_05_03_13_51_IMG_0578.JPG" },
//   { id: 5, name: "fox", title:"208 10 00 50 IMG 3676", price: 1662, description: "منتج رقم 5 - صورة عرض مميزة بعنوان '2025 08 10 00 50 IMG 3676'.", src: "img/2025_08_10_00_50_IMG_3676.JPG" },
//   { id: 6, name: "fox", title: "208 10 00 50 IMG 3680", price: 3743, description: "منتج رقم 6 - صورة عرض مميزة بعنوان '2025 08 10 00 50 IMG 3680'.", src: "img/2025_08_10_00_50_IMG_3680.JPG" },
//   { id: 7, name: "fox", title: "208 10 00 50 IMG 3681", price: 4706, description: "منتج رقم 7 - صورة عرض مميزة بعنوان '2025 08 10 00 50 IMG 3681'.", src: "img/2025_08_10_00_50_IMG_3681.JPG" },
//   { id: 8, name: "fox", title: "208 10 00 50 IMG 3682", price: 4669, description: "منتج رقم 8 - صورة عرض مميزة بعنوان '2025 08 10 00 50 IMG 3682'.", src: "img/2025_08_10_00_50_IMG_3682.JPG" },
//   { id: 9, name: "fox", title: "208 12 18 41 IMG 3785", price: 1735, description: "منتج رقم 9 - صورة عرض مميزة بعنوان '2025 08 12 18 41 IMG 3785'.", src: "img/2025_08_12_18_41_IMG_3785.JPG" },
//   { id: 10, name: "fox", title: "2025 08 12 18 41 IMG 3786", price: 1474, description: "منتج رقم 10 - صورة عرض مميزة بعنوان '2025 08 12 18 41 IMG 3786'.", src: "img/2025_08_12_18_41_IMG_3786.JPG" },
//   { id: 11, name: "fox", title: "2025 08 12 18 41 IMG 3787", price: 3340, description: "منتج رقم 11 - صورة عرض مميزة بعنوان '2025 08 12 18 41 IMG 3787'.", src: "img/2025_08_12_18_41_IMG_3787.JPG" },
//   { id: 12, name: "fox", title: "2025 08 12 18 41 IMG 3788", price: 4743, description: "منتج رقم 12 - صورة عرض مميزة بعنوان '2025 08 12 18 41 IMG 3788'.", src: "img/2025_08_12_18_41_IMG_3788.JPG" },
//   { id: 13, name: "fox", title: "2025 08 12 18 41 IMG 3790", price: 4791, description: "منتج رقم 13 - صورة عرض مميزة بعنوان '2025 08 12 18 41 IMG 3790'.", src: "img/2025_08_12_18_41_IMG_3790.JPG" },
//   { id: 14, name: "fox", title: "2025 08 12 18 41 IMG 3791", price: 3000, description: "منتج رقم 14 - صورة عرض مميزة بعنوان '2025 08 12 18 41 IMG 3791'.", src: "img/2025_08_12_18_41_IMG_3791.JPG" },
//   { id: 15, name: "fox", title: "2025 08 12 18 42 IMG 3793", price: 4831, description: "منتج رقم 15 - صورة عرض مميزة بعنوان '2025 08 12 18 42 IMG 3793'.", src: "img/2025_08_12_18_42_IMG_3793.JPG" },
//   { id: 16, name: "fox", title: "2025 08 12 18 42 IMG 3794", price: 4941, description: "منتج رقم 16 - صورة عرض مميزة بعنوان '2025 08 12 18 42 IMG 3794'.", src: "img/2025_08_12_18_42_IMG_3794.JPG" },
//   { id: 17, name: "fox ", title: "2025 08 12 18 42 IMG 3795 - Copy", price: 3245, description: "منتج رقم 17 - صورة عرض مميزة بعنوان '2025 08 12 18 42 IMG 3795 - Copy'.", src: "img/2025_08_12_18_42_IMG_3795 - Copy.JPG" },
//   { id: 18, name: "fox", title: "2025 08 12 18 42 IMG 3796 - Copy", price: 1326, description: "منتج رقم 18 - صورة عرض مميزة بعنوان '2025 08 12 18 42 IMG 3796 - Copy'.", src: "img/2025_08_12_18_42_IMG_3796 - Copy.JPG" },
//   { id: 19, name: "fox ", title: "2025 08 12 18 42 IMG 3797 - Copy", price: 2360, description: "منتج رقم 19 - صورة عرض مميزة بعنوان '2025 08 12 18 42 IMG 3797 - Copy'.", src: "img/2025_08_12_18_42_IMG_3797 - Copy.JPG" },
//   { id: 20, name: "fox", title: "2025 08 12 18 42 IMG 3799", price: 3476, description: "منتج رقم 20 - صورة عرض مميزة بعنوان '2025 08 12 18 42 IMG 3799'.", src: "img/2025_08_12_18_42_IMG_3799.JPG" },
//   { id: 21, name: "fox", title: "2025 08 12 18 42 IMG 3800", price: 2279, description: "منتج رقم 21 - صورة عرض مميزة بعنوان '2025 08 12 18 42 IMG 3800'.", src: "img/2025_08_12_18_42_IMG_3800.JPG" },
//   { id: 22, name: "fox", title: "2025 08 12 18 43 IMG 3803", price: 3781, description: "منتج رقم 22 - صورة عرض مميزة بعنوان '2025 08 12 18 43 IMG 3803'.", src: "img/2025_08_12_18_43_IMG_3803.JPG" },
// ];
const models = [
  { id: 1,  name: "fox", title: "0082", price: 20,  description: "موديل 0082 بتصميم أنيق وجذاب.", src: "img/2025_04_30_07_05_IMG_0082.JPG" },
  { id: 2,  name: "fox", title: "0561", price: 24,  description: "موديل 0561 بتصميم أنيق وجذاب.", src: "img/2025_05_02_15_01_IMG_0561.JPG" },
  { id: 3,  name: "fox", title: "0576", price: 28,  description: "موديل 0576 بتصميم أنيق وجذاب.", src: "img/2025_05_03_13_51_IMG_0576.JPG" },
  { id: 4,  name: "fox", title: "0578", price: 31,  description: "موديل 0578 بتصميم أنيق وجذاب.", src: "img/2025_05_03_13_51_IMG_0578.JPG" },
  { id: 5,  name: "fox", title: "3676", price: 35,  description: "موديل 3676 بتصميم أنيق وجذاب.", src: "img/2025_08_10_00_50_IMG_3676.JPG" },
  { id: 6,  name: "fox", title: "3680", price: 39,  description: "موديل 3680 بتصميم أنيق وجذاب.", src: "img/2025_08_10_00_50_IMG_3680.JPG" },
  { id: 7,  name: "fox", title: "3681", price: 43,  description: "موديل 3681 بتصميم أنيق وجذاب.", src: "img/2025_08_10_00_50_IMG_3681.JPG" },
  { id: 8,  name: "fox", title: "3682", price: 47,  description: "موديل 3682 بتصميم أنيق وجذاب.", src: "img/2025_08_10_00_50_IMG_3682.JPG" },
  { id: 9,  name: "fox", title: "3785", price: 51,  description: "موديل 3785 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_41_IMG_3785.JPG" },
  { id: 10, name: "fox", title: "3786", price: 54,  description: "موديل 3786 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_41_IMG_3786.JPG" },
  { id: 11, name: "fox", title: "3787", price: 58,  description: "موديل 3787 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_41_IMG_3787.JPG" },
  { id: 12, name: "fox", title: "3788", price: 62,  description: "موديل 3788 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_41_IMG_3788.JPG" },
  { id: 13, name: "fox", title: "3790", price: 66,  description: "موديل 3790 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_41_IMG_3790.JPG" },
  { id: 14, name: "fox", title: "3791", price: 70,  description: "موديل 3791 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_41_IMG_3791.JPG" },
  { id: 15, name: "fox", title: "3793", price: 74,  description: "موديل 3793 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_42_IMG_3793.JPG" },
  { id: 16, name: "fox", title: "3794", price: 78,  description: "موديل 3794 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_42_IMG_3794.JPG" },
  { id: 17, name: "fox", title: "3795", price: 81,  description: "موديل 3795 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_42_IMG_3795 - Copy.JPG" },
  { id: 18, name: "fox", title: "3796", price: 85,  description: "موديل 3796 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_42_IMG_3796 - Copy.JPG" },
  { id: 19, name: "fox", title: "3797", price: 89,  description: "موديل 3797 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_42_IMG_3797 - Copy.JPG" },
  { id: 20, name: "fox", title: "3799", price: 92,  description: "موديل 3799 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_42_IMG_3799.JPG" },
  { id: 21, name: "fox", title: "3800", price: 96,  description: "موديل 3800 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_42_IMG_3800.JPG" },
  { id: 22, name: "fox", title: "3803", price: 100, description: "موديل 3803 بتصميم أنيق وجذاب.", src: "img/2025_08_12_18_43_IMG_3803.JPG" }
];


const containerjs = document.querySelector(".pro-con");
function rendermodels(fox) {
  containerjs.innerHTML = ""
  fox.forEach((model) => {
    containerjs.innerHTML += `
  <div class="col-sm-12 col-md-6 col-lg-3">
    <div class="card">
      <div class="card-body">
         <p class="price-tag">Price: ${model.price}</p>
         <div class="image">
           <img src="${model.src}" alt="${model.title}" class="w-100 h-100 object-fit-contain">
         </div> 
         <h2> name of owner: ${model.name} </h2>
         <h2>Title: ${model.title}</h2>
         <h3>ID: ${model.id}</h3>
         <p>${model.description}</p>
         <button class="btn btn-dark w-100">Add to Cart</button>
      </div>
    </div>
  </div>
`;
  });
}



const rang = document.querySelector("#rang") 
const raninput = document.querySelector(".rangprice")

rang.addEventListener( "input" ,()=>{
    raninput.textContent = rang.value
  const maxprice = parseInt(rang.value) 

  const filters = models.filter((models)=>{
    return  models.price >= maxprice

  }) 
    
  rendermodels(filters)
 })
 rendermodels(models);