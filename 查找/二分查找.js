/* 
    二分查找
    step1:设置上边界right=data.length-1;下边界：left=0;
    step2:  for(var i=0;i<data.length;i++)
            if(left>middle) return -1;
            判断middle=Math.floor((left+right)/2)
            data[middle]>target ----> right=middle-1
            data[middle]<target ----> left=middle+1
            data[midddle]=target ----> return middle

*/
var data = [
    2, 30, 31, 54, 58,
    72, 72, 77, 78, 82
]

function bSearch(data,target) {
    var left = 0, right = data.length - 1, middle;
    for (var i = 0; i < data.length; i++){
        middle = Math.floor((left + right) / 2)
        if (left > middle) return -1;
        if (data[middle] > target) right = middle - 1;
        else if (data[middle] < target) left = middle + 1;
        else return middle;
    }
}
var index = bSearch(data,30)
console.log(index>-1?`已找到目标元素，所在位置:${index}`:'没找到')

var index = bSearch(data, 33)
console.log(index > -1 ? `已找到目标元素，所在位置:${index}` : '没找到')
var index = bSearch(data, 82)
console.log(index > -1 ? `已找到目标元素，所在位置:${index}` : '没找到')