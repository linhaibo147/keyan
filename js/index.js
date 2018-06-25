//首次登陆弹出阅读阅读承诺书页面	
$(function(){
  //调用框架的弹窗
$.popup('#popup-about1');
popup_layer('popup-about1');
$.closeModal('#close-layer1');
})

/***弹窗方法***/
function popup_layer(value){
	//获取弹窗的高并/2
	var height =  $('#'+value).outerHeight()/2;
	$('#'+value).animate({'marginTop':-height});
	
	 
}
