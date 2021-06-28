const container = document.getElementById("container")


//Create sketchpad
function sketchPad(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid";
  };
};

//Personalize sketchpad
function personalize() {
  let rows = prompt("Please choose a number beetween 16 and 64 for personalized sketchpad");
  let cols = rows;
  if (rows >= 16 && rows <= 64) {
    sketchPad(rows, cols);
  }
  else if (rows === null) {
    sketchPad(16, 16);
  }
  else {
    rows = alert("Make sure your value is between 16-64!");
    personalize()
  }
}

//Draw 
const gridPad = document.querySelector("div");
gridPad.addEventListener("mouseover", function (chanceColor) {
  chanceColor.target.classList.replace("grid", "draw");
});

//Button reload
const clearGrid = document.getElementById("reload");
clearGrid.addEventListener("click", runEvent);
function runEvent(e) {
  e.preventDefault();
  window.location.reload();
}


//Button color
const colorbox = document.getElementById("colorbox");
colorbox.addEventListener("click", function color(e) {
  colorbox.style.backgroundColor = "rgb("+ e.offsetX +",150, 200)";
  var elements = document.getElementsByClassName("draw");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = colorbox.style.backgroundColor
  }
});

personalize();