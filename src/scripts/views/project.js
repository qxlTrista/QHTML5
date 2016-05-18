// 引入专题模板
var searchTpl = require('../tpl/project.string');

// 定义一个视图
SPA.defineView('project', {
  // 将模板写在body里
  html: searchTpl,

  plugins: [
    'delegated'
  ],

  bindActions: {

  }
});