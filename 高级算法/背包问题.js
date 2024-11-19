/* 
背包问题是算法研究中的一个经典问题。试想你是
一个保险箱大盗，打开了一个装满奇珍异宝的保险
箱，但是你必须将这些宝贝放入你的一个小背包
中。保险箱中的物品规格和价值不同。你希望自己
的背包装进的宝贝总价值最大。

如果在我们例子中的保险箱中有5件物品，它们的
尺寸分别是3、4、7、8、9，而它们的价值分别是
4、5、10、11、13，且背包的容积为16，那么恰当
的解决方案是选取第三件物品和第五件物品，他们
的总尺寸是16，总价值是23。
*/
/* 
function max(a, b) {
    return (a > b) ? a : b;
}
function knapsack(capacity, size, value, n) {
    if (n == 0 || capacity == 0) {
        return 0;
    }
    if (size[n - 1] > capacity) {
        // 调过size[n-1]
        return knapsack(capacity, size, value, n - 1);
    } else {
        // value[n-1]+knapsack(capacity-size[n-1],size,value,n-1)，需要减少容量
        // 不减少容量，直接比较下一个物品的大小，如果下一个物品的价值都比前几个的价值高
        // 并且容量不超过背包容量，则最大值为下一个物品
        // 当n=5的时候，最大值为13+(条件变更为容量为7，寻找最大价值物品)
        // 当n=4的时候，size[n-1]>当前剩余容量7，直接调过当前物品
        // 当n=3的时候，此时剩余capacity=0，因此退出
        return max(value[n - 1] +
            knapsack(capacity - size[n - 1], size, value, n - 1),
            knapsack(capacity, size, value, n - 1));
    }
}
var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
console.log(knapsack(capacity, size, value, n)); */

/* var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
// 传参，容量，价值数组，物品大小数组，当前选择的物品的下标
function knapsack(capacity,values,sizes,n) {
    if (capacity == 0 || n == 0) return 0;
    // 如果当前物品尺寸超过容量，则跳过
    if (sizes[n - 1] > capacity) {
        return knapsack(capacity,values,sizes,n-1)
    } else {
        // 最可能的备选方案knapsack(capacity,values,sizes,n-1)
        return Math.max(values[n - 1] + knapsack(capacity-size[n-1], values, sizes, n - 1),
        knapsack(capacity,values,sizes,n-1))
    }
}
console.log(knapsack(capacity, value, size, n)); */
/* 
    0   1   2   3   4   5   6   7   8   9   10   11   12   13   14   15   16 容量 
0   0   0   0   0   0   0   0   0   0   0   0    0    0    0    0    0    0
3   0   0   0   4   4   4   4   4   4   4   4    4    4    4    4    4    4               
4   0   0   0   0   5   5   5   9   9   9   9    9    9    9    9    9    9           
7   0   0   0   0   0   0   0   10  10  10  14   15   15   15   19   19   19                                                  
8   0   0   0   0   0   0   0   0   11  11  11   15   16   16   16   21   21                                       
9   0   0   0   0   0   0   0   0   0   13  13   13   17   18   18   18   23                                                                        

*/

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;
function dynKnapsack(capacity, value, size, n) {
    // 创建二维数组，并且置0
    var arr = new Array(capacity + 1);
    for (var i = 0; i <= capacity + 1; i++) {
        arr[i] = []
    }
    for (i = 0; i <= n; i++) {
        for (var j = 0; j < capacity + 1; j++) {
            if (i == 0 || j == 0 || size[i] > capacity[j]) arr[i][j] = 0;
            else {
                var remainValue = arr[capacity - size[i]][capacity - size[i]]
                arr[i][j] = Math.max((value[i] + remainValue), arr[i][j - 1])
            }
        }
    }
    console.log(arr)
}
dynKnapsack(capacity, value, size, n)