
requirejs.config({

	baseUrl:'.',

	paths:{
		angular: 'vender/angularjs/angular',
		route: 'vender/angularjs/angular-route',
		resource:'vender/angularjs/angular-resource',
		jquery: 'vender/jquery/jquery',
		domReady: 'vender/requirejs/domReady',
		twitter: 'vender/bootstrap/bootstrap',
		scroller: 'vender/jquery.nicescroll'
	},

	shim:{
		'twitter':{
			deps:['jquery']
		},
		angular:{
			exports: 'angular'
		},
		route:{
			deps:['angular']
		},
		resource:{
			deps:['angular']
		}

	}

});

require(['angular','route','resource','twitter',
		 'scripts/app/main/app',
		 'scripts/bootstrap',
		 'scroller'
		 ],function(){
		 	$('.carousel').carousel();//not working
		 	$("html").niceScroll({cursorcolor:"#F00",cursoropacitymax:0.7,boxzoom:false,touchbehavior:false});
		 });