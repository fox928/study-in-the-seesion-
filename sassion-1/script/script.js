


const button = document.querySelector(".btn");

function action() {
  const title = document.querySelector(".title-js");
  const titleDescription = document.querySelector(".js-titledscription");

  const showText = document.querySelector(".show");
  const showText2 = document.querySelector(".show2");


  showText.textContent = title.value || " يجب ادخال الاسم ";
  showText2.textContent = titleDescription.value ||" يجب ادخال الهوية ";
}
button.onclick = action