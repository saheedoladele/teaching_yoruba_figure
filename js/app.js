import { myArray } from "./rec.js";

let totalRec = myArray.length
let pageSize = 10
let currentPage = 1
let totalPage = Math.ceil(totalRec/pageSize)


//function to play sound
function playAudio(url) {
    return new Audio(url).play();
  }

let containers = document.querySelector(".more")
let prevBtn = document.querySelector("#prevButton")
let nextBtn = document.querySelector("#nextButton")


function renderContent(page = 1){

    if(page == 1){
        prevBtn.style.visibility = 'hidden'
    }else{
        prevBtn.style.visibility = 'visible'
    }

    if(page == totalPage){
        nextBtn.style.visibility = 'hidden'
    }else{
        nextBtn.style.visibility = 'visible'
    }

    let maincontent = ""

    myArray.filter((row, index)=>{

        let start = (currentPage - 1) * pageSize
        let end = currentPage * pageSize

        if(index >= start && index < end) return true 
        
    }).forEach(item =>{
        // modify here
        // maincontent +=`<div class='numbers'>`
        // maincontent +=`<p class="figure">${item.figure}</p>`
        // maincontent +=`<p><span class="english">${item.eng}</span><span class="yoruba"> ${item.yor}</span></p>`  
        // maincontent +="</div>"
        // let doc = new DOMParser().parseFromString(maincontent, "text/html");
      
        // console.log(doc);

        let out1 = document.createElement("div");
        out1.classList.add("numbers")
        
        let p1 = document.createElement("p");
        p1.classList.add("figure")
        p1.innerText = item.figure
        
        let p2 = document.createElement("p");
        
        let span1 = document.createElement("span")
        span1.classList.add("english")
        span1.innerText = item.eng + " | "
        
        let span2 = document.createElement("span")
        span2.classList.add("yoruba")
        span2.innerText = item.yor
        
        p2.appendChild(span1)
        p2.appendChild(span2)
        
        out1.appendChild(p1)
        out1.appendChild(p2)
        
        // containers.innerHTML = ""
        containers.appendChild(out1)
       
        out1.addEventListener("click", ()=>{
            playAudio(item.sound)
        })
        
    })
    // containers.innerHTML = maincontent
    // containers.appendChild(out1)
  
}


renderContent(currentPage)

function previousButton(){
   
   
    containers.innerHTML = ""
    if(currentPage > 1){
        currentPage--
        renderContent(currentPage)
    }
        
}

function nextButton(){
    
    containers.innerHTML = ""
    if((currentPage * pageSize) < totalRec){
        currentPage++
        renderContent(currentPage)
    }
}

prevBtn.addEventListener('click', previousButton, false)
nextBtn.addEventListener('click', nextButton, false)













