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
