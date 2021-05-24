const binary_search = function(arr, key) {
  // TODO: Write your code here
  // ascending or descending?
  const asc = arr[0] < arr[arr.length-1];
  // can't use recursion because every recursion changes the arr indexes
  let start = 0;
  let end = arr.length-1;
  while (start <= end) {
    if (key === arr[start]) {
      return start;
    }
    //  can be integer overflow when calculating the midpoint
    let mid = Math.floor((start + (end - start)) / 2);
    if (key === arr[mid]) {
      return mid;
    }
    //  now paths diverge based on asc or desc
    if (asc) {
      if (key < arr[start] || key > arr[end]) {
        return -1;
      }
      if (key > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid -1;
      }
    } else {
      if (key > arr[start] || key < arr[end]) {
        return -1;
      }
      if (key > arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
};

console.log(binary_search([4, 6, 10], 10))
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
console.log(binary_search([10, 6, 4], 10))
console.log(binary_search([10, 6, 4], 4))
console.log(binary_search([10, 6, 4], 15))