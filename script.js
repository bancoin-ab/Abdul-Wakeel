    let hr = document.querySelector('#hr');
    let mn = document.querySelector('#mn');
    let sc = document.querySelector('#sc');

    setInterval(() =>{

        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * 6;
        let ss = day.getSeconds() * 6;

        hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
    })

/*
let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');

function displayTime(){
 let date = new Date();
 let hh = date.getHours();
 let mm = date.getMinutes();
 let ss = date.getSeconds();

 let hRotation = 30*hh + mm/2;
 let mRotation = 6*mm;
 let sRotation = 6*ss;

 hr.style.transform = 'rotate(${hRotation}deg)';
 mn.style.transform = 'rotate(${mRotation}deg)';
 sc.style.transform = 'rotate(${sRotation}deg)';





}
setInterval(displayTime, 1000);
*/