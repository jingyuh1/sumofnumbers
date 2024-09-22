const testNums: number[] = [1, 2, 3, 4];

function sumFor(nums: number[]): number {
    let total: number = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

console.log(sumFor(testNums));

const sumWhile = (nums: number[]): number => {
    let total: number = 0;
    let i: number = 0;
    while (i < nums.length) {
        total += nums[i];
        i++;
    }
    return total;
};

console.log(sumWhile(testNums));

function sumRecursion(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
}
