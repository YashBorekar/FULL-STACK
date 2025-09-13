// /***** ELement */

// // create a element
// let li = document.createElement("li");
// li.innerText = "Item 4";
// const parent = document.querySelector("#list");

// // append the element
// parent.appendChild(li);

// // remove the element
// parent.removeChild(li);

// // replace the element
// let li2 = document.createElement("li");
// li2.innerText = "Item 5";
// const item2 = document.querySelector(".item");
// parent.replaceChild(li2, item2);

// // get the element
// const items = document.querySelectorAll(".item");
// console.log(items);

// // get the parent element
// const root = document.querySelector("#root");
// console.log(root.parentNode);
// console.log(root.parentElement);

// // get the child element
// console.log(root.childNodes);
// console.log(root.children);

/** Textnode */

// const text = document.createTextNode("Hello World");
// const root = document.querySelector("#root");
// root.appendChild(text);
// console.log(text);

/** Attribute */
// set attribute
const text = document.querySelector("li");
text.setAttribute("id", "item1");
// text.setAttribute("class", "list-item");

// // OR
// const attr1 = document.createAttribute("title");
// attr1.value = "item1";
// text.setAttributeNode(attr1);

/** Remove Attribute */
// text.removeAttribute("class");
// OR
// text.removeAttributeNode(attr1);

/** Get Attribute */
// console.log(text.getAttribute("id"));
// console.log(text.getAttributeNode("id"));

/** Add nodes to the DOM */
const li = document.createElement("li");
li.innerText = "Item 4";
const parent = document.querySelector("#list");

// append as last child
// parent.appendChild(li);

// append as first child
// parent.prepend(li);

// // append before a specific element
const item2 = document.querySelector(".item");
// parent.insertBefore(li, item2);

// append after a specific element
// parent.insertBefore(li, item2.nextSibling); 

// insertAdjacent
// item2.insertAdjacentElement("afterend", li);
// item2.insertAdjacentElement("beforebegin", li);
// item2.insertAdjacentElement("afterbegin", li);
// item2.insertAdjacentElement("beforeend", li);

/*     **************************  NOTES           ************
  <!-- Create Node --/>
1: Create a Element
2: Create a Text Node
3: Create a Attribute Node


<!-- Accessing Attributes -->
1: getAttribute
2: setAttribute
3: removeAttribute


<!-- Add Nodes to the DOM -->

1: appendChild(node)
   Adds a node as the last child of a parent.
2: append(node1,node2,...)
   Adds Multiple Node as the last child of a parent.
3: insertBefore(newNode, referenceNode)
4: prepend
5: replaceChild()
6: Using innerHTML
   Directly sets the HTML content of an element.
7: Using insertAdjacentHTML() or insertAdjacentElement():
   
beforebegin: Before the element itself.
afterbegin: Inside the element, before its first child.
beforeend: Inside the element, after its last child.
afterend: After the element itself.

8: removeChild(node) Homework
9: The .remove() method in JavaScript is used to remove an element from the 
   DOM (Document Object Model).



<!-- Practice on projects -->


*/