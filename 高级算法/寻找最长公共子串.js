/* 
另一个适合使用动态规划去解决的问题是寻找两个
字符串的最长公共子串。例如，在单
词“raven”和“havoc”中，最长的公共子串是“av”
。寻找最长公共子串常用于遗传学中，用于使用核苷酸
中碱基的首字母对DNA分子进行描述
*/

// 暴力解决
/* 
str1='raven';str2='havoc'
str1='ravavenava' str2='havvocava'// 最长为ava
遍历str1 i=0
遍历str2 j=i+1//因为需要截取str1[i,j]的子串，判断这个子串是否在str2中
// 循环截取，直到str1遍历完成
*/
/**
 * 寻找两个字符串中的最长公共子串。并且str1要比str2的长度长
 *
 * @param {string} str1 - 第一个字符串
 * @param {string} str2 - 第二个字符串
 * @returns {string} - 最长的公共子串
 */
function longestCommonSubstring(str1, str2) {
    let resultStr = ''
    for (var i = 0; i < str1.length; i++){
        for (var j = i + 1; j < str2.length; j++){
            // 从str1中截取子串
            var subStr_str1 = str1.substring(i, j)
            if (subStr_str1.length <= resultStr.length) continue;
            if (str2.includes(subStr_str1)) {
                resultStr=subStr_str1
            }
        }
    }
    return resultStr;
}
/* // 示例使用
const stringA = 'avbabcde';
const stringB = 'abfde';
const result = longestCommonSubstring(stringB, stringA);
console.log(`字符串 A: "${stringA}"`);
console.log(`字符串 B: "${stringB}"`);
console.log(`最长公共子串: "${result}"`); */

/*    0 1 2 3 4
      a b b c c
    0 0 0 0 0 0
0 d 0 0 0 0 0 0
1 b 0 0 1 1 0 0
2 b 0 0 1 2 0 0
3 c 0 0 0 0 3 1
4 c 0 0 0 0 1 4

[
  [
    0, 0, 0, 0, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 1, 0, 1,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0, 0,
    0, 0, 0, 0
  ],
 高级算法  node .\寻找最长公共子串.js
最长公共子串: abf
 高级算法  node .\寻找最长公共子串.js
 高级算法  node .\寻找最长公共子串.js
       a  v  b  a b  c  d  e
    0, 0, 0, 0, 0,0, 0, 0, 0
 a  0, 1, 0, 0, 1,0, 0, 0, 0
 b  0, 0, 0, 1, 0,2, 0, 0, 0 max=2 start=2
 f  0, 0, 0, 0, 0,0, 0, 0, 0
 d  0, 0, 0, 0, 0,0, 0, 0, 0
 e  0, 0, 0, 0, 0,0, 0, 0, 0


0 0 0 0 0 0
0 0 0 0 0 0
0 0 1 1 0 0
0 0 1 2 0 0
0 0 0 0 3 1
0 0 0 0 1 4

0 0 0 0 0
0 0 0 0 0
0 1 1 0 0
0 1 2 0 0
0 0 0 3 1
0 0 0 1 4

 0, 0, 0, 0, 0, 0
 0, 1, 1, 0, 0, 0
 0, 1, 2, 0, 0, 0
 0, 0, 0, 3, 1, 0
 0, 0, 0, 1, 4, 0
 0, 0, 0, 0, 0, 0 
*/

// 动态规划从二维数组中找到对角线连续>0并且更新保存index,max
// 由于计算规则，a[i][j]=a[i-1][j-1]+1，是对角线的累计
// 因此index和max始终出现在对角线末端
const fs=require('fs')
function dynLongestCommonSubString(str1, str2) {
    var start = 0;// 保存开始
    var max = 0;// 保存长度
    var arr=[]
    // 生成二维数组
    for (var i = 0; i <= str1.length; i++){
        arr[i]=new Array(str2.length)
        for (var j = 0; j <= str2.length; j++){
            arr[i][j]=0
        }
    }
    fs.writeFileSync('./arr1.json',JSON.stringify(arr))
    for (i = 1; i <= arr.length; i++){
        for (j = 1; j < arr.length; j++){
            if (str1[i - 1] == str2[j - 1]) {
                arr[i][j] = arr[i - 1][j - 1] + 1;
                if (arr[i][j] > max) {
                    max = arr[i][j]
                    start = i;// 最终截取子串从str1中截取
                }
            }
        }
    }
    // 截取子串
    var res = ''
    for (i =start-max; i < max; i++){
        res+=str1[i]
    }
    return res;
}
const stringA = 'abcdef';
const stringB = 'defabc';
const result = dynLongestCommonSubString(stringB, stringA);
console.log('最长公共子串:', result)

