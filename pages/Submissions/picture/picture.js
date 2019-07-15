// pages/Submissions/picture/picture.js
var AV = require('/../../../utils/av-weapp-min.js')

Page({

  /**
   * Page initial data
   */
  data: {
    tempFilePaths: [],
    picFilePaths: [],
    loading: false,
    picLoaded: false,
    picNameConverted: false

  },

  findPic: function () {
    var tempPaths;
    var myThis = this
    wx.chooseImage({
      sourceType: ['album', 'camera'], 
      success: function (res) {
        tempPaths = res.tempFilePaths
        myThis.setData({
          tempFilePaths: tempPaths,
          picLoaded: true
        })
        console.log(myThis.data.tempFilePaths)
        console.log("Should be last")
      }
    })
    
  },

  bindFormSubmit: function (e) {
    console.log(this)
    this.testFunct(this.data.tempFilePaths)
    var realPaths = []
    this.setData({
      loading: !this.data.loading
    })
    wx.showToast({
      title: "Sending....",
      icon: "loading",
      duration: 1500
    })
  },


  testFunct: function (tempFilePaths) {
    tempFilePaths.forEach((path) => {
      return new Promise((resolve, reject) => {
        new AV.File('file-name', {
          blob: {
            uri: path,
          },
        }).save()
          .then(file => resolve(file.url()))
          .catch(e => reject(e));
      })
    })  
    this.setData({
        loading: !this.data.loading
      })  
  },

  whatTask: function () {

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