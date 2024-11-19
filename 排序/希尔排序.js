/* 
希尔排序是对插入排序的优化；
将间隔为i的元素收集起来，进行插入排序，
最后间隔1的元素进行希尔排序的时候就等同于插入排序，此时基本有序
生成间隔序列
每轮将间隔元素进行插入排序
*/

const data = [72, 54, 58, 30, 31, 78, 2, 77, 82, 72]

function shellSort(data) {// 升序
    const gaps = [5, 3, 1]
    var temp;
    for (var i = 0; i < gaps.length; i++){
        var gap = gaps[i]// 每轮间隔
        // 插入排序,j+=gap，提取间隔序列的元素
        for (var j = gap; j < data.length; j++){
            //就把插入排序看成gap为1的希尔排序，因此内部写法跟插入排序基本一致
            var k = j//每轮需要提取的第2个元素
            temp = data[k]
            // 移动，k-=gap，遍历当前轮当前选择前面的元素
            for (; (k >=gap)&&(data[k-gap]>temp);k-=gap){
                data[k]=data[k-gap]
            }
            data[k] = temp;
        }
    }
}
shellSort(data)
console.log('希尔排序：', data)
module.exports=shellSort