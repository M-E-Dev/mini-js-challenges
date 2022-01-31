// // let array = [1, 3, -1, -3, 5, 3, 6, 7];
// // let k = 3;

// const slide = (array, k) => {
//   let repeat = array.length - k + 1;
//   let newArr = [];
//   for (let i = 0; i < repeat; i++) {
//     let troops = [];
//     for (let x = i; x < i + k; x++) {
//       troops.push(array[x]);
//     }
//     let toAdd = troops.sort((a, b) => a - b)
//     newArr.push(toAdd[k-1]);
//   }
//   console.log(newArr);
// };

// slide([1, 3, -1, -3, 5, 3, 6, 7], 3);

// // let arry = [1, 3, -1];
// // console.log(arry.sort((a, b) => a - b));

let count = 0;
let heap = [];
let n = 0;
var maxSlidingWindow = function(nums, k) {
    let pos = k;
    n = k;
    let result = [];
    let len = nums.length;

    // Determine whether the array and the maximum window tree are empty
    if(nums.length === 0 || k === 0) return result;

    // Building top pile
    let j = 0
    for(;j < k; j++){
        insert(nums[j]);
    }
    result.push(heap[1]); 

    // move windows
    while(len - pos > 0){
        if(nums[k] > heap[1]){
            result.push(nums[k]);
            insert(nums[k]);
            nums.shift();
            pos++; 
        }else{
            if(nums.shift() === heap[1]){
                removeMax(); 
            }
            insert(nums[k-1]);
            result.push(heap[1]);
            pos++;
        }
    }
    return result;
};  



// insert data
const insert = (data) =>{
    //Judgment stack
    // if(count >= n) return; // >=

    // Insert to the end of the array
    count++
    heap[count] = data;

    //Bottom-up heaping
    let i = count;
    while(i / 2 > 0 && heap[i] > heap[parseInt(i/2)]){
        swap(heap,i,parseInt(i/2));
        i = parseInt(i/2);
    }
}

// Element Exchange in Two Arrays
swap = (arr,x,y) =>{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

// Deletion of heap
const removeMax = () =>{
    // Judge heap space
    if(count <= 0) return ;

    // Move the maximum data to the last deletion
    heap[1] = heap[count];

    // Length minus one
    count--;
    // Delete data
    heap.pop();

    // From top to bottom heaping
    heapify(heap,count,1);
}

// From top to bottom heaping
const heapify = (heap,count,i) =>{
    while(true){
        // Maximum subscripts for storage heap subnodes
        let maxPos = i;

        // Left child node is larger than parent node
        if(i*2 < n && heap[i*2] > heap[i]) maxPos = i*2;
        // The right child node is larger than the parent node
        if(i*2+1 <= n && heap[i*2+1] > heap[maxPos]) maxPos = i*2+1;

        // If no substitution occurs, it means that the heap has only one node (parent node) or that the child node is smaller than the parent node.
        if(maxPos === i) break;

        // exchange
        swap(heap,maxPos,i);
        // Continuous stacking
        i = maxPos;
    }
}