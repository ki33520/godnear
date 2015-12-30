'use strict';

define(['jq'],function(){
	return {
		testAct: function(str,reg){
			return(reg.test(str));
		},
		queryString: function(str){
			var sValue=location.search.match(new RegExp("[\?\&]"+str+"=([^\&]*)(\&?)","i"));
			return sValue?sValue[1]:sValue;
		},
	}
})