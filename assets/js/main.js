---
---
// =============================================================================
// Jquery functions here
// =============================================================================
$(document).ready(function(){
// jquery apparently likes to lie in here. makes sure document is fully loaded
// before triggering anything


// email obfuscation
// load email_key
var email_key = JSON.parse("[{{site.social-media.email_key}}]");
var email_encoded = true;


// If nav icon is clicked, toggle drop down menu also decode mailto
$("img.nav_icon").click(function(){
  // console.log("mouse clicked!");
  if (checkMobile() )   {
    toggleMenu()
  }

  if (email_encoded) {
    email_encoded = decodeMail(email_key)
  }
  })


$("#email_obsf").hover(function() {
  if (email_encoded) {
    email_encoded = decodeMail(email_key)
  }
});
});




// /* Functions */
// =============================================================================
// Function for menu open and close
// =============================================================================
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

// =============================================================================
// functions for decoding the email
// =============================================================================
function decodeMail(email_key) {
  // read the ciphered and convert to number
  var a_num = convert2num($("#email_obsf").attr('href'));
  // XOR with key and convert back to string
  var decoded_email = convert2str(XOR(a_num, email_key));
  // set as the herf of the links
  $("#email_obsf").attr('href', decoded_email);

  return false

}

function XOR(a_num, b_num) {
   var c_num = new Array(Math.max(a_num.length,b_num.length));
  for (var i = 0; i < Math.max(a_num.length,b_num.length); i++){
    c_num[i] = a_num[i] ^ b_num[i];
  }

  return c_num
}

function convert2num(a) {
  var a_num = new Array(a.length);
  for (var i = 0; i < a.length; i++ ) {
    a_num[i] = a.charCodeAt(i);
  }

  return a_num
}

function convert2str(a_num) {
  var a = String.fromCharCode.apply(null, a_num);
  return a

}

// =============================================================================
// functions for slideshow images
// =============================================================================
function changeSlideShowPage(x, slideShowIndex) {

  // reference the slideShow{{ind}}Elements array
  var tempElements = this["slideShow".concat(slideShowIndex,'Elements') ]

  for (elements in tempElements) {
    // remove all active elements
    tempElements[elements].className = tempElements[elements].className.replace(" active", "")
  }

  tempElements[x].className += " active";

  return true
}


function plusSlides(y, slideShowIndex) {

  // find current index and the length
  var tempCurrent = this["slideShow".concat(slideShowIndex,'Ind')]
  var tempLength = this["slideShow".concat(slideShowIndex,'Length')]

  // add the slide change to the current index, and modulo with length to get
  // new index

  tempCurrent += y;
  tempCurrent = tempCurrent % tempLength;

  // change slideshow page
  changeSlideShowPage(tempCurrent, slideShowIndex)

  // propagate that back to current index in global
  this["slideShow".concat(slideShowIndex,'Ind')] = tempCurrent;

  return true
}
