
const list = document.querySelectorAll("ul li")
const sidebar = document.querySelector(".sidebar")
const topbar = document.querySelector(".topbar")
const main = document.querySelector(".main")
const menubutton = document.querySelector(".menubutton")
const closebtn = document.querySelector(".closebtn")
// const barChart = document.getElementById("barChart")
// import Chart from 'chart.js/auto';

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




const ctx = document.getElementById('barChart');
const ctx2 = document.getElementById("radar")
const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
new Chart(ctx, {
  type: 'line',
  data: {
    labels: data.map(row => row.year),
    datasets: [{
      label: 'Acquisitions by year',
      data: data.map(row => row.count),
      borderWidth: 2,
      borderColor: 'rgb(1, 1, 1)',

    }]
  },
  options: {
    responsive:true,
    layout: {
        padding: 10
    },
    plugins: {
      
        tooltip: {
          enabled: true
        }
      },
  
  
    scales: {
      y: {
        // beginAtZero: true,
        min: 0,
        max: 40

      }
    },
    animations: {
        tension: {
          duration: 4000,
          easing: 'linear',
          from: 2,
          to: 0,
          loop: true
        }
      },
  }
});



const data2 = {
 

  };

  const config = {

  };

  new Chart(ctx2,{
    type: 'radar',
    data:{
        labels: [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
          ],
          datasets: [{
            label: 'label 1',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          }, {
            label: 'label 2',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
          }]
    },
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      },
      responsive:true,
      layout: {
          padding: 10
      },
      plugins: {
        
          tooltip: {
            enabled: true
          }
        },
    },
  })