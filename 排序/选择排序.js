/* 
    选择排序每轮也得到一个最大值或者最小值，但是每轮获取的方式和冒泡不同，
    选择排序每轮需要拿结果位置与当前轮的排序数组的元素进行比较一遍，从中得到最大值或者最小值
    直到当前轮的排序数组只剩1个元素的时候，就可以停止不进入下一轮

*/
const now=performance.now()
const data = [72, 54, 58, 30, 31, 78, 2, 77, 82, 72]
function selectSort(data) {
    // 升序
    for (var i = data.length - 1; i >= 0; i--){
        for (var j = 0; j < i; j++){
            if (data[i] < data[j]) {
                // 交换两个
                var temp = data[i]
                data[i] = data[j]
                data[j] = temp;
            }
        }
    }
}
// selectSort(data)
// console.log('选择排序后', data, performance.now() - now)
module.exports=selectSort