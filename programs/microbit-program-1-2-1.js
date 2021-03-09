/*
This is a peice of code that populates an array with numbers from 1-100 with a for loop and displays the final 17 numbers.
*/

let nums : number[] = []

for (let i=0; i< 100; i++)
{
    nums.push(i+1)
}

for (let i =0; i<17; i++)
{
    basic.showNumber(nums[82+i])
}
