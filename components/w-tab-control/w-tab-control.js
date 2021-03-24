// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: [],
      observer(newV,oldV) {
        console.log(newV);
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItem(event) {
      // 接收传过来的参数
      const indexItem = event.currentTarget.dataset.index
      // console.log(indexItem);
      this.setData({
        currentIndex: indexItem
      })
      // 通知页面内部的点击事件
      this.triggerEvent('itemClick',{index:indexItem, title: this.properties.titles[indexItem]})
    }

  }
})
