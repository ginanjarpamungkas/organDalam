$(window).bind("load", function() {
    $('.images').css('height',''+($('.box-fix').height()+20)+'px');
});
document.getElementsByTagName("BODY")[0].onresize = function() {
    $('.images').css('height',''+($('.box-fix').height()+20)+'px');
}

var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({triggerElement: "#muka"})
                                 .on("enter",(e)=>{
                                    $('.hide').css('opacity',0)
                                    $('#mukaImages').css('opacity',1)
                                 })
                                 .on("leave",(e)=>{
                                    $('#mukaImages').css('opacity',0)
                                 })
                                 .addIndicators({name: "1 (duration: 0)"})
                                 .addTo(controller);
var scene2 = new ScrollMagic.Scene({triggerElement: "#paruParu"})
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

var scene3 = new ScrollMagic.Scene({triggerElement: "#jantung"})
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

var scene4 = new ScrollMagic.Scene({triggerElement: "#liverDanGinjal"})
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
var scene5 = new ScrollMagic.Scene({triggerElement: "#ususDanLambung"})
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
var scene6 = new ScrollMagic.Scene({triggerElement: "#footer"})
                                 .on("enter",(e)=>{
                                    $('.hide').css('opacity',0)
                                 })
                                 .on("leave",(e)=>{
                                    $('#ususImages').css('opacity',1)
                                    $('#lambungImages').css('opacity',1)
                                 })
                                 .addIndicators({name: "6 (duration: 0)"})
                                 .addTo(controller);