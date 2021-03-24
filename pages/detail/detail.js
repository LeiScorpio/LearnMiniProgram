// pages/detail/detail.js
Page({
  backHome() {
    // 返回页面
    wx.navigateBack({
      // 设置返回的层级
      delta: 1
    })
  },

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 在这里可以拿到页面跳转传递的数据
    console.log(options);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // 获取首页页面对象，getCurrentPages()可以获取当前活跃的页面
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]
    // 返回首页时，修改首页的数据
    home.setData({
      title: '呵呵呵'
    })

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})