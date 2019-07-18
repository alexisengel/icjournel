// pages/Submissions/video/video.js
Page({

  /**
   * Page initial data
   */
  data: {
    tempFilePath: '',
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
    this.testFunct(this.data.tempFilePath)
    this.setData({
      loading: !this.data.loading
    })
    var myThis = this
    wx.showToast({
      title: "Sending....",
      icon: "loading",
      duration: 1500
    })
    wx:wx.navigateBack({
      delta: 1,
    })
  },

  testFunct: function (tempFilePath) {
    return new Promise((resolve, reject) => {
      new AV.File('file-name', {
        blob: {
          uri: tempFilePath,
        },
      }).save()
        .then(file => resolve(file.url()))
        .catch(e => reject(e));
    })
    this.setData({
      loading: !this.data.loading
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