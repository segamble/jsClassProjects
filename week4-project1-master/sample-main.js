$(document).ready(function(){

// EXERCISE THE JQUERY

// We'll be using the html in index.html for the following jQuery exercises.
// After you've completed an exercise, comment out your code (unless otherwise indicated).

// 1. Hide all of the paragraphs on the index.html page.
//$("p").hide();

// 2. Hide all of the h2's on the page.
//$('h2').hide();

// 3. Hide all of the elements in the document.
//$('*').hide();
//* === undefined number of things
// 4. Hide all links on the page
$('a').hide();

// 5. Hide all of the odd table rows (Austin, Colin, & Jessica's rows)
$("tr:odd").hide();

// 6. Hide all paragraphs when they're clicked.
$("p").click(function(){
  $(this).hide()
})
});
