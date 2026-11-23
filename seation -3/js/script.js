window.alert("the task of the seation 3");

const proudect = [
  {
    title: "ptoudect 1",
    price: "1000",
    sale: "20$",
    rate: 5
  },
  {
    title: "ptoudect 2",
    price: "1000",
    sale: "20$",
    rate: 5
  },
  {
    title: "ptoudect 2",
    price: "1000",
    sale: "20$",
    rate: 5
  },
  {
    title: "ptoudect 4",
    price: "1000",
    sale: "20$",
    rate: 5
  },
  {
    title: "ptoudect 5",
    price: "1000",
    sale: "20$",
    rate: 5
  },
  {
    title: "ptoudect 6",
    price: "1000",
    sale: "20$",
    rate: 5
  },
  {
    title: "ptoudect 7",
    price: "1000",
    sale: "20$",
    rate: 5
  },
  {
    title: "ptoudect 8",
    price: "1000",
    sale: "20$",
    rate: 5
  },
  {
    title: "ptoudect 9",
    price: "1000",
    sale: "20$",
    rate: 5
  },
  {
    title: "ptoudect 10",
    price: "1000",
    sale: "20$",
    rate: 5
  },
  {
    title: "ptoudect 10",
    price: "1000",
    sale: "20$",
    rate: 5
  },
  {
    title: "ptoudect 10",
    price: "1000",
    sale: "20$",
    rate: 5
  }
];

const ptoudectconatiner = document.querySelector(".ptoudect-conatiner");

for (let i = 0; i < proudect.length; i++) {
  let pr = proudect[i];
  ptoudectconatiner.innerHTML += `
    <div class="col-12 col-lg-3 g-3">
      <div class="card">
        <div class="imge">
          <img src="./css/OIP.webp">
        </div>
        <div class="card-body">
          <p>title: ${pr.title}</p>
          <p>price: ${pr.price}</p>
          <p>sale: ${pr.sale}</p>
          <p>rate: ${pr.rate}</p>
        </div>
      </div>
    </div>
  `;
}
