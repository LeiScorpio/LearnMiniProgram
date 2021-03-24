// pages/wxss/wxss.js
Page({
  mixins: [require('../../mixin/themeChanged')],
  data: {
      inputShowed: false,
      inputVal: "",
      nowTime: new Date().toLocaleString(),
      isActive: false
  },
  switchColor() {
      this.setData({
          isActive: !this.data.isActive
      })
  },
  onLoad() {
      setInterval(() => {
          this.setData({
            nowTime: new Date().toLocaleString()
          })
      }, 1000)
  },
  showInput: function () {
      this.setData({
          inputShowed: true
      });
  },
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      });
  },
  clearInput: function () {
      this.setData({
          inputVal: ""
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      });
  }
})