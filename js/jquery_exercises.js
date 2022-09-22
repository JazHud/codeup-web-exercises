$(function() {
//     alert( 'The DOM has finished loading!' );
//
//     //Use jQuery to select an element by the id. Alert the contents of the element.
// // let contents = $("#thrParagraph").html();
// //     alert(contents);
// // });
//
// //Update the jQuery code to select and alert a different id. (had to comment out above to show work of the update)
//
// let contents = $("#secHeader").html();
// alert(contents);
// });
//
// //Use the same id on 2 elements. How does this change the jQuery selection?
// ////It applies only to the first DONT DO
// $("#thrParagraph").css("color", "pink");
//
//Remove the duplicate id. Each id should be unique on that page.

//class selectors
// jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.

// $(".codeup").css({
//     "border": "1px solid red"
// })

//element selectors
//Using jQuery, set the font-size of all li elements to 20px.
// $("li").css("font-size", "20px")''
// Craft selectors that highlight all the h1, p, and li elements.
// $("h1, p, li").css("background-color", "yellow");
// Create a jQuery statement to alert the contents of your h1 element(s)
// let contents = $("h1").html();
// alert(contents);


//Multiple Selectors
//
// Combine your selectors that highlight all the h1, p, and li elements.


 //MOUSE EVENTS
    //Add jQuery code that will change the background color of an h1 element when clicked.
 $("h1").on('click', function(){
  $(this).css('background-color', 'red');
 });

 // Make all paragraphs have a font size of 18px when they are double clicked.

 $('p').on('dblclick', function(){
  $(this).css('font-size', '18px');
 })

    // Set all li text color to red when the mouse is hovering; reset to black when it is not.
$('li').hover(function(){
 $(this).css('color', 'red');
},
 function(){
 $(this).css('color', 'unset');
 });

 });