element.getAttribute("");

document.querySelectorAll("div");

document.querySelector("div");

p.style.color = 'red';

button.addEventListener()

.createTextNode

newDiv.appendChild(newText)

document.body.appendChild(newDiv);

classList.add
<https://developer.mozilla.org/en-US/docs/Web/API/Element/classList>

element.remove()

element.className = ''; (add class)

element.alt = ''; (add alt)

element.src = '';

element.innerText = '';

element.id = '';

parent_element.appendChild(child_elelemtn); (to end)

wordmark.addEventListener('click', func)


<https://learn.javascript.ru/dom-nodes>

<https://learn.javascript.ru/basic-dom-node-properties>

<https://www.dynamicwebtraining.com.au/blog/javascript-dom-methods>





















* getElementById

getElementId is a method to access any element virtually. It accesses the first element with the specified ID.

```js
var myVariable = document.getElementById('my_squad');
```

or 

```js
var myVariable = document.getElementById(mySquad);
```




* getElementsByClassName

```js
document.getElementsByClassName("test");
```

```js
document.getElementById("main").getElementsByClassName("test")[0];
```




* getElementsByTagName

getElementByTagName allows you to search all the elements with a specified tag name on your page. 
Pictorially it is like an array holding elements.

```js
var myLinkcollection = document.getElementsByTagName(“abc”);
```

usecase

```js
var myLinkCollection = document.getElementsByTagName(“abc”);
for (i = 0; i < myLinkCollection.length; i++) {
    if (myLinkCollection[i].className == “std_class”) {
        myLinkCollection[i].onclick = function() {
            this.style.backgroundColor = “#f00”;
        }
    }
}
```




* querySelector / querySelectorAll





* Node

Any element on a page including text & whitespaces of a DOM structure is known as “NODE.” Nodes can be between XHTML Tags.

Nodes available in DOM:

node.childNodes
node.firstChild
node.lastChild
node.parentNode
node.nextSibling
node.previousSibling
Suppose we have following XHTML:

```html
<ul id-“list”>
    <li><a href=”prod1.html” class=”list_one”> Product Number One</a></li>
    <li><a href=”prod2.html”> Product Number Two</a></li> 
    <li><a href=”prod3.html”> Product Number Three</a></li>
    <li><a href=”prod4.html”> Product Number Four</a></li>
</ul>
```

Now if we want to access “Prod1” we can do so using 2 ways:

Using ChildNodes:

```js
var myLinkList = document.getElementsById(“list”)
var myFirstProduct = myLinklist.childNodes[0].childNodes[0];
alert(myFirstLink.className);
```

Using firstChild:

```js
var myLinkList = document.getElementsById(“list”)
var myFirstProduct = myLinklist.firstChild.firstChild;
alert(myFirstLink.className);
```

* createElement

used to create an element & place it anywhere in the DOM structure

```js
var myNewListItem = document.createElement(“li”)
var myNewProd = document.createElement(“prod5”);
```

* appendChild

We will add two elements to our list of links using appendChild.

```js
var myNewListItem = document.createElement(“li”)
var myNewProd = document.createElement(“prod5”);

var myLinkList = document.getElementById(“List”)
myLinkList.appendChild(myNewListItem);
myLinkList.LastChild.appendChild(myNewProd);
```

* removeChild

```js
var myLinkList = document.getElementById(“list”)
var myRemovedLink = myLinkList.lastChild;
myLinkList.removeChild(myRemoveLink);

```


* getAttribute

With the getAttribute method, you can access the value of any attribute of an element on a page.

```js
var myLinkFive = document.getElementById(“Prod_5”);
var myLinkAttribute = myLinkFive.getAttribute(“abc”);
```


* setAttribute

A useful method to replace values in the attribute. Assigning a new value to an existing attribute is done using setAttribute.

```js
Var myLinkFive = document.getElementById(“Prod_5);
myLinkFive.setAttribute(“abc”, ”Awesome”);
```

* document.forms

This method is used to access “form” collections of the DOM structure.

example 

```html
<form id=”my_form” method=”post” action=”abc.html”>
    <input type=”checkbox” value=”one” name=”options” id=”option1” checked=”checked” />One </br>
    <input type=”checkbox” value=”two” name=”options” id=”option2” /> Two </br>
    <input type=”checkbox” value=”three” name=”options” id=”option3” /> Three </br>
</form>
```

Let’s find out the “Checked” state:

```js
var myCheckBoxOne = document.forms[“my_form”][“option1”];
alert(myCheckBoxOne.checked);
```


* innerHTML

It’s supported on mostly every browser or platform.

```js
Var myContentHolder = document.getElementById(“abc”);
myContentHolder.innerHTML = “<p> These are the most essential DOM methods in JavaScript</p>”;
```

* innerText

* textContent