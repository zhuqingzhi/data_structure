class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class CircleLinkedList{
    constructor(){
        this.head=new Node('head');
        this.head.next=this.head;
    }
    display(){
        let cur=this.head;
        while((cur.next!=null)&&cur.next.data!='head'){
            cur=cur.next;
            console.log('node:',cur.data)
        }
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
    insert(newElement,element){
        const curNode=this.find(element);
        const newNode=new Node(newElement);
        
    }
}