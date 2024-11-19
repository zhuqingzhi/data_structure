class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head=new Node();
    }
    insert(newElement,element){
        const newNode=new Node(newElement);
        const curNode=this.find(element);
        newNode.next=curNode.next;
        curNode.next=newNode;
        newNode.prev=curNode;

    }
    find(element){
        let curNode=this.head;
        while(curNode.next!=null){
            if(curNode.data===element){
                break;
            }
            curNode=curNode.next;
        }
        return curNode;
    }
    display(){
        let curNode=this.head;
        while(curNode.next!=null){
            curNode=curNode.next;
            console.log('node:',curNode.data)
        }
    }
    remove(element){
        const curNode=this.find(element);
        if(!curNode.next)return
        const prevNode=curNode.prev;
        prevNode.next=curNode.next;
        curNode.next.prev=prevNode;
        curNode.next=null;
        curNode.prev=null;
    }
}
const doubleLinkedList=new DoubleLinkedList();
const fruits=['苹果','香蕉','芒果'];
for(var i =0;i<fruits.length;i++){
    doubleLinkedList.insert(fruits[i],fruits[i-1])
}
doubleLinkedList.display();
console.log('步进：',doubleLinkedList.head.next,doubleLinkedList.head.next.data);
console.log('步进：',doubleLinkedList.head.next.next,doubleLinkedList.head.next.next.data);
console.log('步进：',doubleLinkedList.head.next.next.next,doubleLinkedList.head.next.next.next.data);

doubleLinkedList.remove('香蕉')
doubleLinkedList.display();