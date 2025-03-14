// JavaScript Document

jQuery(document).ready(function() {
	jQuery('#slider').nivoSlider({
		pauseTime: 8000,
		pauseOnHover: true,
		captionOpacity: 0.65,
		randomStart: true,
		directionNav: true,
		controlNav: false
	});

	if( jQuery('.remodal').length > 0 && ( window.location.pathname == "/" || window.location.pathname == "/index.html" ) ) {
		var t;
		jQuery(document).on( 'opening', '.remodal', function() {
			jQuery( 'body' ).addClass( 'blurred' );
		});

		jQuery(document).on( 'closed', '.remodal', function() {
			jQuery( 'body' ).removeClass( 'blurred' );
			clearTimeout(t);
		});

		jQuery( 'div[data-remodal-id="modal"]' ).remodal().open();
		var t = window.setTimeout(
			function() { jQuery('button[data-remodal-action="confirm"]').click(); },
			10000
		);
	}
});
