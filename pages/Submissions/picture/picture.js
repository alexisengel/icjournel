// pages/Submissions/picture/picture.js
var AV = require('/../../../utils/av-weapp-min.js')
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    tempFilePaths: [],
    loading: false,
    picLoaded: false,
    picNameConverted: false,
    grids: [0, 1, 2, 3, 4, 5, 6, 7, 8]
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
    console.log(1000, this)
    this.testFunct(this.data.tempFilePaths)
    this.setData({
      loading: !this.data.loading
    })
    wx.showToast({
      title: "Sending....",
      icon: "loading",
      duration: 1500
    })
    wx.navigateBack({
      delta: 1
    })
  },


  testFunct: function (tempFilePaths) {
    const host = app.globalData.host;
    const page = this
    var lcpaths = [];
    const userId = app.globalData.userId;
    tempFilePaths.forEach((path) => {
      const promise = new Promise((resolve, reject) => {
        const link = new AV.File('file-name', {
          blob: {
            uri: path,
          }, 
        }).save()
          .then(function(file)  {
            lcpaths.push(file.url())
            let dataset = {
              content: file.url(),
              task_id: page.data.taskId,
              user_id: userId
            }
            wx.request({
              url: `${host}datasets`,
              method: 'post',
              data: dataset,
              success: function (res) {
                console.log(22222, res)
              },
              fail: function (res) {
                console.log(55555, res)
              }
            })
          })
          .catch(e => reject(e));
      })
    })
    console.log(lcpaths)  
    this.setData({
      loading: !this.data.loading,
      lcpaths: lcpaths
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