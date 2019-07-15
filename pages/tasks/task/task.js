// pages/tasks/task/task.js
Page({

  /**
   * Page initial data
   */
  data: {
    taskName: "Tell us about your pets!",
    taskContents: [{ task: "Family picture with your pets", type: "picture" }, { task: "Write about funny things your pet does", type: "blog" }, { task: "Take a video of your pets", type: "video" }, { task: "Take a video of your commute to work", type: "video" }],
    tempPicFilePaths: [],
    picFilePaths: [],
    picLoaded: false,
    picNameConverted: false,
    tempVidFilePaths: [],
    vidFilePath: '',
    blogContent: ''
  },

  findPic: function () {
    var tempPaths;
    var myThis = this
    wx.chooseImage({
      sourceType: ['album', 'camera'],
      success: function (res) {
        tempPaths = res.tempFilePaths
        myThis.setData({
          tempPicFilePaths: tempPaths,
          picLoaded: true
        })
        console.log(myThis.data.tempFilePaths)
        console.log("Should be last")
      }
    })
  },
  bindPicFormSubmit: function (e) {
    var realPaths = []
    if (this.data.picLoaded) {
      console.log("true")
      var x;
      for (x in this.data.tempFilePaths) {
        wx.saveFile({
          tempFilePath: this.data.tempFilePaths[x],
          success: function (res) {
            var savedFilePath = res.savedFilePath
            console.log(savedFilePath)
            realPaths.push(savedFilePath)
          }
        })
        x++;
      }
      if (x == this.data.tempFilePaths.length - 1) {
        console.log(this.data.picFilePaths)
        this.setData({
          picFilePaths: realPaths
        })
        console.log("Saved Pics")
      }
    }
    wx.showToast({
      title: "Sending....",
      icon: "loading",
      duration: 1500
    })
  },

  findVideo: function (event) {
    var myThis = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      success: function (res) {
        myThis.setData({
          tempVidFilePath: res.tempFilePath
        })
        console.log("tempFilePath was saved")
      }
    })
  },

  bindVidFormSubmit: function (e) {
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
  },

  bindBlogFormSubmit: function (e) {
    wx.showToast({
      title: "Sending....",
      icon: "loading",
      duration: 1500
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