const lists = document.querySelectorAll("li")
const con = document.querySelector(".container")
const data = [
   {
    img: "./web2.jpg",atr:"filter-item",val:"web"
   },
   {
    img: "./web3.jpg",atr:"filter-item",val:"web"
   },
   {
    img: "./js2.jpg",atr:"filter-item",val:"js"
   },
   {
    img: "./js3.jpg",atr:"filter-item",val:"js"
   },
   {
    img: "./py2.jpg",atr:"filter-item",val:"py"
   },
   {
    img: "./py3.jpg",atr:"filter-item",val:"py"
   },
]

class Images{
    constructor(src){
        this.image = new Image();
        this.image.src = src
    }
}

data.forEach(d=>{
    const box = document.createElement("div")
    box.classList.add("box")
    box.setAttribute(d.atr,d.val)
    const img = document.createElement("img")
    img.src=d.img
    box.appendChild(img)
    con.appendChild(box)
    
})
const boxex = document.querySelectorAll(".box")

lists.forEach(li=>{
    li.addEventListener("click",function(){
        lists.forEach(l=>{
            l.classList.remove("active")
        })
        this.classList.add("active")
        let filterData = this.getAttribute("data-item")
        console.log(filterData);
        boxex.forEach(box=>{
            if(box.getAttribute("filter-item")==filterData || filterData== "all"){
                box.classList.remove("hide")
            }
            else{
            box.classList.add("hide")
            }
        })  
      
    })
})

