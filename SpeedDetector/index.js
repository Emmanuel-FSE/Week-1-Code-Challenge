const speedX = document.getElementById("speed");
const speedParag = document.getElementById("speedP");
const speedBTN = document.getElementById("speedBtn");

speedBTN.addEventListener("click", function(){
    const speed = speedX.value;
    if(speed <= 70){
        speedParag.classList.add("btn", "btn-success");
        speedParag.textContent = "Ok";
    }
    else if(speed > 70){
        const speedDiff = Math.floor((speed - 70)/5);
        if(speedDiff <= 12){
            speedParag.classList.add("btn", "btn-warning");
            speedParag.textContent = `Points: ${speedDiff}`;
        } else if(speedDiff > 12){
            speedParag.classList.add("btn", "btn-danger");
            speedParag.textContent = "License suspended."; 
        }
        
    }
})