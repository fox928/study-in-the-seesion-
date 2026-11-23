
const open = document.querySelector(".nav-toggel");
if (open) {
  open.onclick = () => {
    document.querySelector("ul").classList.toggle("open");
  };
}


const lists = document.querySelectorAll("nav ul li");
lists.forEach((li) => {
  li.addEventListener("click", () => {
    lists.forEach((item) => item.classList.remove("active-link"));
    li.classList.add("active-link");
  });
});

const action = document.querySelector("button");
if (action) {
  action.onclick = () => {
    action.classList.toggle("btn-dark");
  };
}
