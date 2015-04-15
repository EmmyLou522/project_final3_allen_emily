$(document).ready( function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($(' #logo ').css("width") == "190px" ){
        //backstretch plugin //
        $.backstretch("img/ratatouille_3.jpg");
        //scrollUp plug in//
        $.scrollUp();
        $("nav#menu").mmenu({
        
        //options
        // A collection of extension names to enable for the menu.
        extensions    : [],
        onClick     : {
        // the clicked link should be visibly "selected".
        setSelected   : true
        },
        // the submenus comes sliding in from the right.
        slidingSubmenus : true
        }, {
        configuration: {
        // CSS classesclassNames: {
        panel   : 'Panel',
        vertical  : 'Vertical',
        selected  : 'Selected',
        divider   : 'Divider',
        spacer    : 'Spacer'
        },
        // Whether or not the menu should be cloned
        // (and the original menu kept intact).
        clone: false,
        // The number of milliseconds between opening/closing the menu and panels,
        // needed to force CSS transitions.
        openingInterval: 25,
        // jQuery selector containing the node-type of panels.
        panelNodetype: 'ul, ol, div',
        // The number of milliseconds used in the CSS transitions.
        transitionDuration: 400
        }
        );
        
    $(".mm-menu").trigger("open");
    $(".mm-menu").trigger("close");
    } else {
        $.backstretch("img/ratatouille_3.jpg");
        $.scrollUp();
        // jbar plugin //
        $('nav li ul').hide().removeClass('fallback');
        $('nav li').hover(
            function () {
                $('ul', this).stop().slideDown(100);
            },
            function () {
            $('ul', this).stop().slideUp(100);
            }
         );
         }
    
};
