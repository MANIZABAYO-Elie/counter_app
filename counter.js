const decrease_btn = document.getElementById('decrease_btn')
const increase_btn = document.getElementById('increase_btn')
const reset_btn = document.getElementById('reset_btn')
const display = document.getElementById('display')

let count =0
decrease_btn.onclick = function(){
    count--;
    display.textContent = count;

}

increase_btn.onclick = function(){
    count++;
    display.textContent = count

}
reset_btn.onclick = function(){
    count= 0
    display.textContent = count;

}



