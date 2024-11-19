class Queue{
    constructor() {
        this.dataStore = []
        
    }
    enqueue(ele) {
        this.dataStore.push(ele)
    }
    dequeue() {
        return this.dataStore.shift()
    }
    front() {
        return this.dataStore[0]
    }
    back() {
        return this.dataStore[this.dataStore.length-1]
    }
    clear() {
        this.dataStore=[]
    }
    get isEmpty() {
        return !this.dataStore.length;
    }
    dequeueMaxLevel() {
        let maxIndex=0
        for (var i = 0; i < this.dataStore.length; i++){
            if (this.dataStore[maxIndex].code < this.dataStore[i].code) {
                maxIndex = i;
            }
        }
        const temp = this.dataStore[maxIndex]
        this.dataStore.splice(maxIndex, 1)
        return temp
    }
}
module.exports=Queue