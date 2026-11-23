// // window.alert("the seation 6")
// window.Swal.fire({
//   title: "Custom animation with Animate.css",
//   showClass: {
//     popup: `
//       animate__animated
//       animate__fadeInUp
//       animate__faster
//     `
//   },
//   hideClass: {
//     popup: `
//       animate__animated
//       animate__fadeOutDown
//       animate__faster
//     `
//   }
// });
// let mohamed = "mohamed -salam "
// console.log(mohamed.length)
// console.log(mohamed[1])
// console.log(mohamed.trim().length)
// console.log(mohamed.length)
// console.log(mohamed.trim())
// console.log(mohamed.slice(0 , 7))/////// without last endex
// // console.log(mohamed.slice(-6 , -1))
// console.log(mohamed.startsWith("M" , 2))
// console.log(mohamed.endsWith("M" , 2))
// console.log(mohamed.split("-"))
// console.log(mohamed.replace(mohamed , "fox"))
// // [console.log(mohamed.includes(""))]
// console.log(mohamed.indexOf("m"))//// start from stsrt 
// console.log(mohamed.lastIndexOf("m"))/////
// console.log(mohamed.toLocaleLowerCase())
// console.log(mohamed.toUpperCase())
// const mynames = [ "mohamed " , "fox" , "sultan" , "dillier" , "your grand-father"]
// console.log (mynames.slice(0 ,3))
// mynames.splice(0 , 2  , "salam " , "maraiem " )
// console.log(mynames.reverse())
//  let mynumber = [1000 , 2000 , 30000 ,400 ,5 , -9 , -10 ,"my tape is " ]
//  console.log(mynumber.sort())//// left degit 
// console.log(+"100")
// console.log(parseFloat("1000.555"))
// console.log(parseInt("1000.55"))
//  let num = 1000.522
//  console.log(num.toLocaleString())
//  console.log(num.toFixed(2))/////////// عدد الارقام  العشريه  
//  console.log(Math.ceil(num))
//  console.log(Math.floor(num))
//  console.log(Math.round(num))
//  console.log(Math.pow(4, 4))
//  console.log(Math.random())
//  console.log( Math.sqrt(16))
//  console.log(Math.abs(-100))
//  console.log(Math.min(100, 200 ))
// SweetAlert2 عند فتح الصفحة
window.alert("66666")
Swal.fire({
  title: 'Task 6  in the session ',
  showConfirmButton: false,
  timer: 2000,
  showClass: {
    popup: 'animate__animated animate__fadeInUp animate__faster'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutDown animate__faster'
  }
});

const tasks = [
  {
    title: "Lorem, ipsum dolor.",
    decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus!",
    id: 1
  },
  {
    title: "Lorem, ipsum dolor.",
    decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus!",
    id: 2
  },
  {
    title: "Lorem, ipsum dolor.",
    decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus!",
    id: 3
  },
  {
    title: "Lorem, ipsum dolor.",
    decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus!",
    id: 4
  },
  {
    title: "Lorem, ipsum dolor.",
    decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus!",
    id: 5
  },
];

const taskcontainer = document.querySelector(".task-container");

function render() {
  taskcontainer.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    taskcontainer.innerHTML += `
      <div class="col-lg-3 col-md-6 col-sm-12 mt-2">
        <div class="card p-3 animate__animated animate__fadeInUp">
          <p>${tasks[i].id}</p>
          <p class="m-0 border-primary border rounded p-2">${tasks[i].title}</p>
          <p class="m-0 mt-2 border-primary border rounded p-2">${tasks[i].decription}</p>
          <button class="btn btn-outline-danger mt-2" onclick="delettask(${i})">
            <i class="fa-solid fa-trash"></i> delet
          </button>
        </div>
      </div>
    `;
  }
}

render();

function delettask(index) {
  tasks.splice(index, 1);
  render();
}
