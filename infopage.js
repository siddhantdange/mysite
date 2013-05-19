
$(document).ready(function(){
	$('#tablecontainer #tablelist > ul li').click(function(){
		$('#tablecontainer > #tabledetail > #tabledetailpage').html($('div#' + $(this).attr('id')).html());
	});
});
