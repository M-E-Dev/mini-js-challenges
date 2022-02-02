const sayıHtml = document.querySelector("#sayı");
// sayıHtml.addEventListener("keyup", ()=>{sayı = sayıHtml.value})
let degerHtml = document.querySelector("#deger");
const funcBtn = document.querySelector("#start")



funcBtn.addEventListener("click", function() {
    sayı = sayıHtml.value;
    sayıHtml.value = "";
    let num1 = 0;
    let num2 = 1;
    let deger = 0;
    console.log(sayı);
    for (let i = 0; i <= sayı; i++) {
        deger = num1 + num2;
        num1 = num2;
        num2 = deger;
    }
    console.log(deger);
    degerHtml.innerHTML = `${sayı}. sıradaki fibonacci değeri = ${deger}`;
    return deger;
});