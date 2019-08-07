// pages/tasks/tasks.js
const app = getApp();
const newUserId = app.globalData.userId;

Page({
  data: {
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
    var type = this.data.tasks[event.target.id].category
    var id = event.currentTarget.dataset.taskid
    var comp = event.currentTarget.dataset.comp
    var name = event.currentTarget.dataset.name
    console.log(id)
    if (type != "survey") {
      var typeUrl = '/pages/Submissions/' + type + '/' + type + "?taskId=" + id + "&comp=" + comp + "&name=" + name
      console.log(typeUrl)
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
    const host = app.globalData.host;
    const page = this;
    console.log(Date.now());
    const dataG = app.globalData;
    console.log(dataG)
    const userId = dataG.userId;
    console.log(22, userId)
    wx.request({
      url: `${host}tasks.json?user_id=${userId}`,
      method: 'get',
      success(res) {
        console.log(res)
        console.log(this)
        page.setData({
          tasks: res.data
        })
      }
    });
    console.log("Tasks page has loaded");

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