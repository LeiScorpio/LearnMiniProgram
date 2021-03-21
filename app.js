App({
  globalData: {
    name: 'coder',
    age: 18
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // 这里也可以获取打开的方式
    console.log(options.scene);
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // 通过options.scene获取用户打开小程序的方式
    switch (options.scene) {
      case 1001:
        console.log(1001);
        break;
      case 1005:
        console.log(1005);
        break;
    }
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
