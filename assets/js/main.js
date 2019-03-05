$(document).ready(function(){
// jquery apparently likes to lie in here. makes sure document is fully loaded
// before triggering anything



// If nav icon is clicked, toggle drop down menu
$("img.nav_icon").click(function(){
  // console.log("mouse clicked!");
  if (checkMobile() )   {
    toggleMenu()
  }
  })

});




// /* Functions */
// check to see if website is in mobile mode or not by checking if the
// main container is in flex mode or not.
function checkMobile() {
  if ($(".body-container").css("display") == "flex") {
    var isMobile = false;
    // $('p.debugger').text("isNotMobile")
  } else {
    var isMobile = true;
    // $('p.debugger').text("isMobile")
  }

  return isMobile
};
//
//
function  toggleMenu() {
    $(".hidden-menu").toggleClass("hide-menu")
  return
};
