$('.special.cards .image').dimmer({
  on: 'hover'
});

$('.url.example .ui.embed').embed();

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

$('#skills').visibility({    // grab parent container
  onOnScreen: function(calculations) {
      console.log('Shabaaam');
      $('#skills tr td strong')    // grab individuals under parent
      .transition({
        animation : 'fade',
        interval : 100
      })
      $('#skills tr td i')    // grab individuals under parent
      .transition({
        animation : 'fade',
        interval : 35
      })
    }
  });

  $('#learning').visibility({    // grab parent container
  onOnScreen: function(calculations) {
      console.log('Shapooo');
      $('.status')    // grab individuals under parent
      .transition({
        animation : 'fade',
        interval : 300
      })
      $('.year, .course, .tutor')    // grab individuals under parent
      .transition({
        animation : 'fade',
        interval : 100
      })


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


