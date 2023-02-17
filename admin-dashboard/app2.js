
const list = document.querySelectorAll("ul li")
const sidebar = document.querySelector(".sidebar")
const topbar = document.querySelector(".topbar")
const main = document.querySelector(".main")
const menubutton = document.querySelector(".menubutton")
const closebtn = document.querySelector(".closebtn")

menubutton.addEventListener("click",()=>{
    console.log("hi");
    main.classList.toggle("active")
    topbar.classList.toggle("active")
    sidebar.classList.toggle("active")
})

closebtn.addEventListener("click",()=>{
    console.log("hi");
    main.classList.toggle("active")
    topbar.classList.toggle("active")
    sidebar.classList.toggle("active")
})

function addclass(){
    for(var i=0;i<list.length;i++){
        list[i].classList.remove("active")
    }
    this.classList.add("active")
}

list.forEach(element=>{
    element.addEventListener("click",addclass)
})

