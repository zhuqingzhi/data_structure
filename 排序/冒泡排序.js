// 每轮得到当前排序规模的最大或者最小值，在排序数组中判断相邻两个元素大小关系，进行交换，最后
// 得到每轮的最大值或者最小值
const now = performance.now()

const data = [72, 54, 58, 30, 31, 78, 2, 77, 82, 72]
// 升序
function bubbleSort(data) {
    for (var i = data.length - 1; i>=0; i--){
        for (var j = 0; j <= i; j++){
            // 通过比较相邻元素得到当前轮，排序规模内的最大值
            if (data[j] > data[j + 1]) {
                // 交换两个元素
                var temp = data[j]
                data[j] = data[j + 1]
                data[j + 1] = temp;
            }
        }
    }
}
// bubbleSort(data)
// console.log('冒泡排序', data, data, performance.now() - now)
// 冒泡排序是一个稳定原地的排序方法
module.exports = bubbleSort