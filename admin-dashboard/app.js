
const lists = document.querySelectorAll("ul li")
const menubtn = document.querySelector(".menubtn")
const main = document.querySelector(".main")
const sidebar = document.querySelector(".sidebar")


menubtn.addEventListener("click",()=>{
    main.classList.toggle("active");
    sidebar.classList.toggle("active")

})

function addActive() {
    lists.forEach((item)=>{
        item.classList.remove("active")
        this.classList.add("active")
        console.log("hi");
    })
}

lists.forEach((element)=>{
    element.addEventListener("click",addActive)
})