$(function(){
//equal to adding an event listener/callback::::on('click', function(){}); better because it can be more dynamic to call children
    $("#clickMe").on('click', function(){
        alert("yo")
    });

    //$(this) represents $("#create-an-element")
    $("#create-an-element").on('click', function(){
        $(this).after("<button class='will-this-work'>Click Me</button");
    })
///making the whole doc listen may be undesirable so create a section called dynamic content (<section id=dynamic-content></section>) with the button placed there and instead of $(document) put $("#dynamic-content") its called a delegated event
    $(document).on('click', '.will-this-work', function(){
        alert("ooooooohhhhhh yeeeaaaahhh");
    });

    ///below won't work because we are trying to register an event handler with and element that doesn't exist yet
    $(".will-this-work").on('click', function(){
        alert(":( This wont work")
    });
///can take two functions when the mouse enters and leaves
//     $(".box").hover(function(){
//         $(this).addClass('hotpink');
//     },
//         function(){
//         $(this).removeClass('hotpink');
//         });

    ///below is same as above
    $(".box").hover(function() {
        $(this).toggleClass('hotpink');
    });

    $(document).keydown(function(){
        alert("you just pressed a key down");
    });

    //will return just the text
    console.log($("div p").text());

    //will return the html version of the text between the divs
    console.log($("div p").html());

});