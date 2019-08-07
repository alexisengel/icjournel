// pages/Submissions/video/video.js
var AV = require('/../../../utils/av-weapp-min.js')
const app = getApp();
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
    const host = app.globalData.host;
    const userId = app.globalData.userId;
    const page = this;
    return new Promise((resolve, reject) => {
      new AV.File('file-name', {
        blob: {
          uri: tempFilePath,
        },
      }).save()
        .then(function(file) {
          let dataset = {
            content: file.url(),
            task_id: page.data.taskId,
            user_id: userId
          }
          wx.request({
            url: `${host}datasets`,
            method: 'post',
            data: dataset
          })
        })
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
    this.setData({
      taskId: options.taskId,
      comp: options.comp,
      name: options.name
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