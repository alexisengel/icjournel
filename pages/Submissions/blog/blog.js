// pages/Submissions/blog/blog.js
Page({

  /**
   * Page initial data
   */
  data: {
    loading: false,
    content: ''
  },

  bindFormSubmit: function (e) {
    const page = this
    const content = e.detail.value.content;
    const userId = 10;
    const dataset = {
      content: content,
      task_id: page.data.taskId,
      person_id: userId
    }
    console.log(dataset)
    console.log(e)
    wx.request({
      url: 'http://localhost:3000/datasets',
      method: 'post',
      data: dataset
    })
    this.setData({
      loading: !this.data.loading
    })
    wx.showToast({
      title: "Sending....",
      icon: "loading",
      duration: 1500
    })
    wx.navigateBack({
      
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      taskId: options.taskId
    })

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})