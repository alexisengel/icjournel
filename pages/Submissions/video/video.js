// pages/Submissions/video/video.js
Page({

  /**
   * Page initial data
   */
  data: {
    tempFilePath: '',
    vidFilePath: '',
    loading: false
  },

  findVideo: function (event) {
    var myThis = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      success: function (res) {
        myThis.setData({
          tempFilePath: res.tempFilePath
        })
        console.log("tempFilePath was saved")
      }
    })
  },

  bindFormSubmit: function (e) {
    this.setData({
      loading: !this.data.loading
    })
    var myThis = this
    wx.saveFile({
      tempFilePath: myThis.data.tempFilePath,
      success: function (res) {
        var savedFilePath = res.savedFilePath
        console.log(savedFilePath)
        myThis.setData({
          vidFilePath: savedFilePath
        })
      }
    })
    wx.showToast({
      title: "Sending....",
      icon: "loading",
      duration: 1500
    })
    wx:wx.navigateBack({
      delta: 1,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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