// pages/Submissions/survey/survey.js
const AV = require('../../../utils/av-weapp-min.js');
const Survey = require('../../../model/survey.js');

var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {

  },

  bindFormSubmit: function (e) {
    // Local storage
    console.log(e)
    var review = e.detail.value.review
    // ...

    // Leancloud permissions
    var acl = new AV.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(true);

    // Leancloud storage
    setTimeout(function () {
      new Survey({
        review: review
        // ...
      }).setACL(acl).save().catch(console.error);

      // Redirect user
      wx.reLaunch({
        url: '/pages/tasks/tasks'
      });
    }, 2000);
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