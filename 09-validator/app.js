const text = document.getElementById("text");
const checkPoint = document.getElementById("check");
const result = document.getElementById("result");

const openers = ["{", "[", "("];
const closers = ["}", "]", ")"];
const match = {
  "}": "{",
  "]": "[",
  ")": "("
};

function myFunction(arg) {
  console.log(arg);
  var lastOpener = [];

  for (c in arg) {
    if (openers.includes(arg[c])) {
      lastOpener.push(arg[c]);
    }
    if (closers.includes(arg[c])) {
      const last = lastOpener.pop();
      if (last !== match[arg[c]]) {
        return false;
      }
    }
  }
  return lastOpener.length == 0; // Should be fine here :)
}

checkPoint.addEventListener("click",()=>{
    let arr = text.value.split("");
    if(myFunction(arr)){
        result.style.color = "green";
        result.innerHTML = "VALID"
    } else {
        result.style.color = "red";
        result.innerHTML = "INVALID"
    }
})
