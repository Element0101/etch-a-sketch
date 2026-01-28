let numberOfDivs = 16 * 16;

const container = document.querySelector(".container");
const totalHeight = container.offsetHeight;
const totalWidth = container.offsetWidth;
const divHeight = totalHeight / 16 - 2;
const divWidth = totalWidth / 16 - 2;
for (let i = 0; i < numberOfDivs; i++) {
    const div = document.createElement("div");
    
    div.style.border = "1px, black, solid";
    div.style.height = divHeight + "px";
    div.style.width = divWidth + "px";
    div.style.margin = "0px";
    div.style.padding = "0px";
    
    container.appendChild(div);

}