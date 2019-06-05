const Queue = require('./Queue');

// create a graph class
class Graph {
  // defining vertex array and
  // adjacent list
  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.AdjList = new Map();
  }

  // functions to be implemented
  addVertex(v) {
    this.AdjList.set(v, []);
  }
  // add edge to the graph
  addEdge(v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge betweeen v and w
    this.AdjList.get(v).push(w);

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
  }
  // Prints the vertex and adjacency list
  printGraph() {
    // get all the vertices
    const get_keys = this.AdjList.keys();

    // iterate over the vertices
    for (let i of get_keys) {
      // great the corresponding adjacency list
      // for the vertex
      const get_values = this.AdjList.get(i);
      let conc = '';

      // iterate over the adjacency list
      // concatenate the values into a string
      for (let j of get_values) conc += j + ' ';

      // print the vertex and its adjacency list
      console.log(i + ' -> ' + conc);
    }
  }

  // function to performs BFS
  bfs(startingNode) {
    // create a visited array
    const visited = [];
    for (i = 0; i < this.numOfVertices; i++) visited[i] = false;

    // Create an object for queue
    let q = new Queue();

    // add the starting node to the queue
    visited[startingNode] = true;
    q.enqueue(startingNode);

    // loop until queue is element
    while (!q.isEmpty()) {
      // get the element from the queue
      var getQueueElement = q.dequeue();

      // passing the current vertex to callback funtion
      console.log(getQueueElement);

      // get the adjacent list for current vertex
      var get_List = this.AdjList.get(getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet
      for (var i in get_List) {
        var neigh = get_List[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue(neigh);
        }
      }
    }
  }
  // Main DFS method
  dfs(startingNode) {
    var visited = [];
    for (var i = 0; i < this.numOfVertices; i++) visited[i] = false;

    this.DFSUtil(startingNode, visited);
  }

  // Recursive function which process and explore
  // all the adjacent vertex of the vertex with which it is called
  DFSUtil(vert, visited) {
    visited[vert] = true;
    console.log(vert);

    var get_neighbours = this.AdjList.get(vert);

    for (var i in get_neighbours) {
      var get_elem = get_neighbours[i];
      if (!visited[get_elem]) this.DFSUtil(get_elem, visited);
    }
  }
}
