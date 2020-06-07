var controller = new ScrollMagic.Controller();
var hookTrigger = 0.5;
var width = $(window).width()

pinning = new ScrollMagic.Scene({triggerElement: '#mobileStartPinning'}).triggerHook(0).addIndicators({name: "pinning"}).addTo(controller);
if (width > 500) {
   hookTrigger = 'onCenter';
} else {
   hookTrigger = 0.7
}

$(window).bind("load", function() {
   if (width > 500) {
      $('.images').css('height',''+($('.box-fix').height()+20)+'px');
   } else {
      $('.images').css('height','99vh');
   }
});
document.getElementsByTagName("BODY")[0].onresize = function() {
   width = $(window).width()
   if (width > 500) {
      scene1.triggerHook(0.5)
      scene2.triggerHook(0.5)
      scene3.triggerHook(0.5)
      scene4.triggerHook(0.5)
      scene5.triggerHook(0.5)
      scene6.triggerHook(0.5)
      $('.images').css('height',''+($('.box-fix').height()+20)+'px');
   } else {
      scene1.triggerHook(0.7)
      scene2.triggerHook(0.7)
      scene3.triggerHook(0.7)
      scene4.triggerHook(0.7)
      scene5.triggerHook(0.7)
      scene6.triggerHook(0.7)
      $('.images').css('height','99vh');
   }
}
scene1 = new ScrollMagic.Scene({triggerElement: "#muka"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('.hide').css('opacity',0)
                                    $('#mukaImages').css('opacity',1)
                                    if (width < 501) {
                                       pinning.setPin('#mobilePinning', {pushFollowers: false})
                                    }
                                 })
                                 .on("leave",(e)=>{
                                    $('#mukaImages').css('opacity',0)
                                    if (width < 501) {
                                       pinning.removePin()
                                    }
                                 })
                                 .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);
scene2 = new ScrollMagic.Scene({triggerElement: "#paruParu"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('.hide').css('opacity',0)
                                    $('#paruParuImages').css('opacity',1)
                                 })
                                 .on("leave",(e)=>{
                                    $('#paruParuImages').css('opacity',0)
                                    $('#mukaImages').css('opacity',1)
                                 })
                                 .addIndicators({name: "2 (duration: 0)"})
                                 .addTo(controller);

scene3 = new ScrollMagic.Scene({triggerElement: "#jantung"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('.hide').css('opacity',0)
                                    $('#jantungImages').css('opacity',1)
                                 })
                                 .on("leave",(e)=>{
                                    $('#jantungImages').css('opacity',0)
                                    $('#paruParuImages').css('opacity',1)
                                 })
                                 .addIndicators({name: "3 (duration: 0)"})
                                 .addTo(controller);

scene4 = new ScrollMagic.Scene({triggerElement: "#liverDanGinjal"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('.hide').css('opacity',0)
                                    $('#liverImages').css('opacity',1)
                                    $('#ginjalImages').css('opacity',1)
                                 })
                                 .on("leave",(e)=>{
                                    $('#liverImages').css('opacity',0)
                                    $('#ginjalImages').css('opacity',0)
                                    $('#jantungImages').css('opacity',1)
                                 })
                                 .addIndicators({name: "4 (duration: 0)"})
                                 .addTo(controller);
scene5 = new ScrollMagic.Scene({triggerElement: "#ususDanLambung"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('.hide').css('opacity',0)
                                    $('#ususImages').css('opacity',1)
                                    $('#lambungImages').css('opacity',1)
                                 })
                                 .on("leave",(e)=>{
                                    $('#ususImages').css('opacity',0)
                                    $('#lambungImages').css('opacity',0)
                                    $('#liverImages').css('opacity',1)
                                    $('#ginjalImages').css('opacity',1)
                                 })
                                 .addIndicators({name: "5 (duration: 0)"})
                                 .addTo(controller);
scene6 = new ScrollMagic.Scene({triggerElement: "#footer"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('.hide').css('opacity',0)
                                 })
                                 .on("leave",(e)=>{
                                    $('#ususImages').css('opacity',1)
                                    $('#lambungImages').css('opacity',1)
                                 })
                                 .addIndicators({name: "6 (duration: 0)"})
                                 .addTo(controller);
endPinning = new ScrollMagic.Scene({triggerElement: "#triggerEndPinning"})
                                 .triggerHook(1)
                                 .on("enter",(e)=>{
                                    if (width < 501) {
                                       pinning.removePin()
                                    }
                                 })
                                 .on("leave",(e)=>{
                                    if (width < 501) {
                                       pinning.setPin('#mobilePinning', {pushFollowers: false})
                                    }
                                 })
                                 .addIndicators({name: "endPinning"})
                                 .addTo(controller);