let numberOfDivs = 64 * 64;
addGrid(numberOfDivs);

function addGrid (numberOfSquares)  {
    const container = document.querySelector(".container");
    const totalHeight = container.offsetHeight;
    const totalWidth = container.offsetWidth;
    const divHeight = totalHeight / (Math.sqrt(numberOfSquares));
    const divWidth = totalWidth / (Math.sqrt(numberOfSquares));
    for (let i = 0; i < numberOfSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.style.height = divHeight + "px";
        div.style.width = divWidth + "px";
        div.style.margin = "0px";
        div.style.padding = "0px";
        
        container.appendChild(div);
    }
    const divs = document.querySelectorAll(".grid")

    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", (e) => {
            divs[i].style.backgroundColor = "blue";
        });
    } }

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let squaresNumber = prompt("Add number of squares per side (Max input 100!))");
    if (squaresNumber <= 100) {
        squaresNumber = squaresNumber ** 2;
        const divs = document.querySelectorAll(".grid");
        divs.forEach(element => element.remove());
        addGrid(squaresNumber);
    }else {
        alert("Max input not bigger than 100!");
    }
})