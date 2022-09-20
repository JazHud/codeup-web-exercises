//vvv below needs to be on top;
$(document).ready(function(){
    //selected elements and defining the event handler in one line
    jQuery("h3").click(function(){
        ///$ = jQuery::this is the element selected:::next refers to the next adjacent selector --> https://api.jquery.com/category/selectors/hierarchy-selectors/
        $(this).next().slideToggle(500);
    })
})

function init() {
    $("h3").click(function (){
        $(this).next().slideToggle(500);
    });
}
///pull from javier to finish code.