function createMenu() {
    if ($('#logo').css("width") !== "190px") {
        //Check if menu exists.  If it does, remove the current menu.
        if (document.getElementById("menu")) {
        //remove the current one
        $('#menu').remove();    
        }
    //then, add a new one since the plugin messed up the menu.
    $('header').append('<nav id="menu"><ul><li><a href="#">Menu</a><ul class="fallback"><li><a href="horsdoeuvres.html">Hors D\'oeuvres</a></li><li><a href="entrees.html">Entrees</a></li><li><a href="desserts.html">Desserts</a></li><li><a href="wines.html">Wines</a></li></ul></li><li><a href="index.html#reserveatable">Make a Reservation</a></li><li><a href="order.html">Order Out</a></li><li><a href="contact.html">Contact Us</a></li><li><a href="index.html">Home</a></li></ul></nav>');
    //Stretch the image first.
    $.backstretch("img/inside.jpg");
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
        $('header').append('<nav id="menu"><ul><li><a href="#">Menu</a><ul class="fallback"><li><a href="horsdoeuvres.html">Hors D\'oeuvres</a></li><li><a href="entrees.html">Entrees</a></li><li><a href="desserts.html">Desserts</a></li><li><a href="wines.html">Wines</a></li></ul></li><li><a href="index.html#reserveatable">Make a Reservation</a></li><li><a href="order.html">Order Out</a></li><li><a href="contact.html">Contact Us</a></li><li><a href="index.html">Home</a></li></ul></nav>');

    //Stretch the image first.
    $.backstretch("img/inside.jpg");
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

//write the elements to the cart array
//prototype a menu object
//global array of menu items
//Demonstration of the global array.
var cart = [];
var master_menu = [];
var reported_cost;
master_menu[0]=["Hors D'oeuvres","Paté Maison et Condiments",9.95];
master_menu[1]=["Hors D'oeuvres","Gratinée des Halles",8.95];
master_menu[2]=["Hors D'oeuvres","Soupe du Jour",8.00];
master_menu[3]=["Hors D'oeuvres","Bisque de Homard au Cognac",8.95];
master_menu[4]=["Hors D'oeuvres","Escargots Bourguignonne",9.95];
master_menu[5]=["Hors D'oeuvres","Saumon Fume",14.50];
master_menu[6]=["Hors D'oeuvres","Foie Gras Frais",19.95];
master_menu[7]=["Hors D'oeuvres","Steak Tartare",14.75];
master_menu[8]=["Hors D'oeuvres","Moules Marinieres",13.75];
master_menu[9]=["Hors D'oeuvres","Antipasto à la Française",13.95];
master_menu[10]=["Hors D'oeuvres","Assiette Scandinave",14.50];
master_menu[11]=["Salads","Salade de Saison Mixte",7.95];
master_menu[12]=["Salads","Salade de Chêvre Chaud",9.75];
master_menu[13]=["Salads","Salade de Betraves",9.75];
master_menu[14]=["Salads","Salade aux Poires",9.75];
master_menu[15]=["Salads","Salade de Chef",9.75];
master_menu[16]=["Salads","Salade Gusteau",18.50];
master_menu[17]=["Entrees","Steak, Frites",29.95];
master_menu[18]=["Entrees","Magret de Canard",26.95];
master_menu[19]=["Entrees","Suprême de Volaille Grillé",22.95];
master_menu[20]=["Entrees","Gigot d'Agneau",26.95];
master_menu[21]=["Entrees","Boeuf Bourguignon",23.95];
master_menu[22]=["Entrees","Risotto du Jour",23.95];
master_menu[23]=["Entrees","Remy's Ratatouille",23.95];
master_menu[24]=["Entrees","Moules Marinieres",22.95];
master_menu[25]=["Entrees","Filet de Saumon",24.75];
master_menu[26]=["Entrees","Coquilles St. Jacques",26.95];
master_menu[27]=["Desserts","Poire Belle Helene",9.95];
master_menu[28]=["Desserts","Profiterolles au Chocolat",7.95];
master_menu[29]=["Desserts","Mousse au Chocolat",7.50];
master_menu[30]=["Desserts","Pâtisserie",7.50];
master_menu[31]=["Desserts","Crème Brûlée Ò la Lavande",7.50];
master_menu[32]=["Desserts","Assiette de Fromages de France",9.25];
master_menu[33]=["GiftCert","$25 Gift Certificate",25.00];
master_menu[34]=["GiftCert","$50 Gift Certificate",50.00];

function menuChoice (menu_item, menu_quantity) {
	this.section = master_menu[menu_item][0];
	this.item = master_menu[menu_item][1];
	this.price = master_menu[menu_item][2];
	this.quantity = parseInt(menu_quantity);
    this.extended_price = parseFloat(Math.round(100 * this.price * this.quantity ) / 100).toFixed(2); //We don't want weird extended prices, so using Math.round to round to the nearest hundredth and always show 2 decimal places.
	this.changeQuantity = function (new_quantity) {
		this.quantity = new_quantity;
		this.extended_price = this.price * this.quantity;
    }
}

function addToCart (item, quantity) {
    if (document.getElementById(quantity).value == NaN || document.getElementById(quantity).value < 1 || (document.getElementById(quantity).value % 1)>0) {
        alert("You must enter a valid number.");
    }
    else {
        cart.push(new menuChoice(document.getElementById(item).value, document.getElementById(quantity).value));
        $('#orderreview').append("<p id='cart" + (cart.length-1) + "'>" + cart[cart.length-1].item + " Quantity: " + cart[cart.length-1].quantity + " Price: " + cart[cart.length-1].extended_price + "<input type='button' value='Remove from Cart' onclick='removeFromCart(" + (cart.length-1) + ");" + "'></input>" + "</p>"); 
        updateOrderTotal();
    }
}

function removeFromCart (index) {
    if (confirm("Are you sure you want to remove this from your order?")) {
    cart.splice(index,1);
    var x = "#cart" + index;
    $('p').remove(x);
        updateOrderTotal();
    }
}

function updateOrderTotal() {
    var total_cost=0;
    var total_items=0;
    if(cart.length==0) {
        $('#cart_cost').remove();
        $('#ordertotal').append("<p id='cart_cost'>You have no items in your cart.</p>");
    } else {
        for(var i=0; i<cart.length; i++) {
        total_items+=cart[i].quantity;
        total_cost+=parseFloat(cart[i].extended_price);
        }
        reported_cost=parseFloat(total_cost).toFixed(2);
        if (document.getElementById("cart_cost")) {
            $('#cart_cost').remove();
        }
        $('#ordertotal').append("<p id='cart_cost'>Your order total is $" + parseFloat(total_cost).toFixed(2) + " for " + total_items + " items from us.</p>");
    }
    writeFormData();
}

function writeFormData() {
    //Since the form data is actually more on the JS side, we need to write to a hidden form field.
    if (document.getElementById("order_form").fullname.value!="" && document.getElementById("order_form").phone.value !="" && document.getElementById("order_form").email.value!="") {
        var holderString="";
        holderString+="Customer order from ";
        holderString+=document.getElementById("order_form").fullname.value;
        holderString+=" can be reached at ";
        holderString+=document.getElementById("order_form").phone.value;
        holderString+=" or ";
        holderString+=document.getElementById("order_form").email.value;
        holderString+=".  They ordered: ";
        for(var i=0; i<cart.length; i++) {
            if(cart.length==1)
            {
                holderString+=cart[i].quantity;
                holderString+=" ";
                holderString+=cart[i].item;
                holderString+=" and owe ";
                holderString+=cart[i].extended_price;
                holderString+=".";
            }
            else {
                if (i!=cart.length-1) {
                    holderString+=cart[i].quantity;
                    holderString+=" ";
                    holderString+=cart[i].item;
                    holderString+=" for ";
                    holderString+=cart[i].extended_price;
                    holderString+=", ";
                    }   
                else {
                    holderString+="and "
                    holderString+=cart[i].quantity;
                    holderString+=" "
                    holderString+=cart[i].item;
                    holderString+=" for "
                    holderString+=cart[i].extended_price;
                    holderString+=". "
                }
            }
        }
        holderString+=" Their total is "
        holderString+= reported_cost;
        holderString+=".";
        document.getElementById("fullorder").value=holderString;
    }
}


$('form').submit(function (event) {
    $('form').hide('slow')
    });
