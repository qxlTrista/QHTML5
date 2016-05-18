//引入home 模版
var homeTpl = require('../tpl/home.string');

//定义一个视图
SPA.defineView('home',{
	//将模版写在body 里
	html:homeTpl,
	
	 plugins: [
    'delegated',
    {
      name: 'avalon',
      options: function (vm) {
        vm.homeList = [];
      }
    }
  ],
  
  // 给视图绑定事件
  bindEvents: {
    // 在视图还没有打开的时候触发
    beforeShow: function () {
      // swiper
      var mySwiper = new Swiper('#h-ban-swiper', {
        loop: false,
        pagination : '.swiper-pagination',
        autoplay :3000
      });
    }
  }
	
});
