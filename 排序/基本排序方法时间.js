const insertSort = require('./插入排序')
const bubbleSort = require('./冒泡排序')
const selectSort = require('./选择排序')
const shellSort = require('./希尔排序')
const mergeSort = require('./归并排序')
const quickSort=require('./快速排序')
// 准备长度100,1000,10000的随机数组，进行排序，输出时间消耗
function getRandomArr(length) {
    var res = []
    for (var i = 0; i < length; i++){
        res.push(Math.round(Math.random()*length))
    }
    return res;
    /* var res = []
    for (var i = 0; i < length; i++) {
        res.push(i+1)
    }
    return res; */
}

const sortsList = [{
    name: '插入排序',
    handler: insertSort
},
    {
        name: '冒泡排序',
        handler: bubbleSort
    }, {
        name: '选择排序',
        handler: selectSort
    }, {
        name: '希尔排序',
        handler: shellSort
    }, {
        name: '归并排序',
        handler: mergeSort
    }, {
        name: '快速排序',
        handler: quickSort
    }
]

function triggle(length) {
    const randomArr=getRandomArr(length)
    sortsList.forEach(sortItem => {
        const now = performance.now()
        sortItem.handler(randomArr)
        console.log('数组长度为'+length+'排序算法-'+sortItem.name+'耗时：',performance.now()-now)
    })
}
// triggle(100)
triggle(1000)
// triggle(10000)
