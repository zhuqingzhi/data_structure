class Stack{
    constructor() {
        this.top = -1;
        this.stackList=[]
    }
    push(ele) {
        this.stackList[++this.top] = ele;
    }
    pop() {
        return this.stackList[this.top--]
    }
    peek() {
        return this.stackList[this.top]
    }
    clear() {
        this.top = -1;
    }
    get length() {
        return (this.top+1)<0?0:(this.top+1);
    }
}
module.exports=Stack