// バブルソート
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        let tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
  }
  return arr;
};
bubbleSort([1, 4, 5, 2, 6, 3]);

// Time complexity: O(n^2)
// Space complexity: O(1)

// クイックソート

const quickSort = (array) => {
  const func = (start, end) => {
    if (start + 1 >= end) return;
    let [pivot, l, r] = [start, start, end - 1];
    while (l < r) {
      while (array[pivot] < array[r]) r--;
      while (array[l] <= array[pivot] && l < r) l++;
      [array[l], array[r]] = [array[r], array[l]];
    }
    [array[pivot], array[l]] = [array[l], array[pivot]];
    func(start, l);
    func(l + 1, end);
  };
  func(0, array.length);
};

quickSort([4, 9, 7, 8, 2, 5, 1, 6, 3]);

// Time complexity: O(n)
// Space complexity: O(1)

// マージソート
const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
};

mergeSort([4, 9, 7, 8, 2, 5, 1, 6, 3]);

// Time complexity: O(n)
// Space complexity: O(n)
