//select the container that will be modified
const container = document.getElementById("container");

//a function to make rows using css grid
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows); //sets a property name to rows
  container.style.setProperty('--grid-cols', cols); //same to columns
  for (c = 0; c < (rows * cols); c++) { //loops through for requested row,column size, and creates divs and numbers these divs
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item"; //also defines them as a class grid-items for easier css manipulation
  };
};

//function to remove rows
function removeRows(){
  const cleanIt = document.getElementById("container");
  while (cleanIt.firstChild) {
    cleanIt.removeChild(cleanIt.lastChild);
  }
}


makeRows(16, 16); //orders a 16x16 matrix to be made.

//event listener for hover
const cellStuff = document.addEventListener("mouseover", function(event){
  console.log("you are hovering over a cell");
  event.target.classList.replace("grid-item", "colored-item");
});

//board reset function
function resetBoard(){
  console.log("you've reset your board!");
  var newBoardSize = prompt("insert grid size");

  if (newBoardSize !=null){
    removeRows();
    makeRows(newBoardSize,newBoardSize);
  }
};

