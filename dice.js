const max=6;
const min=1;
let RandomNum;
const dice_roll=document.getElementById("dice");

let roll=document.getElementById("roll");

dice_roll.onclick = function(){
    RandomNum=Math.floor(Math.random()*max) + min;
    roll.textContent=RandomNum;
}