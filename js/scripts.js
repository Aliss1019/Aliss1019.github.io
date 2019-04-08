var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: $('section').height(),
    triggerHook: .025,
    reverse: true
  },
  vertical: false
});

scene_object = {
  '[scene-name]' : {
    '[target-scene-id]' : '[anchor-href-value]'
  }
}

var scenes = {
  'intro': {
    'intro': 'intro-anchor'
  },
  'scene2': {
    'section-1': 'anchor1'
  },
  'scene3': {
    'section-2': 'anchor2'
  },
  'scene4': {
    'section-3': 'anchor3'
  },
  'scene5': {
    'section-4': 'anchor4'
  },
  'scene6': {
    'section-5': 'anchor5'
  },
  'scene7': {
    'section-6': 'anchor6'
  }
}

for(var key in scenes) {
  if (!scenes.hasOwnProperty(key)) continue;

  var obj = scenes[key];

  for (var prop in obj) {
    if(!obj.hasOwnProperty(prop)) continue;

    new ScrollMagic.Scene({ triggerElement: '#' + prop })
        .setClassToggle('#' + obj[prop], 'active')
        .addTo(controller);
  }
}

controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      x : target,
      autoKill : true
    },
    ease : Cubic.easeInOut
  });

});

function onWheel(event) {
  event.preventDefault();

  var normalized;
  var delta = event.wheelDelta;
  var scroll = (window.pageXOffset || document.scrollLeft) - (document.clientLeft || 0) || 0;

  if (delta) {
    normalized = (delta % 120) == 0 ? delta / 120 : delta / 12;
  } else {
    delta = event.deltaY || event.detail || 0;
    normalized = -(delta % 3 ? delta * 10 : delta / 3);
  }

  TweenLite.to(window, 0.4, {scrollTo: {x: scroll + 200 * normalized } });
}

$(".subnav").hide(function(){
});
$(".subnav-share").hide(function(){
});
$(".navButton.btn-menu").hover(function(){
  $(".subnav").css("color", "007BFF");
  $(".subnav").toggle();
  $(".subnav-share").hide();
});
$(".navButton.btn-share").hover(function(){
  $(".subnav").hide();
  $(".subnav-share").toggle();
});
$("a").hover(function(){
  $("a").css("text-decoration", "none");
});
$(".navButton.btn-share").mouseenter(function(){
  $(".navButton.btn-share").css("background-color", "rgb(120, 132, 255)");
  $("#fas-share").css("color", "#6610F2");
});
$(".navButton.btn-share").mouseleave(function(){
  $(".navButton.btn-share").css("background-color", "#929CFF");
  $("#fas-share").css("color", "#FFFFFF");
});
$(".navButton.btn-menu").mouseenter(function(){
  $(".navButton.btn-menu").css("background-color", "rgb(120, 132, 255)");
  $("#fas-menu").css("color", "#6610F2");
});
$(".navButton.btn-menu").mouseleave(function(){
  $(".navButton.btn-menu").css("background-color", "#929CFF");
  $("#fas-menu").css("color", "#FFFFFF");
});
$("#lis-1").mouseenter(function(){
  $("#lis-1").css("color", "#0945B7");
});
$("#lis-1").mouseleave(function(){
  $("#lis-1").css("color", "#FFF");
});
$("#lis-5").mouseenter(function(){
  $("#lis-5").css("color", "#0945B7");
});
$("#lis-5").mouseleave(function(){
  $("#lis-5").css("color", "#FFF");
});
$("#lis-6").mouseenter(function(){
  $("#lis-6").css("color", "#0945B7");
});
$("#lis-6").mouseleave(function(){
  $("#lis-6").css("color", "#FFF");
});
$("#lis-f").mouseenter(function(){
  $("#lis-f").css("color", "#0945B7");
});
$("#lis-f").mouseleave(function(){
  $("#lis-f").css("color", "#FFF");
});
$("#lis-t").mouseenter(function(){
  $("#lis-t").css("color", "#0945B7");
});
$("#lis-t").mouseleave(function(){
  $("#lis-t").css("color", "#FFF");
});
$("#lis-i").mouseenter(function(){
  $("#lis-i").css("color", "#0945B7");
});
$("#lis-i").mouseleave(function(){
  $("#lis-i").css("color", "#FFF");
});
$("input").focus(function(){
  $(this).css("background-color", "#cccccc");
});
$("textarea").focus(function(){
  $(this).css("background-color", "#cccccc");
});

$(".myImg").click(function(){
  var img_src = $(this).attr("src");
  $("#myModal").css("display", "block");
  $("#modal-img").attr("src", img_src);
  $("#myModal").css("overflow-y", "scroll");
});
$("#close-modal").click(function(){
  $("#myModal").css("display", "none");
});
$("#myModal").click(function(){
  $("#myModal").css("display", "none");
  $("#modal-img").css("display", "block");
});
$("#modal-img").hover(function(){
  $("#modal-img").css("cursor", "auto");
});
