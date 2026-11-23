// // JavaScript
// // window.alert("task 5");

// const productArray = [];

// const button = document.querySelector("#addProduct");

// button.onclick = () => {
//     const productName = document.querySelector("#productName");
//     const productPrice = document.querySelector("#productPrice");

//     const productObject = {
//         name: productName.value ,
//         price: productPrice.value,
//     }

//     productArray.push(productObject)
   
//      render(productArray)

// }
// function render(productArray){
// const jscontainer = document.querySelector(".proudectscontainer ")
//  jscontainer.innerHTML = "";
// for(let i = 0; i < productArray.length; i++){
//     console.log(productArray[i]) 
//     jscontainer.innerHTML +=`
//            <div class="col-lg-3 col-md-6 col-sm-12">
//                 <div class="card">
//                     <p>Name: ${products[i].name}</p>
//                     <p>Price: ${products[i].price}</p>
//                 </div>
//             </div>
    
//     `
 
// }

// }
// render()
const productArray = [];

const button = document.querySelector("#addProduct");

button.onclick = () => {
    const productName = document.querySelector("#productName");
    const productPrice = document.querySelector("#productPrice");

    const productObject = {
        name: productName.value || "يجب ادخال البيانات",
        price: productPrice.value || "يجب ادخال البيانات "
    };

    productArray.push(productObject);
    render(productArray);
};

function render(productArray) {
    const jscontainer = document.querySelector(".proudectscontainer");
    jscontainer.innerHTML = "";

    for (let i = 0; i < productArray.length; i++) {
        console.log(productArray[i]);

        jscontainer.innerHTML += `
            <div class="col-lg-3 col-md-6 col-sm-12">
                <div class="card">
                    <p>Name: ${productArray[i].name}</p>
                    <p>Price: ${productArray[i].price}</p>
                </div>
            </div>
        `;
    }
}


/* === SweetAlert helper === */
function showFixedWelcome() {
  if (window.Swal && Swal.fire) {
    Swal.fire({
      title: 'مرحبًا!',
      text: 'تم تفعيل SweetAlert2 بنجاح.',
      icon: 'info',
      confirmButtonText: 'حسناً'
    });
  } else {
    window.alert('تم تفعيل التنبيهات.');
  }
}

document.addEventListener('DOMContentLoaded', function(){
  // Optional: uncomment to auto-show on load
  // showFixedWelcome();
});
