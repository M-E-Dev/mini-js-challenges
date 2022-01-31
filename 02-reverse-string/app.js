const strHtml = document.querySelector("#string");
const revHtml = document.querySelector("#reversed");

strHtml.addEventListener("keyup", function() {
    let str = strHtml.value;
    let rev = str.split("").reverse().join("");
    revHtml.innerHTML = rev;
})
