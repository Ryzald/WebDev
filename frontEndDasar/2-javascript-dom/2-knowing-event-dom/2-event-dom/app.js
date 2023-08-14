const btn = document.querySelector("#clickme");

btn.onclick = function () {
  console.log("you clicked me");
};

btn.onmouseover = function () {
  console.log("dont touch me");
};
