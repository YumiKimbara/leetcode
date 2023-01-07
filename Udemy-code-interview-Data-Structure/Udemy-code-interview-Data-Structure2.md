# Udemy-code-interview Data Structure2

## Stacks and Queues

両方ともLinier Timeである。データの削除方法以外は同じやり方であるため、類似している。

### StacksのBigO
Stackは重ねた飲食店のトレーのようなもの。上からしか乗っけることができず、上からしか通常は取ることができないから。これをLIFOという（last in first out）ブラウザの画面移動やテキストで何か書いている時にundoするなどもStacksの考えが使われている。

lookup -> O(n)
pop -> O(1)
push -> O(1)
peek(一番上のアイテムを参照する) -> O(1)

### QueuesのBigO
Queuesはジェットコースターの順番列のようなもの。最初に並んだ人が最初に抜けるため。これをFIFOという（first in first out)レストランの予約方法アプリやプリンターなどでQueuesの考え方が使われる。arrayは使わないように。なぜならarrayでQueuesを作るとpopした時にshiftしないといけなくなり非効率的だから。

lookup -> O(n)
enqueue(pushのような感じ) -> O(1)
dequeue(popのような感じ) -> O(1)
peek(一番上のアイテムを参照する) -> O(1)

### ArrayとLinkedList
Stackの場合、ArrayとLinkedListどちらの解き方を使っても問題ない。しかしQueuesの場合はArrayは使ってはダメで、LinkedListで解かなくてはいけない。なぜならアイテムを削除した時に残りのアイテムを全shiftしなくてはいけなくなるから。しかしLinkedListならheadやtailを削除するのはO(1)なので効率的。

### JavaScript Engine
JS EngineにはMemory heapとCall stackがある。
Memory heapに変数などのデータを格納するが、格納できる容量にはリミットがある。global variableだらけになると、変数を使った後にclean upできなく残り続けるから容量を圧迫することになる。Call StackはJSのコードを呼ぶstackのこと。
例えば下記の場合はまずone()がStack上に作成され、次にtwo()がStack上に作成され、最後にconsole.log("hey")が作成される。そして同じone -> two -> console.logの順にcallされstackから削除される。call stackが一つしかない言語をsingle threded languageという。
```
const one = () => {
    const two = () => {
        console.log("hey");
    }
    two();
}
one();
```

