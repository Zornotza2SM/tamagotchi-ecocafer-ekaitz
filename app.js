
let hunger = 5;
let happiness = 5;
let energy = 5;
let isDead = false;


function updateView() {

    if (hunger >= 10 || happiness <= 0 || energy <= 0) {
        isDead = true;
    }

    const faceElement = document.querySelector(".pet-face");
    const gameOverElement = document.getElementById("game-over");

    if (isDead) {
        faceElement.innerText = "💀";
        gameOverElement.style.display = "block"; 
        
        document.getElementById("feed-btn").disabled = true;
        document.getElementById("play-btn").disabled = true;
        document.getElementById("sleep-btn").disabled = true;
    } else {
        faceElement.innerText = "😺";
        gameOverElement.style.display = "none";
    }
    document.getElementById("hunger").innerText = hunger;
    document.getElementById("happiness").innerText = happiness;
    document.getElementById("energy").innerText = energy;
}
document.getElementById("feed-btn").onclick = () => {
    if (isDead) return; 

    hunger--; 
    if (hunger < 0) hunger = 0; 
    
    updateView();
};
document.getElementById("play-btn").onclick = () => {
    if (isDead) return;

    happiness++; 
    energy--;    
    
    if (happiness > 10) happiness = 10;
    
    updateView();
};
document.getElementById("sleep-btn").onclick = () => {
    if (isDead) return;

    energy++; 
    hunger++; 
    
    if (energy > 10) energy = 10;

    updateView();
};
function startTimer() {
    const timer = setInterval(() => {
        if (isDead) {
            clearInterval(timer); 
            return;
        }      
        hunger++;      
        happiness--;   
        energy--;      


        if (hunger > 10) hunger = 10;
        if (happiness < 0) happiness = 0;
        if (energy < 0) energy = 0;

        updateView();

    }, 2000); 
}
updateView(); 
startTimer();