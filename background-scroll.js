document.querySelector("body").onscroll = function myFunction() 
{  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.querySelector("header");
    var xvalue = "center";
    var factor = -0.5;
    var yvalue = (scrolltotop + 700) * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}