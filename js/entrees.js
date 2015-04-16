function createMenu() {
    if ($('#logo').css("width") !== "190px") {
        //Check if menu exists.  If it does, remove the current menu.
        if (document.getElementById("menu")) {
        //remove the current one
        $('#menu').remove();    
        }
    //then, add a new one since the plugin messed up the menu.
    $('header').append('<nav id="menu"><ul><li><a href="#">Menu</a><ul class="fallback"><li><a href="horsdoeuvres.html">Hors D\'oeuvres</a></li><li><a href="entrees.html">Entrees</a></li><li><a href="desserts.html">Desserts</a></li><li><a href="wines.html">Wines</a></li></ul></li><li><a href="index.html#reservationlinks">Make a Reservation</a></li><li><a href="#">Order Out</a></li><li><a href="contact.html">Contact Us</a></li><li><a href="index.html">Home</a></li></ul></nav>');
    //Stretch the image first.
    $.backstretch("img/Steak-Frites.jpg");
    //scrollUp plug in
    $.scrollUp();
    //Run the jbar plugin
    // jbar plugin
    $('nav li ul').hide().removeClass('fallback');
    $('nav li').hover(function () { $('ul', this).stop().slideDown(100);}, function () { $('ul', this).stop().slideUp(100); });
    //end jbar plugin
    }
    //If it isn't desktop.
    else {
        //Check if menu exists.  If it does, remove the current menu.
        if (document.getElementById("menu")) {
            //remove the current one
            $('#menu').remove();    
        }
        $('header').append('<nav id="menu"><ul><li><a href="#">Menu</a><ul class="fallback"><li><a href="horsdoeuvres.html">Hors D\'oeuvres</a></li><li><a href="entrees.html">Entrees</a></li><li><a href="desserts.html">Desserts</a></li><li><a href="wines.html">Wines</a></li></ul></li><li><a href="index.html#reservationlinks">Make a Reservation</a></li><li><a href="#">Order Out</a></li><li><a href="contact.html">Contact Us</a></li><li><a href="index.html">Home</a></li></ul></nav>');

    //Stretch the image first.
    $.backstretch("img/Steak-Frites.jpg");
    //scrollUp plug in
    $.scrollUp();
    //end scrollUp plugin
    //begin navmenu plugin
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
    //end navmenu plugin
    //Show the menu.
    }
}

$(document).ready(function() {createMenu(); });

$(window).resize(function() {createMenu(); });