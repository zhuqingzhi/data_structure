/* 
    分而治之
    在列表中选择一个元素作为基准值pivot
    数据排序围绕基准值进行，将列表中小于基准值的元素移到左边，大于右边
    此步骤只做了移动，而没有一边移动一遍排序
    最后是数组的两个元素

    分而治之的思想，不是乱分，分组应该保持一个规律，分组1的最大值小于分组2的最小值；
    然后合并起来仍然能保持原有的规律
    // 看起来就像是二叉排序树一样
    分组1，分组2
    分组1.1，分组1.2 分组2.1,分组2.2 
    分组1.1.1 分组1.1.2 分组1.2.1 分组1.2.2


    算法：
    1. 选择一个基准元素将列表分割成两个数组//这个基准元素要选择的很合理，正好把两个数组分成相等长度最好
    2. 对列表重新排序，将所有小于基准的放在左边，大于放右边
    3. 分别对左边的序列和右边的序列重复上述步骤
    在何时以及什么情况引入临时数组，每轮循环我到底在做什么
    步骤2的操作是否要引入临时数组，还是只需要引入一个临时变量做交换

    递归的方式
    pivot怎么处理？
    放到左边右边都不合理，因为每次取的都是第一个// 也不对，重复的怎么办
    不取第一个，而取中间的呢
    原来是i从1开始，直接跳过第一个元素，因为第一个就是pivot

    缺陷是栈溢出
*/

function quickSort(data) {
    if (data.length < 2) return data;
    var pivot = data[0]
    var lesser = [], greater = [];
    for (var i = 1; i < data.length; i++){
        if (data[i] >= pivot) {
            greater.push(data[i])
        }else{
            lesser.push(data[i])
        }
    }
    return quickSort(lesser).concat([pivot],quickSort(greater))
}
const data = [72, 54, 58, 30, 31, 78, 2, 82, 72];

// 调用quickSort函数，但是不直接修改原始data数组
var sortedData = quickSort(data.slice()); // 使用slice()来复制数组，以避免直接修改原数组
console.log('快速排序后：', sortedData);

module.exports=quickSort

// 第一轮 pivot=72                      回调4：执行return [2,30,31,54,58].concat(72,[72,78,82])
// lesser=[54,58,30,31,2]
// greater=[78,82,72]
// 第二轮 pivot 54, 78                  
// lesser=[30,31,2] greater=[58]        回调2：执行return [2,30,31].concat(54,[58])----[2,30,31,54,58]   
// lesser=[72] greater=[82] //返回      回调3：执行return [72].concat(78,[82])---[72,78,82]
// 第三轮                               回调1：执行return [2].concat(30,[31])---[2,30,31]
// pivot 30
// lesser=[2] greater=[31]//返回