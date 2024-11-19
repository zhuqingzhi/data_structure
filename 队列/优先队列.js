// 优先级高的先出队
class Patient{
    constructor(name,code) {
        this.name = name;
        this.code=code
    }
}
const Queue = require('./List')
var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
while (!ed.isEmpty) {
    const patient = ed.dequeueMaxLevel()
    console.log('当前就诊：'+patient.name+'；优先级:'+patient.code)
}