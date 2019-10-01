import { Graph } from '../DataStructure';

const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
};

const initializeColor = vertices => {
  const color = {};
  vertices.forEach(vertex => {
    color[vertex] = Colors.WHITE;
  });
  return color;
};

const depthFirstSearch = (u, color, adjList, callback) => {
  color[u] = Colors.GREY;
  if (callback) {
    callback(u);
  }
  console.log(`Discoverd ${u}`);
  const neighbors = adjList.get(u);
  neighbors.forEach(neighbor => {
    if (color[neighbor] === Colors.WHITE) {
      depthFirstSearch(neighbor, color, adjList, callback);
    }
  });
  color[u] = Colors.BLACK;
};
