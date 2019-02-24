function Node(data){
	this.data = data;
	this.parent = null;
	this.children =[];
}

function Tree(data) {
	var node = new Node(data);
	this._root = node;
}

function add(child, parent){
	parent._root.children.push(new Node(child))
	child.parent=parent;
}

var tree = new Tree(1);

//tree._root.children.push(new Node(2), new Node(3), new Node(4));
add(2, tree);
add(3, tree);
add(4, tree);

let traversal = tree._root.children;
add(5, traversal)
//add(5, traversal);

tree._root.children.forEach(item => console.log(item.data)); 
traversal._root.children.forEach(item=> console.log(item.data));


