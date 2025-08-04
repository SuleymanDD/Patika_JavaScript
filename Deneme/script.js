
let nums = [10,9,9,8,8,11,8,0,9,1]
console.log(fune(nums))

function fune(nums) {
    nums.sort()

    let lent=nums.length-1
    let maxItem=nums[lent]
    
    for(let i=lent;i>-1;i--){
        if(maxItem > nums[i]){
            return nums[i]
        }
    }
    
}