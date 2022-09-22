$(function (){
/*Create some CSS rules that sets elements with the invisible class to visibility: hidden;.*/
// $(".invisible").css({
//     'visibility': 'hidden',
// });


    /*Update the page with jQuery to add a link that toggles the class invisible on and off for all dd elements.*/

$("#clickMe").click(function(){
    $(".invisible").toggleClass('visibility');
});

/*BONUS When any of the dt elements is clicked, the element that was clicked should be highlighted.*/

    /////////////////TRAVERSING EXERCISE
//Create a button that, when clicked, makes the last li in each ul have a yellow background.
$("button").on('click', function(){
    $("ul").each(function(){
        $(this).children().last().css('background-color', 'yellow')
    });

});

// When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.
$("h3").on('click', function(){
    $(this).next().css('font-weight', 'bold');
});


// When any list item is clicked, first li of the parent ul should have a font color of blue.
$("li").on('click', function(){
    $(this).parent().children().first().css('color', 'blue');
    });



// Bonus
// Create 3 divs that each look like a picture frame. Each one should have a unique background image and a button underneath that swaps the image from the frame. Use the traversing functions of jQuery to accomplish this.
//
// The rules are the following:
//
// The left frame swaps to the right and takes the image from the frame in the center.
// The center frame swaps randomly to either the left or right.
// The right frame swaps to the left and takes the image from the frame in the center.





});




