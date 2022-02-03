// "Iperfect number, a positive integer that is equal to the sum of its proper divisors.

const isPerfect = (num) => {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
        sum += i
    }
  }
  if (sum === num) {
      console.log("It is a perfect number");
    } else {
      console.log("It is not a perfect number");
    }
};

isPerfect(496);