/* 
许多使用递归去解决的编程问题，可以重写为使用
动态规划的技巧去解决。
0,1,1,2，3,5，8,13
太多值在递归调用中被重新计算
和每阶段的值很有关系的一般动态规划
需要将中间结果保存起来，然后通过中间结果进行归纳
是不是可以理解为递归是解析法
动态规划是归纳法
*/

// 递归斐波那契数列
function recurFib(n) {
    if (n < 2) return n;
    return recurFib(n-1)+recurFib(n-2)
}

// 动态规划
function dynFib(n) {
    if (n <2) return n;
    var arr = []
    for (var i = 0; i < n; i++) {
        arr.push(0)
    }
    arr[1] = 1
    arr[2] = 2;// arr用来统计前面的数的和
    for (var j = 3; j <= n; j++){
        // 统计arr，也就是每阶段的值
        arr[j]=arr[j-1]+arr[j-2]
    }
    return arr[n-1]
}
var now=performance.now()
console.log('递归方式', recurFib(1), recurFib(2), recurFib(3), recurFib(10))
console.log('耗时：',performance.now()-now)
console.log('非递归方式', dynFib(1), dynFib(2), dynFib(3), dynFib(10))
var now = performance.now()
console.log('耗时：', performance.now() - now)
