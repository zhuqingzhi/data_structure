class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=new Node();
    }
    insert(newElement,element){
        const oldNode=this.find(element);
        const newNode=new Node(newElement);
        newNode.next=oldNode.next;
        oldNode.next=newNode;
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
        const prev=this._findPreviousNode(element);
        if(!prev)return;
        prev.next=prev.next.next;
    }
    _findPreviousNode(element){
        let curNode=this.head;
        while((curNode.next!=null)&&(curNode.next.data!=element)){
            curNode=curNode.next;
        }
        return curNode;
    }
}

const fruits=['苹果','香蕉','芒果'];
const linkedList=new LinkedList();
for(var i=0;i<fruits.length;i++){
    linkedList.insert(fruits[i],fruits[i-1])
}

linkedList.display();
linkedList.remove('香蕉')
linkedList.display();