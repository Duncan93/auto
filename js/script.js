// $(function() {
// 	// $('#choose-existing').click(function() {
// 	// 	$('#homescreen').css('visibility','hidden');
// 	// 	$('#dashboard').css('visibility','visible');
// 	// })
// })

$(document).ready(function() {

	$("#slider-vertical").slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );

    $("[name='my-checkbox']").bootstrapSwitch();

    //Code
});

// $(function() {
    
//   });

  