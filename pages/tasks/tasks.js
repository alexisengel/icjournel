// pages/tasks/tasks.js

Page({
  data: {
    tasks: [{ task: "What type of speaker", type: "picture", comp: 20 }, { task: "Car survey", type: "survey", comp: 40 }, { task: "Show us your pets", type: "video", comp: 30 }, { task: "How was your day", type: "blog", comp: 30 }, { task: "Daily commute", type: "video", comp: 40 }, { task: "Food survey", type: "survey", comp: 40 }, { task: "Tell us about your job", type: "blog", comp: 30 }, { task: "Someone intriguing", type: "picture", comp: 30 }],
    types: [{ type: "picture", index: 0 }, { type: "survey", index: 1 }, { type: "video", index: 2 }, { type: "blog", index: 3}],
    count: 0,
    loading: false
    
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '/pages/tasks/task/task'
    })
  },

  moveTask: function(event) {
    console.log(event)
    var type = this.data.tasks[event.target.id].type
    if (type != "survey") {
      var typeUrl = '/pages/Submissions/' + type + '/' + type
      wx.navigateTo({
        url: typeUrl
      })
    }
    else {
      wx.navigateTo({
        url: 'https://www.wjx.cn/jq/41845369.aspx'
      })
    }
  },

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(Date.now());
    console.log("Tasks page has loaded");

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    console.log(Date.now());
    console.log("Tasks page is ready");

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log(Date.now());
    console.log("Tasks page is shown");

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
    console.log(Date.now());
    console.log("Tasks page is hidden");

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