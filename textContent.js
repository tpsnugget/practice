// This is for practice using textContent to retrieve and modify text from an
// html page.

// This does not work as is, but it will work in the JS console of the html page

// Select the <p> tag
var tag = document.querySelector("p");
var tag = document.getElementsByTagName("strong");

// Retrieve the textContent
tag.textContent;

// Alter the text content
tag.textContent = "blah blah blah";