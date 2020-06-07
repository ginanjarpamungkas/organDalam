var controller = new ScrollMagic.Controller();
var hookTrigger = 0.5;
var width = $(window).width()

if (width > 500) {
   hookTrigger = 'onCenter';
} else {
   hookTrigger = 0.7
}

$(window).bind("load", function() {
   if (width > 500) {
      hookTrigger = 'onCenter';
      $('.images').css('height',''+($('.box-fix').height()+20)+'px');
   } else {
      hookTrigger = 0.7
      pinning = new ScrollMagic.Scene({triggerElement: '#mobileStartPinning',duration:'430%'}).setPin('#mobilePinning', {pushFollowers: false}).triggerHook('onLeave').addIndicators({name: "pinning"}).addTo(controller);
      $('.images').css('height','99vh');
   }
});
document.getElementsByTagName("BODY")[0].onresize = function() {
   var width = $(window).width()
   if (width > 500) {
      $('.images').css('height',''+($('.box-fix').height()+20)+'px');
   } else {
      // pinning = new ScrollMagic.Scene({triggerElement: '#mobileStartPinning',duration:'430%'}).setPin('#mobilePinning', {pushFollowers: false}).triggerHook('onLeave').addIndicators({name: "pinning"}).addTo(controller);
      $('.images').css('height','99vh');
   }
}
scene1 = new ScrollMagic.Scene({triggerElement: "#muka"})
                                 .triggerHook(hookTrigger)
                                 .on("enter",(e)=>{
                                    $('.hide').css('opacity',0)
                                    $('#mukaImages').css('opacity',1)
                                 })
                                 .on("leave",(e)=>{
                                    $('#mukaImages').css('opacity',0)
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