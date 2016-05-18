// 引入单品模板
var searchTpl = require('../tpl/item.string');

// 定义一个视图
SPA.defineView('item', {
  // 将模板写在body里
  html: searchTpl,

  plugins: [
    'delegated'
  ],
	
	// 给视图定义公共的属性和方法
  init: {
    formatArray: function (arr) {
      var newArr = [];
      for(var i = 0; i < Math.ceil(arr.length/2); i++){
        newArr[i] = [];
        newArr[i][0] = arr[2*i];
        newArr[i][1] = arr[2*i+1];
      }
      return newArr;
    },

    // 定义视图公共的item hot swiper对象
    myHomeHotSwiper: null,

    // 定义视图公共的item swiper对象
    myHomeSwiper: null
  },
	
  bindActions: {
		'tap.slide': function (e) {
      // 获得视图公共的item swiper, 跳转到某个slider
      this.myHomeSwiper.slideTo($(e.el).index());
    },
    'tap.hot.slide': function (e) {
      // 获得视图公共的item hot swiper, 跳转到某个slider
      this.myHomeHotSwiper.slideTo($(e.el).index());
    }
  },
  
   bindEvents: {
    beforeShow: function () {
      // 保存视图对象
      var that = this;

      // 定义item hot swiper，注意这里的that.mySwiper
      that.myHomeHotSwiper = new Swiper('#item-List-swiper', {
        loop: false,
        onSlideChangeStart: function () {
          $('#item-nav li').eq(that.myHomeHotSwiper.activeIndex).addClass('active').siblings().removeClass('active');
        }
      });

      // 定义item swiper，注意这里的that.mySwiper
      that.myHomeSwiper = new Swiper('#item-swiper', {
        loop: false
      });
    }
  }
});