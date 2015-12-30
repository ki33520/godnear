'use strict';

define(['common'],function(common){
	function tabItem(i,a,b){
		$(a).addClass('active').siblings().removeClass('active');
		$(b).eq(i).addClass('active').siblings().removeClass('active');
	}
	$('.tab-container').each(function(){
		var dom = {
			tabItem: $(this).find('.tab-nav .tab-nav-item'),
			tabContent: $(this).find('.tab-content .tab-content-item')
		}
		dom.tabItem.each(function(index,item){
			var tabIndex = common.queryString('type') ? Number(common.queryString('type')) : 0;
			if(tabIndex===index){
				tabItem(index,item,dom.tabContent);
			};
			$(item).on('click',function(){
				var tabContentItem = dom.tabContent.eq(index);
				tabItem(index,item,dom.tabContent);
			});
		});
	});
	$('form').on('submit',function(e){
		var username = $(this.username).val(),
			password = $(this.password).val(),
			p = $(this.p).val();
		console.log(username,password,p);
		return false;
	});
	function add(a,b){
		return a+b;
	};
	return {
		add: add
	};
});