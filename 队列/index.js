/* 
使用队列来模拟跳方块舞的人。当男男女女来
到舞池，他们按照自己的性别排成两队。当舞池中
有地方空出来时，选两个队列中的第一个人组成舞
伴。他们身后的人各自向前移动一位，变成新的队
首。当一对舞伴迈入舞池时，主持人会大声喊出他
们的名字。当一对舞伴走出舞池，且两排队伍中有
任意一队没人时，主持人也会把这个情况告诉大
家。

*/
const fs = require('fs')
const data = fs.readFileSync('./data.txt', 'utf-8')
const strArr = data.split('\n')
class Dancer{
    constructor(name,sex) {
        this.name = name;
        this.sex=sex
    }
}
const Queue = require('./List')
const maleQueue = new Queue()
const femaleQueue = new Queue()

for (var i = 0; i < strArr.length; i++){
    const line = strArr[i]
    const [sex, firstName, lastName] = line.split(' ')
    const dancer = new Dancer()
    dancer.name = `${firstName} ${lastName}`
    if (sex === 'F') {
        dancer.sex = 'female'
        femaleQueue.enqueue(dancer)
    } else {
        dancer.sex = 'male'
        maleQueue.enqueue(dancer)
    }
}

// 分配
function startDance() {
    while (!maleQueue.isEmpty && !femaleQueue.isEmpty) {
        const man = maleQueue.dequeue()
        const woman = femaleQueue.dequeue()
        console.log(`${man.name}的舞伴是${woman.name}`)
    }
    if (!maleQueue.isEmpty) {
        const man=maleQueue.front()
        console.log(`${man.name}等待配对`)
    }
    if (!femaleQueue.isEmpty) {
        const woman = maleQueue.front()
        console.log(`${woman.name}等待配对`)
    }
}

startDance()





