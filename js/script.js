$('.special.cards .image').dimmer({
  on: 'hover'
});

$('.url.example .ui.embed').embed();

/* $('.fluid.card')
  .transition({
    debug     : true,
    animation : 'jiggle',
    duration  : 500,
    interval  : 200
  })
; */

$('#certs').visibility({    // grab parent container
  onBottomVisible: function(calculations) {
      console.log('Shabooom');
      $('.fluid.card')    // grab individuals under parent
      .transition({
        animation : 'swing down', 
        interval : 200
      })
    }
  });

/*       $('#radioslides').visibility({    // grab parent container
  onBottomVisible: function(calculations) {
      console.log('Shabaaam');
      $('.inline.field')    // grab individuals under parent
      .transition({
        animation : 'swing down', 
        interval : 200
      })
}
}); */


/* 
('#upperDiv')
.visibility({
onTopPassed: function(calculations) {
  console.log('Shabooom');
  $('#achievementsTitleDiv')
  .velocity("transition.slideUpBigIn", { stagger: 250 })
  .delay(750)
  .velocity({ opacity: 1 }, 750)
  $('#achievementsDiv')
  .velocity("transition.slideUpBigIn", { stagger: 250 })
  .delay(750)
  .velocity({ opacity: 1 }, 750)

}
});
 */




/* $('.form.radioslides .inline.field')
  .transition('hide')
; */

/* $('.form.radioslides')
  .visibility({
    'hide'
    }
  })
; */

/* let showem = function(){
  $('.form.radioslides .inline.field').transition('scale')
;
}
 
$('.form.radioslides .inline.field').visibility({
  once: false,
  onBottomVisible: function() {
     showem();
  }
})
;

 */

