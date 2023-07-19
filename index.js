let time = document.querySelector(".time");
let startBtn = document.querySelector("#startbtn");
let pauseBtn = document.querySelector("#pausebtn");
let resetBtn = document.querySelector("#resetbtn");

let currentTime = 0;
let startTime = 0;
let elapsedTime = 0;
let pause = true;
let internalId ;
let hours = 0;
let min = 0;
let sec = 0;


startBtn.addEventListener("click" , ()=>{
    if(pause)
    {
        pause = false;
        startTime = Date.now() - elapsedTime;
        internalId = setInterval(updateTime,75)
    }
});
pauseBtn.addEventListener("click" , ()=>{

    if(!pause)
    {
        pause = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(internalId);
    }
});
resetBtn.addEventListener("click" , ()=>{
    pause = true ;
    clearInterval(internalId)
    startTime = 0;
    elapsedTime = 0;
    hours = 0;
    currentTime = 0;
    min = 0;
    sec = 0;
    time.textContent = "00:00:00"
});

function updateTime()
{
   elapsedTime = Date.now() - startTime;

   sec = Math.floor((elapsedTime / 1000) % 60);
   hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
   min = Math.floor((elapsedTime / (1000 * 60)) % 60);

   hours = addZ(hours)
   min = addZ(min)
   sec = addZ(sec)

   time.textContent = `${hours}:${min}:${sec}`


   function addZ(content)
   {
    return ("0" + content).length > 2 ? content : "0" + content ;
   }
}