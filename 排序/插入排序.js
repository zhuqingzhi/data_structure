/* 
第一轮：外层循环当前元素为第一个元素outer[i]；内层循环需要遍历比较第一个元素和后续的元素
如果元素outer[i]大于内层循环后续的元素，那么继续往后比较，直到下一个元素inner[j]比outer[i]要大
此时移动j后面的元素，插入元素outer[i]到j的前面,进入下一轮
外层循环用来生成遍历，内层循环用来判断和移动元素
内层循环的目的是每轮都能把元素放到前面已经排列的元素中顺序的位置
移动次数，从0到n-1

*/
const data = [72, 54, 58, 30, 31, 78, 2, 77, 82, 72]
/* 
function insertSort(data) {
    // 升序
    var temp;
    for (var i = 1; i < data.length; i++) {
        // 每次记录当前轮指针指向的元素，第一个元素不用考虑插入
        temp = data[i]
        for (var j = i; (j > 0) && (temp < data[j - 1]); j--) {
            // 向前找到合适位置，并记录下标移动元素，并且是边找边移动
            data[j] = data[j - 1]
        }
        // 移动完后需要将元素插入到目标位置
        data[j] = temp;
        // console.log(data)
    }
} */
function insertSort(data) {
    for (var i = 1; i < data.length; i++) {
        var temp = data[i];
        var j = i - 1;
        // 使用双层for循环，内层循环负责移动元素，找到插入位置
        for (; j >= 0 && temp < data[j]; j--) {
            data[j + 1] = data[j];
        }
        // 将temp插入到正确的位置
        data[j + 1] = temp;
    }
    return data;
}
// insertSort(data)
// console.log('插入排序：', data)
// 第一轮结束：[54,72,58,...] i=2

// 空间复杂度：0(1)
// 时间复杂度，主要是移动元素操作:第i轮最坏移动i-1次，一共有n-1轮；(0+1+...+n-1)/2

module.exports = insertSort