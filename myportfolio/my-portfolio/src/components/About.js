// var list = document.createElement("ul")
// var newLi = document.createElement("li");

// newLi.innerHTML = "this item";

// list.appendChild(newLi)


const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementById("myList").appendChild(node);