// pages/survey/surveyList.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {

  },

  chooseSurvey: function (e) {
    console.log(e)
    const survId = e.currentTarget.dataset.survey_id
    wx.navigateTo({
      url: `/pages/survey/survey?survey_id=${survId}`,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const host = app.globalData.host;
    const page = this;
    console.log(Date.now());
    const dataG = app.globalData;
    console.log(dataG)
    const userId = dataG.userId;
    console.log(22, userId)
    wx.request({
      url: `${host}surveys?user_id=${userId}.json`,
      method: 'get',
      success(res) {
        console.log(res)
        console.log(this)
        page.setData({
          surveys: res.data
        })
      }
    });

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