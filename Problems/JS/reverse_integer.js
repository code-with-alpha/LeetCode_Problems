class Solution {
    reverse(x) {
        let ans = 0;
        let digit;
        while (x !== 0) {
            digit = x % 10;

            if ((ans > Number.MAX_SAFE_INTEGER / 10) || (ans < Number.MIN_SAFE_INTEGER / 10)) {
                return 0;
            }
            ans = (ans * 10) + digit;
            x = Math.floor(x / 10);
        }
        return ans;
    }
}

let s = new Solution();
let num = 76345;
console.log("Actual Number: ", num);
console.log("Reversed: ", s.reverse(num));