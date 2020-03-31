// opens resume modal
$(document).ready(function(){
  $('.toggle').click(function() {
    $('.ui.modal')
    .modal('setting', 'transition', 'vertical flip')
    .modal('show');   // switch with click function below to enable clicking Toggle button to activate
  });
});

// allows semantic ui to style cards
$('.special.cards .image').dimmer({
  on: 'hover'
});

$('.url.example .ui.embed').embed();


// animates elements in Title section
$('.huge.header').visibility({    // grab parent container
  onBottomVisible: function(calculations) {
    console.log('Shabooom');
    $('#avatar')    // grab individuals under parent
    .transition({
      animation : 'zoom', 
      duration : 1100
    })
    $('#the-title')    // grab individuals under parent
    .transition({
      animation : 'fade left', 
      duration : 2000
    })
  }
});

setTimeout( 
  setInterval(function(){
    $('.huge.header').visibility({    // grab parent container
    onBottomVisible: function(calculations) {
      $('#avatar')    // grab individuals under parent
      .transition({
        animation : 'fly right', 
        duration : 2000
      })
  }});
  }, 5.0*1000) 
, 2000);



// animates elements in Skills section
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

// animates elements in Learning section
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

// animates elements in Certificates section
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
