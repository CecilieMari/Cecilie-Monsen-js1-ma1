
//Question 1

//Create an object called cat.
//Give the object one property called 
//complain. complain's value should be a 
//method (a function) which logs the string "Meow!".

let animale = [cat]

//Question 2 

/*const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";*/

//Question 3

/*const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";
heading.style.fontSize = "2em";*/


//Question 4

//Add a class to the heading variable called subheading.

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";
heading.style.fontSize = "2em";
heading.classList.add("subheading");

//Question 5

/*const paragraphs = document.querySelector("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}*/

//Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML += "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";