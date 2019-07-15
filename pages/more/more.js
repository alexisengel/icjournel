// pages/about/about.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  moveTo: function (event) {
    var next = event.target.id
    var nextUrl = '/pages/more/' + next + '/' + next
    wx.navigateTo({
      url: nextUrl
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(Date.now());
    console.log("More page has loaded");

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    console.log(Date.now());
    console.log("More page is ready");

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log(Date.now());
    console.log("More page is shown");

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
    console.log(Date.now());
    console.log("More page is hidden");

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