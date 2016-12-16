var controller = new ScrollMagic.Controller({ globalSceneOptions: {
  triggerHook: "onEnter", duration:"200%"
}
});

new ScrollMagic.Scene({triggerElement:"#parallax1"})
.setTween("#parallax1 div", {y: "80%", ease: Linear.easeNone})
// .addIndicators()
.addTo(controller);

new ScrollMagic.Scene({triggerElement:"#parallax2"})
.setTween("#parallax2 div", {y: "80%", ease: Linear.easeNone})
// .addIndicators()
.addTo(controller);

new ScrollMagic.Scene({triggerElement:"#parallax3"})
.setTween("#parallax3 div", {y: "80%", ease: Linear.easeNone})
// .addIndicators()
.addTo(controller);

new ScrollMagic.Scene({triggerElement:"#parallax4"})
.setTween("#parallax4 div", {y: "80%", ease: Linear.easeNone})
// .addIndicators()
.addTo(controller);

$('.carousel-caption h3').css("color","white");
$('.carousel-caption p').css("color","white");


$(document).ready(function(){
  var items = $("#containerBordel .divItems");
  var btn = $("#callItems a");
  console.log(items);
  btn.eq(1).click(function(){
    items.eq(0).fadeIn();
    items.eq(1).fadeOut();
  });
  btn.eq(0).click(function(){
    items.eq(1).fadeIn();
    items.eq(0).fadeOut();
  });
})
