let inp = document.getElementById("input");
let para = document.getElementById("para");
inp.addEventListener("keydown", (e) => {
  para.textContent = inp.value;
});
