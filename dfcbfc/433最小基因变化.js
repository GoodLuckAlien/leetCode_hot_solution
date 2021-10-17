/**
 * 一条基因序列由一个带有8个字符的字符串表示，其中每个字符都属于 "A", "C", "G", "T"中的任意一个。

假设我们要调查一个基因序列的变化。一次基因变化意味着这个基因序列中的一个字符发生了变化。

例如，基因序列由"AACCGGTT" 变化至 "AACCGGTA" 即发生了一次基因变化。

与此同时，每一次基因变化的结果，都需要是一个合法的基因串，即该结果属于一个基因库。

现在给定3个参数 — start, end, bank，分别代表起始基因序列，目标基因序列及基因库，请找出能够使起始基因序列变化为目标基因序列所需的最少变化次数。如果无法实现目标变化，请返回 -1。

注意：

起始基因序列默认是合法的，但是它并不一定会出现在基因库中。
如果一个起始基因序列需要多次变化，那么它每一次变化之后的基因序列都必须是合法的。
假定起始基因序列与目标基因序列是不一样的。

示例 1：

start: "AACCGGTT"
end:   "AACCGGTA"
bank: ["AACCGGTA"]

返回值: 1
示例 2：

start: "AACCGGTT"
end:   "AAACGGTA"
bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]

返回值: 2
示例 3：

start: "AAAAACCC"
end:   "AACCCCCC"
bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]

返回值: 3
 */

//"AACCGGTT"
//"AAACGGTA"
//["AACCGATT","AACCGATA","AAACGATA","AAACGGTA"]

var minMutation = function(start, end, bank) {
    let bankSet = new Set(bank); // 拷贝一份基因库
    if (!bankSet.has(end)) return -1;
    let queue = [[start, 0]];
    // 基因
    let dna = ['A', 'C', 'G', 'T'];
    while (queue.length) {
        let [node, count] = queue.shift();
        // 已走到end,返回结果
        if (node === end) return count;
        // 遍历所有可能的结果，找出符合的基因加入队列
        for (let i = 0; i < node.length; i++) {
            // 模拟突变
            for (let j = 0; j < dna.length; j++) {
                // 突变后的基因
                let d = node.slice(0, i) + dna[j] + node.slice(i + 1);
                // 如果在基因库中，加入队列
                if (bankSet.has(d)) {
                    queue.push([d, count + 1]);
                    // 此基因已被用过，可以从基因库中删除
                    bankSet.delete(d);
                }
            }
        }
    }
    return -1;
};

console.log(minMutation('AACCGGTT' ,  'AAACGGTA' , ['AACCGATT','AACCGATA','AAACGATA','AAACGGTA'] ) )