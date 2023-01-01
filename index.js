// DOM manipulation


// getElementById()
const title = document.getElementById("main-heading");
console.log(title)

// getElementsByClassName()
const listItem = document.getElementsByClassName("list-items")
console.log(listItem) //Return an array like object for all the elements that contain that class.

// getElementsByTagName()
const lists =  document.getElementsByTagName('li')
console.log(lists)

// querySelector()
//This selector is used to sekect only the first item of the class, tag name or id that is passed into it. for example;
const container =  document.querySelector('div')
console.log(container)

// querySelectorAll() 
//In the event that we have multiple divs or instances of the same element and we want to select them all, it will be very usefule for us to use the querySelectorAll() method.

/*
// styling Elements
//Now lets properly get to work by attempting to change the stying of an element.
const ourTitle = document.querySelector('#main-heading');
//To change the style of this element we have just chosen, we can do the following.
title.style.color = 'red'; // This type of styling is called inline styling. It only works on a single element at a time. We might think that using something like the querySelectorAll() method will suffice, but it won't. To style multiple elements at a time, we must loop through them.

const listItems = document.querySelectorAll('.list-items')

for (i of listItems) {
    i.style.fontSize = '2rem'
} //This will do the job
*/


//Creating Elements
//In the event where we want to add a list item to the ones  already present, we can do the following.
const ul = document.querySelector('ul')
const li = document.createElement('li')

/*optional
li.setAttribute("class", "list-items")
li.textContent = "Justice League"
ul.appendChild(li)
Or*/

ul.append(li)

//We can use innerText, textContent and innerHTMl
//innerText will focus on only the text of that element. In the first list item, it will return "Neo: the matrix" on different lines
//textContent is almost like innerText and will focus on just text and not HTML. It will return all the text from all the elements within the one specified and will return "Neo: " and "The Matrix" on different lines
//innerHTML will return all the html within the secified element. It will return "<span>Neo </span>" and "The matrix on different lines" 

//We will innerText to pass text into the new list item.
li.innerText = "Justice League";
//now we just set the attribute
li.setAttribute('class', "list-items")
//We can also remove attributes
li.removeAttribute('class');

//We can also access the attributes of elements by doing the following.
const heading = document.querySelector("#main-heading")
heading.getAttribute("id")

//What if we want to add more than one class
li.classList.add("list-items", "fun")
//We can also remove the added class
li.classList.remove("fun")

//To remonve the entire element, we can just do the following
li.remove()

console.log(li)
