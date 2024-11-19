const data = [91, 31,3, 92, 22, 85, 15, 35, 102,46]
const Queue=require('./List')
/* 
创建一个队列，队列依次保存基数为0-9的盒子
先遍历数组，将尾数为0的保存到队列的第一个盒子,1保存到第二个盒子
然后将队列依次输出为第一次排序结果
继续按照尾数为十位进行分组保存到队列中，此时没有十位的则视为十位为0
直到所有高位都经过排列
*/
function baseSort(arr) {
    let res = arr
    
    // 获取最大轮数
    let maxTurn = 0;
    arr.forEach(item => {
        const str = item + '';
        maxTurn = str.length > maxTurn ? str.length:maxTurn
    })
    for (var i = 0; i < maxTurn; i++){
        res = sort(res, i+1)
    }
    return res;
}

/**
 * @description 一轮排序
 * @param {Array} arr 数组
 * @param {Number} base 基数位，1个位，2十位
 * @param {Array} queue 保存临时结果
 */
function sort(arr, base) {
    let middle = []
    for (var i = 0; i < 10; i++) {
        middle.push(new Queue())
    }
    for (var i = 0; i < arr.length; i++){
        const item = arr[i]
        // 取出基数位置数字
       let num=getBaseNum(item,base)
        middle[num].enqueue(item)
    }
    // 将middle按顺序返回
    console.log(middle)
    let res = []
    for (var i = 0; i < middle.length; i++){
        while (!middle[i].isEmpty) {
            res.push(middle[i].dequeue())
        }
    }
    return res
}
/**
 * @description 获取基数位数字
 * @param {*} num 
 * @param {*} base 
 */
function getBaseNum(num,base) {// 102,1;102,2
    let res = 0;
    const str=num+''
    res=str[str.length-base]||0
    return res
}


console.log('基数排序结果:',baseSort(data))