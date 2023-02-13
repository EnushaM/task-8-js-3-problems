/*1. Binary search using js
Recursive Approach : 
BASE CONDITION: If starting index is greater than ending index return false.
Compute the middle index.
Compare the middle element with number x. If equal return true.
If greater, call the same function with ending index = middle-1 and repeat step 1.
If smaller, call the same function with starting index = middle+1 and repeat step 1.*/

function binsrch(arr, x, l, r) {
    if (l > r) return false;
    let m=Math.floor((l + r)/2);
    if (arr[m]===x) return true;
    if(arr[m] > x)
        return binsrch(arr, x, l, m-1);
    else
        return binsrch(arr, x, m+1, r);
}
let arr = [2,5,9,14,19,26];
let x = 14;
if (binsrch(arr, x, 0, arr.length-1)) {console.log("True");}
else console.log("False");

/*2. Create a function that concatenates n input arrays, where n is variable.*/
function concat(...arr)
{
  let ans = [];
  for (let i = 0; i < arr.length; i++)
  {
    for (let j = 0; j < arr[i].length; j++)
    {
        ans.push(arr[i][j]);
    }
    
  }return ans;
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]));
console.log(concat([1], [2], [3], [4], [5], [6], [7]));
console.log(concat([1, 2], [3, 4]));

/*3. Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".*/
function oddishOrEvenish(num)
{
    var sum=0;
    while(num>0)
    {
        sum+=num%10;
        num/=10;
    }
    if(sum%2==0) {console.log("Evenish");}
    else {console.log("Oddish");}
}
oddishOrEvenish(43)
oddishOrEvenish(373)
oddishOrEvenish(4433)