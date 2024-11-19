// 把一系列排好序的子序列合并成一个大的完整有序序列
/* 
需要两个排好序的子数组，然后通过比较数据大小，先从最小的数据开始插入，最后合并得到第三个数组

1. 自顶向下的归并排序
通常使用递归，但是递归深度很深，因此使用非递归的方式实现
2. 自底向上的归并排序
双指针，left,right
step*=2//每次扩大2倍
循环终止条件：right+step>arr.length;
此时需要单独处理一下不等长的数组

mergeSort(arr)
mergeArray(arr,leftStart,leftEnd,rightStart,rightEnd){
    // 创建leftArr=new Array(leftEnd-leftStart+1)//加一是给末尾装上infinity
    // 创建rightArr=new Array(rightEnd-rightStart+1)
    rightArr[rightArr.length-1]
    // 遍历从leftStart,rightEnd范围内的元素
    // 使用双指针控制left->leftArr;right->rightArr
    // leftArr[left]>rightArr[right]->arr[i]=right[right];right++
    // arr[i]=leftArr[left];left++
    // 如果此时leftArr或者rightArr空了；只有rightArr有空的可能，left没有
    // 所以说会看到别的算法里面有单独处理这种情况，而此处将末尾加上了infinity则不会出现数组空的情况
    // 只要一个数组里面还有普通数字就会一直处理
    // 问题点1：mergeSort是双层循环:外层循环控制step增加，内层循环控制一轮step的所有相邻分组都合并一次
    // 问题2：特殊处理的条件判断；right<data.length，因为最后一次正常循环后right一定会超过data.length
    // 此时需进入下一轮
    // 问题3：初始化leftArr和rightArr记得下标从0开始，也就是k-leftStart,k-rightStart
    // 调试：使用node进行调试
}

*/

const data = [72, 54, 58, 30, 31, 78, 2, 77, 82, 72]
function mergeSort(data) {// 升序
    var step = 1
    var left, right;
    while (step < data.length) {
        left = 0;
        right = step;
        while (right + step <= data.length) {
            mergeArray(data, left, left + step, right, right + step)
            left = right + step;
            right = left + step;
        }
        if (right < data.length) {
            mergeArray(data, left, left + step,right,data.length)
        }
        step *= 2;
    }
}
function mergeArray(data, leftStart, leftEnd, rightStart, rightEnd) {
    // console.log('merge', leftStart, leftEnd, rightStart, rightEnd)
    var leftArr = new Array(leftEnd - leftStart + 1)
    var rightArr = new Array(rightEnd - rightStart + 1)
    var k = leftStart;
    while (k < leftEnd) {
        leftArr[k-leftStart]=data[k]
        k++
    }
    leftArr[leftArr.length - 1] = Infinity
    k = rightStart;
    while (k < rightEnd) {
        rightArr[k-rightStart]=data[k]
        k++
    }
    rightArr[rightArr.length - 1] = Infinity
    var m = 0, n = 0;
    for (k = leftStart; k < rightEnd; k++){
        if (leftArr[m] > rightArr[n]) {
            data[k] = rightArr[n];
            n++
        } else {
            data[k] = leftArr[m]
            m++;
        }
    }
}

/* mergeSort(data)
console.log('归并排序:', data) */

module.exports=mergeSort