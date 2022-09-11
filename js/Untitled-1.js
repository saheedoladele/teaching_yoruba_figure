import { myArray } from "./rec.js";

let totalRec = myArray.length
let parPage = 10
let currentPage = 1

const totalPage = Math.ceil(totalRec/parPage)

let recordArr = myArray.slice((((parPage * currentPage)- parPage)), (parPage*currentPage))

//function to play sound
function playAudio(url) {
    return new Audio(url).play();
  }

let containers = document.querySelector(".more")

//***Function that render the content of the page */
const pageContent = (arr) =>{
  
    return arr.map((item) =>{

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
        // containers.appendChild(out1)
      
        //play correspondinf sound when the button is cliked!
        out1.addEventListener("click", ()=>{
            playAudio(item.sound)
        })
           
        })
}

//pagination

pageContent(recordArr)


let pages = document.querySelector(".paging")
let paginationDiv = document.createElement("div")
paginationDiv.classList.add("pagination")


let next = document.createElement("span")
next.classList.add("next")
next.innerText = "Next"

let prev = document.createElement("span")
prev.classList.add("prev")
prev.innerText = "Prev"


let innerDiv = document.createElement("div")
innerDiv.classList.add("InnerItem")




for (let index = 1; index < totalPage+1; index++) {
    let items = document.createElement("span")
    items.classList.add("items")
    items.innerText = index

   
    items.addEventListener("click",()=>{
        currentPage = index 
        
        recordArr = myArray.slice((((parPage * currentPage)- parPage)), (parPage*currentPage))
        let newArr = recordArr;
        pageContent(newArr)
        console.log(recordArr);
    })
    innerDiv.appendChild(items)
}





paginationDiv.appendChild(prev)
paginationDiv.appendChild(innerDiv)
paginationDiv.appendChild(next)
pages.appendChild(paginationDiv)


