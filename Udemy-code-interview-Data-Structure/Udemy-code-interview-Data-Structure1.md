# Udemy-code-interview Data Structure

## What is Data Structure
Data Structure is a collection of values. It is like a contaners such as shelf, backpack, box and so on... each containers exist for their own purpose like you can not put yougurt in the box because it goes bad.

## Arrays
Listがありitterateする必要があるならarrayの手法で解くと良い。

### メソッドごとのBigO
insert -> O(n)
lookup -> O(1)
delete -> O(n)
search -> O(n)
push -> O(1)

- push -> loopしているわけではないから、O(1)となる
- pop -> loopしているわけではないから、O(1)となる
- unshift -> 要素を前に挿入し、それにより全ての要素を右にシフトするためitterateされている。そのためO(n)となる。
- splice -> strings.splice(2, 0, "alien");の場合、stringsの2以降の値をitterateしているため、O(n/2)となるが/2は省略されO(n)となる。
- insert -> O(n) 
- delete -> O(n)

### static arrayとdinamic array
static arrayでは配列を作る前にその大きさを指定する。（C++など）appending element はO(1)だけど、0(n)にもなれる。dynamit arrayでは配列を編集しようとした際にメモリが他に既に使われてしまっている場合，全く別の，連続で配列の倍の数のメモリが空いているところにコピーして編集します。ただし配列全体を動かす必要があるのでO(n)Timeかかってしまいます．これは毎回起こるわけではなく，新たにメモリを見つけないと処理できない場合のみに起こるのでdynamic arrayで要素を追加するBigOは，ほとんどの場合O(1)Timeだけど，配列を動かす必要のある場合のみO(n)Timeとなる。

- dynamic
メモリを動的に多め（2倍）に確保する
Good：配列のサイズを定義していなくても要素を自由に追加できる
Bad：メモリ消費が倍
処理によっては配列全体を動かす必要がある
- static
メモリは配列のサイズを最初に定義した分だけ確保
Good：メモリ消費量が少なくて済む
Bad：初期サイズを超えるような処理ができない

## Hash table
hashはkeyという文字列を指定して値（value）を設けることのできる配列（オブジェクト）のことである。

### hashするということ
hashするとimdenpotent(べき等)される。文字列のhashを1回行っても複数回行っても結果が同じとなる。
objectのkeyをhash functionに渡すことでhashされ、メモリにデータが保存される。

### hash tableのBigO
insert -> O(1)
lookup -> O(1)
delete -> O(1)
search -> O(1)

### hash tableの例
hashのkeyにアクセスするのはloopとか関係ないので全てO(1)となる。

```
let user = {
    age: 54,
    name: "yumi",
    scream: function() {
        console.log("ahhhh!");
    }
}

user.age // O(1)
user.scream(); //O(1)
```

### Collision
メモリのスペースには限度があるため、hash functionでデータを格納アドレスに格納する際、別のデータに既に格納アドレスを使用されている場合、衝突（collision）が起きる可能性がある。
Collisionが起きる際のBigOはO(n/k)となる。
*kはhash tableのサイズ

### MapとSet
- Map -> const map = new Map()
MapはObjectと異なり文字列以外もkeyとして格納することができる。またtableをloopした時にObjectと異なりOrderを勝手にmaintainしてくれる。
- Set -> const set = new Set()

## Linked List

### 概要
最初のリストのことをheadといい、最後のリストのことをtailという。リストはlinkされているので、次のnodeを指していく(pointerという)が、tailのnodeはnullを指す(pointer)。Linked ListはArrayと異なり繰り返し(itterate)はしないが、traverse(横切る)をする。hash tableと同様に何かvalueを真ん中に入れたい/削除したい場合はarrayと違い残りのarray要素をunshift/shiftする必要はない。

### Linked ListのBigO
insert/lookup/deleteなどはlistのheadから該当のlistまで到達してから行うのでO(n)となる。

prepend -> O(1)
append -> O(1)
insert -> O(n)
lookup -> O(n)
delete -> O(n)

### JSにおけるpointerとは
下記のようにobjectなどでreferしているもののこと。
```
const obj1 = { a: true };
const obj2 = obj1;
```

### Linked Listをvisualizeすると
10 -> 5 -> 16の場合
```
let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}
```

```
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head; 
        //10しかvalueがないからhead === tailとなるためこのような書き方となる。
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        // 該当のindexのひとつ前のvalueのデータを手に入れる。
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        //insertしたい内用をleaderの次に挿入する。
        leader.next = newNode;
        //insertされた内容の次に元々あったデータを繋ぐ。
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while ( counter !== index) {
            currentNode =currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(10);
myLinkedList.insert(1, 7);
myLinkedList.remove(2);
```

### doubly linked list
最初と最後以外のnodeがnextとprevのnodeもpointerで差しているNodeのこと。これにより前方からではなく後方からもListを操作することができる。

### singly linked list と doubly linked listのメリットデメリット
singly linked list: 簡潔かつメモリ使用量も少ない。しかしpointerが一方通行のため後ろから前に向けてitterateすることはできない。
doubly linked list: 前方と後方の両方からitterateすることができる。しかし、insertやremoveするときに追加の手順が必要になる。またメモリ使用量も多く複雑化される。