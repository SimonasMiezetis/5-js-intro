function aspectRatio(x,y){
    let ratio = [Math.ceil(x * (16/9)), y];
    return ratio;
  }

  console.log(aspectRatio(640,480));

function positiveSum(arr) {
    if (arr.length === 0) {
        return 0;
    }
console.log(arr);
    let sum = 0;
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] >= 0) {
           sum = sum + arr[i];
        }
    }
    return sum;
}

console.log(positiveSum([1,2,3,4,5]));

function bmi(weight, height) {
    let index = weight / (height * height);
    return index;
}
        
console.log(bmi(80, 1.80));

function index(array, n) {
    if (n < array.length) {
      return Math.pow(array[n],n);
    } else {
        return -1;
    }
}

function arrayMadness(a, b) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < a.length; i++) {
      sum1 = sum1 + a[i];
    }
    for (let i = 0; i < b.length; i++) {
      sum2 = sum2 + (b[i] * b[i]);
    }
    console.log(sum1);
    console.log(sum2);
    
    if (sum1 > sum2) {
      return true;
    } else {
      return false;
    }
}

console.log(arrayMadness([4,5,6],[1,2,3]));
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]));

function addLength(str) {
  let array = str.split(' ');
  let word = "";
  for (i = 0; i < array.length; i++) {
      word += array[i] + ' ' + array[i].length + ' ';
      Array.from(word);
  }
  return [word]
}

console.log(addLength('labas kaip laikaisi?'));

function sumOfDifferences(arr) {
  arr.sort(function(a, b){return b - a});
  let sum = 0;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
      if (arr.length >= 3) {
          sum = (arr[i] - arr[i + 1]) + (arr[i + 1] - arr[i + 2])
          console.log(sum);
      }  
  }
  return sum
}

console.log(sumOfDifferences([1, 2, 10]));