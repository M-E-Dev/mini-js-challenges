const inpArea = document.querySelector("#inp");
const checkArea = document.querySelector("#check");
inpArea.addEventListener("keyup", () => {
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(inpArea.value.match(reg)){
        checkArea.style.color = "green"
        checkArea.innerHTML = "VALID";
    } else {
        checkArea.style.color = "red"
        checkArea.innerHTML = "INVALID";
    }
} )
