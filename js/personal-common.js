//调用操作表的js





/***基本信息操作页***/
function dataTime(value){
	if(value==null || value==undefined){
		value='';
	}
	var dataTime =  '#dateTime'+value;
var calendar = new LCalendar();
calendar.init({
    'trigger': dataTime,//标签id
    'type': 'date',//date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择
    'minDate':'1900-1-1',//最小日期 注意：该值会覆盖标签内定义的日期范围
    'maxDate':'2100-1-1'//最大日期 注意：该值会覆盖标签内定义的日期范围
});
}


/***补充信息操作页***/
function supplementTime(value){
var calendar = new LCalendar();
calendar.init({
    'trigger': '#'+value,//标签id
	'type':'date',
});
}

/***基本信息操作页***/
function personal_information(){
$("#sex").picker({
  toolbarTemplate: '<header class="bar bar-nav">\
  <button class="button button-link pull-left close-picker">取消</button>\
  <button class="button button-link pull-right close-picker">确定</button>\
  <h1 class="title">选择你的姓别</h1>\
  </header>',
  cols: [
    {
      textAlign: 'center',
      values: ['男', '女']
    }
  ]
});		
}



