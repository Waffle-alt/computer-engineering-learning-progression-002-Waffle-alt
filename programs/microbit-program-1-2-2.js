/*
Using the Sieve of Eratosthenes, this code gets all the prime numbers from 1 to 
100 and displays them on the screen. 
*/

let nums : number[] = []

for (let i=0; i< 100; i++)
{
    nums.push(i+1)
}

let primeJumpIndex : number = 1
let currentPrime : number
currentPrime = nums[primeJumpIndex]
while(primeJumpIndex<nums.length)
{
    for (let i = primeJumpIndex; i< nums.length;i++)
    {
        if (nums[i]%currentPrime==0 && currentPrime !=nums[i])
        {
            nums.removeAt(i)
        }
    }
    primeJumpIndex++
    currentPrime = nums[primeJumpIndex]
}
nums.removeAt(0)

for (let i =0; i<nums.length; i++)
{
    basic.showNumber(nums[i])
}
