                                                                                                                                                                                                                                                                                                                                                                                                                                   


function layer(value){
	$('#overlay').css('display','block');
	var width = $('#'+value).innerWidth();
	var hegiht = $('#'+value).innerHeight();
	$('#'+value).css('display','none');	
	$('#'+value).css('marginTop',-width);	
	$('#'+value).css('display',-height);
	
}
