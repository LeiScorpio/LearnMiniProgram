// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 接受数据
    title: {
      type: String,
      value: '我是默认标题prop',
      // 可以使用observe监听属性值的改变
      observer(newVal, oldVal) {
        console.log(newVal, oldVal);
      }
    },
    content: String
  },
  // 接受传入的样式
  externalClasses: ['titlecolor'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
