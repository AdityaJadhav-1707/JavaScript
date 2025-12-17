// let abc = document.querySelector("#a1");
// abc.textContent = "Welcome To JS";
// console.dir(abc);


// select all <li> elements & print their text using a loop.
// using forEach
// let lis = document.querySelectorAll("li");
// lis.forEach(function(val) {
//     console.log(val.textContent);
// });

// using for loop
// let list = document.querySelectorAll("li");
// for(let i = 0; i < list.length; i++){
//     console.dir(list[i].textContent);
// }


// select a paregraph and replace its content with:
//<b>Updated</b> by JS
// let paregraph = document.querySelector("p");
// paregraph.innerHTML = "<b>Updated</b> by JS";
// console.dir(paregraph);


// how do u get src of an image using JS?
// let im = document.querySelector("img");
// im.getAttribute("src"); 
// console.log(im);  
// console.log(im.src);


// select link & update its href to point to https://sheryians.com
// let a = document.querySelector("a");
// a.href = "https://sheryians.com";
// console.dir(a);


// Add a title attribute to a div dynamically
// let div = document.querySelector("div");
// div.title = "marimo";  // div.setAttribute("title", "marimo");
// console.log(div);


// create a new list item <li>New apple</li> & add it to end of a <ul>
// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "New apple";
// ul.appendChild(li);


// create a new image element with a placeholder source & add it at top of a div
// let im = document.createElement("img");
// im.setAttribute("src", "https://media.istockphoto.com/vectors/avatar-photo-placeholder-icon-design-vector-id1221380217?k=20&m=1221380217&s=612x612&w=0&h=avdFJ5PNo-CSkbUZzQ0Xm8h3u5BovGfSNDrfRicPDfY=");
// im.classList.add("placeholder");
// document.querySelector("div").prepend(im);


// add a highlight to every even item in a list.
// let li = document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach(function (elem) {
//     elem.classList.add("highlight")
// });
// console.log(li);


// set font size of all <p> elements to 18px using .style
// let p = document.querySelectorAll("p");
// p.forEach(function(val) {
//     val.style.fontSize = "18px";
// });

