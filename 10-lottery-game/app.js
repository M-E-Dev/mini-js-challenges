const startBtn = document.getElementById("btn")
const result = document.getElementById("res")


const pickNums = () => {
    const list = [0,0,0,0,0,0];
    for (let i = 1; i < 50; i++) {
        list.push(i)
        console.log(list);
    };
    for (let i = 0; i < 6; i++) {
        list[i] = list[Math.floor(Math.random() * 49 + 6)]
        console.log(list);
    }
    for (let i = 6; i < 55; i++) {
        list.pop()
        console.log(list);
    }
    list.sort((a, b) => a - b)
    console.log(list);
    result.innerHTML = list;
};

startBtn.addEventListener("click", pickNums);

// let arr = []
// for (let i = 0; i < 100; i++) {
//     arr.push(Math.floor(Math.random() * 49 + 6))
// }
// arr.sort((a, b) => a - b)
// console.log(arr);
