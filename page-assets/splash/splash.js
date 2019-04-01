$(document).ready(function(){

  // code goes on here

  var currentMousePos = { x: -1, y: -1, x_rel: 0, y_rel: 0};
  var currentMousePosString = "";
  // attach event handler to mouse position

   $(document).mousemove(function(event) {
      // get mouse positions, relative to viewport center
       currentMousePos.x_rel = (event.pageX - ($(window).width() / 2))/$(window).width();
       currentMousePos.y_rel = (event.pageY - ($(window).height() / 2))/$(window).height();
       currentMousePos.x = event.pageX - ($(window).width() / 2);
       currentMousePos.y = event.pageY - ($(window).height() / 2);

       // convert to fancy display if shown
       currentMousePosString = "[".concat(Math.round(currentMousePos.x_rel * 100).toString(),"%, ",Math.round(currentMousePos.y_rel*100).toString(),"%]");
       $("#position").text(currentMousePosString)

       updateParallax(currentMousePos)

   });


});


function updateParallax(currentMousePos){
  const ratio_ears = -0.01;
  const ratio_eyes = 0.02;
  const ratio_nose = 0.06;

  $('.splash-box').css('transform', 'perspective(1600px) rotateY(' + (currentMousePos.x_rel * 50).toString() + 'deg) ' +
'rotateX('  + (currentMousePos.y_rel * -50).toString() + 'deg)'  );

  $('.splash-container').css('filter', 'blur(' + ((Math.abs(currentMousePos.y_rel) +  Math.abs(currentMousePos.x_rel)) *  5).toString() + 'px)'  );

//   $("#ears_img").css('transform', 'translate(' + (currentMousePos.x*ratio_ears) + 'px,' + (currentMousePos.y*ratio_ears) + 'px) ' +
// 'scaleX(' + (1 - Math.abs(currentMousePos.x_rel)*0.1) + ') ' +
// 'scaleY(' + (1 - Math.abs(currentMousePos.y_rel)*0.1) + ') ');
//
//
//   $("#eyes_img").css('transform', 'translate(' + (currentMousePos.x*ratio_eyes) + 'px,' + (currentMousePos.y*ratio_eyes) + 'px) ' +
// 'scaleX(' + (1 - Math.abs(currentMousePos.x_rel)*0.15) + ') ' +
// 'scaleY(' + (1 - Math.abs(currentMousePos.y_rel)*0.15) + ') ');
//   $("#nose_img").css('transform', 'translate(' + (currentMousePos.x*ratio_nose) + 'px,' + (currentMousePos.y*ratio_nose) + 'px) ' +
// 'scaleX(' + (1 - Math.abs(currentMousePos.x_rel)*0.3) + ') ' +
// 'scaleY(' + (1 - Math.abs(currentMousePos.y_rel)*0.2) + ') ');



}
