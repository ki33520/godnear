'use strict';

define(['common'],function(){
	console.log($)
	function add(a,b){
		return a+b;
	};
	return {
		add: add
	};
});