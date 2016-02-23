// Global functions here

// This is changing the color of the selected navigation item - adding and removing class "selected" with the onclick event
// Using css and calling fx "li.current a" we can change the original color, size, etc so something new with the click - Test it
$(function(){
    $('ul li a').on('click', function(){
        $(this).parent().addClass('current').siblings().removeClass('current');
        });
    }); 

// Toggling/switching/pushing the contentarea and mobile navigation into sight - and out again : Using toggleClass to add and remove the Class "active"

$(function(){
    $(".menu-link").click(function(){
    $("#menu").toggleClass("active");
    $(".container").toggleClass("active");
            });
    });
