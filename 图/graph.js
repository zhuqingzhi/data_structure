class Graph{
    constructor() {
        this.edges = 0;
        this.adj = []
    }
    addEdge(start, end) {
        if (!this.adj[start]) this.adj[start] = []
        this.adj[start].push(end)
        if (!this.adj[end]) this.adj[end] = []
        this.adj[end].push(start)
        this.edges++
    }
    show() {
        for (var i = 0; i < this.adj.length; i++){
            if(this.adj[i])
            console.log(`${i}-->${this.adj[i].join(',')}`)
        }
    }
}
/* const graph = new Graph()
graph.addEdge(0,1)
graph.addEdge(0,2)
graph.addEdge(1,3)
graph.addEdge(2, 4)
graph.show() */
module.exports=Graph