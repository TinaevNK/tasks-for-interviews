const SubarraySum = (nums, n) => {
  let t = 0;
  let s = -1;
  let e = -1;
  for (let j = 0; j < nums.length; j++) {
    t = 0;
    for (let i = j; i < nums.length; i++) {
      t = t + nums[i];
      if (t == n) {
        s = j;
        e = i;
        break;
      } else if (t > n) {
        break;
      }
    }
    if (s != -1 && e != -1) break;
  }
  return [s, e];
};

console.log(SubarraySum([4, 3, 5, 7, 8], 12));

function subArraySum(arr, n, sum) {
  var curr_sum, i, j;

  // Pick a starting point
  for (i = 0; i < n; i++) {
    curr_sum = 0;

    // try all subarrays starting with 'i'
    for (j = i; j < n; j++) {
      curr_sum = curr_sum + arr[j];

      if (curr_sum == sum) {
        console.log("Sum found between indexes " + i + " and " + j);
        return;
      }
    }
  }

  console.log("No subarray found");
}

// Driver Code
var arr = [15, 2, 4, 8, 9, 5, 10, 23];
var n = arr.length;
var sum = 23;

//Function Call
subArraySum(arr, n, sum);

//This code is contributed by phasing17
