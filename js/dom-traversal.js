$(function(){

    const listItems = $("li")

///allows a parameter for more customization
   listItems.each(function (index, element){
       if (index % 2 !==0){
           $(element).css("font-style", "italic");
       }
   });
    //$("li").css("font-style", "italic"

   listItems.first().css("font-size", "larger");

   $("li a").last().css("text-decoration", "underline dashed");

   $("button").on('click', function(){
      // $("main").children().css("font-family", "sans-serif")
       $("ul").last().children().children().css("text-decoration", "underline dotted");
       /// the <a><a> is the 2nd child which is an example of chaining\\::: this override the function above
   });
/////.next the action is on the next element
//     $("h2").hover(function (){
//        $(this).next().slideToggle();
//     });

    // $("h2").on('click',(function (){
    //     $(this).next().slideToggle();
    // }));

    $("h2").css({
        "color": "blue",
        "text-decoration": "underline",
        "cursor": "pointer"
    }).on('click', function(){
        $(this).next().slideToggle();
    });

    $("header p").hover(function (){
        $(this).parent().toggleClass("darkMode");
    });





});