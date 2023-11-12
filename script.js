// let input = document.getElementById('message')
// let sub = document.getElementById('sumit')
// let p = document.getElementById('result')


// sub.addEventListener('click', (e)=>{
//     e.preventDefault();

//     let para = document.createElement('p')
//     para.innerHTML = input.value;

//     p.appendChild(para)


//     input.value = ""

//     para.addEventListener('dblclick',()=>{
//         p.removeChild(para)
//     })
//     para.addEventListener('click',()=>{
//         para.style.textDecoration= 'line-through'
//     })
// })
document.addEventListener("DOMContentLoaded", function () {
    const seconds = document.querySelector('.hand1');
    const minutes = document.querySelector('.hand2');
    const hours = document.querySelector('.hand3');
    const body = document.querySelector('body');

    function setClock() {
        const date = new Date();

        const curSec = (date.getSeconds() / 60) * 360;
const curMinute = ((date.getMinutes() + date.getSeconds() / 60) / 60) * 360;
const curHour = ((date.getHours() % 12 + date.getMinutes() / 60) / 12) * 360;


        setRotation(seconds, curSec);
        setRotation(minutes, curMinute);
        setRotation(hours, curHour);
    }

    body.style.backgroundColor = "skyblue";

    function setRotation(element, rotationDegrees) {
        element.style.transform = `rotate(${rotationDegrees}deg)`;
    }

    setClock();
    setInterval(setClock, 1000);
});
