let paragraph;
let image;


let ph = document.getElementById("p-button")
let img = document.getElementById("img-button")
let ph_display = document.getElementById('p-div')
let img_display = document.getElementById('img-div')

ph.addEventListener("click", addPh)
img.addEventListener("click", Addimage)

function addPh(){
    ph_display.style.visibility="visible"
    img_display.style.visibility="hidden"
    
    const paragraph = document.createElement("p");
    
    paragraph.innerText = "All Star Code"
    paragraph.style.backgroundColor = "#FFFFF"
    
    ph_display.appendChild(paragraph);
}

function Addimage(){
    ph_display.style.visibility="hidden"
    img_display.style.visibility="visible"
    
    
    const image = document.createElement("img")
    
    image.src = "yoshi.png"
    image.style.width = "50px"
    
    img_display.appendChild(image);
}