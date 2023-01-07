// 挿入ソート
const N = 6;
let numbers = [5, 2, 4, 6, 1, 3]

// 下記コメントは１回目のループに関して。
// 5と2の数字を比較している。

const result = (N, numbers) => {
  // i は未ソートの先頭を示す。
  for(let i = 0; i < N; i++ ) {
    // numbers[i]の値を一時的に保持
    let v = numbers[i];
    // ソート済み部分列からvを挿入するための位置を探すループ変数
    let j = i - 1;
    console.log("v, j", v, j)
    // jが0以上かつjがvよりも大きい数字なら
    while (j >= 0 && numbers[j] > v) {
      // [ 5, 5, 4, 6, 1, 3 ]となり、2が一旦消える。
      numbers[j + 1] = numbers[j];
      // j--は0となる。
      j--
    }
    // 数字の2(v)がindexの0番(numbers[j + 1])に入る。
    numbers[j + 1] = v;
  }
  return numbers;
};
// console.log(result(N, numbers));

// バブルソート
let array = [1, 4, 3, 8, 7, 6, 5, 2];
// 下記は5と2を比べた場合

const bubble_sort = (array) => {
 //配列の数だけループする
 for (let i = 0; i < array.length; i++) {
   //配列の右から比較していく。一通り比較が終わったらi++になり、また下記のif文が繰り返される。
   for (let j = array.length; i < j; j--) {
     //右側の数より左側の数が大きい場合は入れ替える。
     if (array[j] < array[j - 1]) {
       let tmp = array[j - 1]; // tmpは５となる。
       array[j - 1] = array[j]; // 元々ある5を2に変える。[1, 4, 3, 8, 7, 6, 2, 2]
       array[j] = tmp; // 元々ある2をtmp(5)に変える [1, 4, 3, 8, 7, 6, 2, 5]
       console.log("array", array)
     }
   }
 }
}
bubble_sort(array);
console.log(array);