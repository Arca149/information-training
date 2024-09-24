document.querySelector("h1").textContent = "こんにちは！"
document.querySelector("title").textContent = "Hello world"

let count = 0;
function increaseCount(){
    if (count < 5) {
        count++;
    }
    else{
        count = -5;
    }
    document.getElementById("counter").innerText = count;
}
function decreaseCount(){
    if (count > -5) {
        count--;
    }
    else{
        count = 5;
    }
    document.getElementById("counter").innerText = count;
}
function resetCount(){
    count = 0;
    document.getElementById("counter").innerText = count;
}