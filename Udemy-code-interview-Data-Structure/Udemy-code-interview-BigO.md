# Udemy-code-interview

## BigO cheat sheet
https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent

## What is the good code?
- Readable -> generally clean and others can understand and easy to maintain your code.
- Scalable -> BigO makes code scalable. Scalable consists of speed(time complexity) and memory(space complexity).

## Runtime
If there are lot of data processing, runtime would longer. Also runtime would be different depends on the PC. It all depends on how powerful the cpu on computer is. or what programming language you are using or many other factors.

## BigO

### O(n)
要素の数*Operationの数のこと。例えば100つ要素がある場合、100回ループされる(operation)されるので100*100でO(100)となる。BigOのグラフでは真っ直ぐな線となるため、Linear Timeともいう。

### O(1)
下記のように引数がどれだけあっても、1度しか出力しないものはO(1)であり、BigOのグラフではflatな線となるためConstant Timeという。
下記でconsole.logが2, 3, 4回あったとしても、operationの数は増えるが、線はフラットなままである。0(1)は一番理想的な出力方法でもある。
```
function compressFirstBox(boxes) {
    console.log(boxes[0]);
}
```

### 0(n^2)
loopの中にloopがあるようなnestedループの場合は、n*nとなり0(n^2)となる。Quadratic timeともいう。2つ要素があれば、2*2で4つのoperation、3つ要素があれば3*3で9つのoperationのように二乗される。^はsquareと読み二乗のことを表している。O(n^2)はhorribleは出力方法。またloopが3回ならo(n^3)となる。

### BigO rule
- rule1 -> worst caseを考える。例えばarrayをループして特定のstringを見つける場合、stringがarrayの最後にある可能性もあるから必ず1回はループしないといけない。stringが見つからない限りループを終了してはいけない。
- rule2 -> remove constants。O(2n)とかO(n/2 + 100)のようになったとしても、結局はn回operationが行われるので、簡素化し、O(n)とする。
- rule3 -> different terms for input。
  下記の例だと、O(n)としたくなるが、引数が２つあるため別のoperationが行われている。そのためO(a+b)となる。仮にforEachがnestされていたら、O(a*b)となり0(n^2)となる。
  ```
  function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function(boxes) {
        console.log(boxes);
    });
  }
  ```
- rule4 -> drop non dominants。O(n + n^2)のようなBigOがある場合、より強力な方を残す。この場合だとnよりn^2の方が強力でdominantなのでO(n^2)となる。

### 良いプログラムを書くには
right Data Structures + right Algolism = good programs

### O(n!)
most expensive one. オーエヌファクトリアル(ONFactorial)という。you are adding a loop for every element.

### What cases space complexity?
- Variables
- Data Structures
- Function call
- Allocations

下記の場合は引数nをbooが受け取っても、ただループしてconsole.logしているだけなので、Spaceに影響は特にない。そのため、SpaceのBibOはO(1)となる。
```
function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boo");
  }
}

boo([1, 2, 3, 4, 5])
```

下記の場合はvariableとData Structureを作り、Arrayにデータがfillされているので、Spaceを使っているため、SpaceのBigOはO(n)となる。
```
function boo2(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

boo2(6)
```

### .length
"askfkjaerfhi".lengthのBigOは言語によって異なる。JSの場合.lengthメソッドがbuild inされているので、ループするような関数でもないためO(1)となる。