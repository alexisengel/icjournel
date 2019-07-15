// pages/test/test.js
var AV = require('/../../utils/av-weapp-min.js')


Page({

  /**
   * Page initial data
   */
  data: {

  },


  testFunct: function () {
    var TestObject = AV.Object.extend('TestObject');
    var testObject = new TestObject();
    testObject.save({
      words: 'Hello World!'
    }).then(function (object) {
      alert('LeanCloud Rocks!');
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