/**
 *
给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。



示例 1：

输入：nums = [2,2,3,2]
输出：3
示例 2：

输入：nums = [0,1,0,1,0,1,99]
输出：99


提示：

1 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
nums 中，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次

 */



/**
 * @param {number[]} nums
 * @return {number}
 */

/* 哈希表  */
 var singleNumber = function(nums) {
    const map = new Map()
    let result
    for(let i=0;i < nums.length; i++){
       if(map.has(nums[i])){
           let cur = map.get(nums[i])
           cur++
           map.set(nums[i],cur)
       }else{
           map.set(nums[i],1)
       }
    }
    map.forEach((item,key)=>{
         console.log(item)
         if(item === 1) {
            result = key
         }
    })
    return result
 }
console.log( singleNumber( [0,1,0,1,0,1,99] )  )

let a =[ 1,2,3 ]

function tt(){
    a.forEach(item=>{
        if(item === 2){
            console.log('retruen')
            return 1111
        }
    })
}
console.log( tt() )