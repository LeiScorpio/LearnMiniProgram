// pages/home/home.js
// getApp()获取App()产生的示例对象，可以拿到app里面的数据
const app =  getApp()
console.log(app.globalData.name) //输出code

// 注册页面
Page({
  //  页面的初始数据
  data: {
   list: []
  },
  log() {
    console.log('点击!')
  },
  btnClick(event) {
    console.log(event)
  },
  
// 生命周期函数--监听页面加载
  onLoad: function (options) {
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data
        this.setData({
          list: data
        })
      }
    })
  },
// 生命周期函数--监听页面初次渲染完成
  onReady: function () {
  },

// 生命周期函数--监听页面显示
  onShow: function () {
  },

// 生命周期函数--监听页面隐藏
  onHide: function () {
  },

// 生命周期函数--监听页面卸载
  onUnload: function () {
  },

// 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    console.log('下拉刷新');
  },

// 页面上拉触底事件的处理函数
  onReachBottom: function () {
  },

// 用户点击右上角分享
  onShareAppMessage: function () {
  },

// 点击tabbar触发
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  }
})