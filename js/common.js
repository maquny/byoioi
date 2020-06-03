
//사이드 메뉴
//.menu_depth1 ul li ul li
var sideMenu = {
	init: function(obj){
		var obj = obj.children('.menu_depth1');
		for(var i = 0;obj.length > i;i++){
			var objChild = obj.eq(i);
			if(objChild.children('ul').length > 0){//.menu_depth1중 ul 를 보유한 .menu_depth1 찾기
				var objChilder = objChild.children('ul');
				for(var j = 0;objChilder.children('li').length > j;j++){//.menu_depth1중 ul를 보유한 객체의 자식 li중 ul 보유한 li찾기
					var objChilderList = objChilder.children('li').eq(j);
					objChilderList.children('ul').hide();//.menu_depth1 ul li ul
					if(objChilderList.children('ul').length > 0){//.menu_depth1 ul li ul 보유한 li만 .plus_btn append
						objChilderList.append('<div class="plus_btn"></div>');
					}
				}
			}
		}
		sideMenu.actionUI();
	},

	actionUI: function(){
		$('.plus_btn').off('click').on('click', function(){
			var target = $(this);
			if(target.parent().hasClass('open')){
				target.parent().removeClass('open');
				target.parent().children('ul').slideUp();
			} else {
				if(target.parent().parent().children('li').hasClass('open') != false){
					target.parent().parent().children('li').removeClass('open');
					target.parent().parent().children('li').children('ul').slideUp();
				}
				target.parent().addClass('open');
				target.parent().children('ul').slideDown();
			}
		});
	}
}

$(document).ready(function(){
	var sideMenuObj = $('.side_menu');
	if(sideMenuObj.length > 0) sideMenu.init(sideMenuObj); //side_menu 실행
});
	