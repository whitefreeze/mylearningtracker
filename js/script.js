// allows semantic ui to style cards
$('.special.cards .image').dimmer({
  on: 'hover'
});

$('.url.example .ui.embed').embed();

// animates elements in in Skills section
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

// animates elements in in Learning section
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
  }
});

// animates elements in in Learning section
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
