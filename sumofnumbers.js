const testNums = [1, 2, 3, 4];

function sumFor(nums) {
    let total = 0;
    for( const num of nums) {
        total += num;

    }
    return total;
}

concole.log(sumFor(testNums));

 const sumWhile = (nums) => {
  let total = 0;
  let i = 0;
  while (i < num.length) {
     total += nums[i];
     i++;
  }
  return total;

};

 console.log(sumWhile(testNums));

 function sumRecursion(nums) {
    if (nums.length == 0) {
      return 0;
    }
      return nums[0] + sumRecursion(nums.slice(1, nums.length));
 }