// Queue class 
class Queue { 
	// Array is used to implement a Queue 
	constructor() { 
		this.items = []; 
	} 		
    // enqueue function 
    enqueue(element) {     
        // adding element to the queue 
        this.items.push(element); 
    } 
	dequeue(){
        if(this.isEmpty()) return "UnderFlow"
        return this.items.shift();
    } 
	front(){
        if(this.isEmpty()) return "No Element in Queue";
        return this.items[0];
    } 
	isEmpty() {
        return this.items.length === 0;
    } 
    printQueue() 
    { 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] +" "; 
        return str; 
    } 
} 

module.exports = Queue;
