// pages/survey/survey.js
const app = getApp();
const host = app.globalData.host
Page({

  /**
   * Page initial data
   */
  data: {
    tags: {},
  },

  choose: function (event) {
    console.log(222, event)
    this.setData({
      tags: this.data.tags.push(event.currentTarget.dataset.taskid)
    })
    console.log(this.data.tags)
  },

  tagCreator: function () {

  },
  
  radioChange: function (e) {
    console.log(e)
    const tags = this.data.tags
    tags[e.target.id] = e.detail.value
    console.log(tags)
    this.setData({
      tags: tags
    })
  },

  submit: function () {
    const tags = []
    for (var i in this.data.tags) {
      tags.push(this.data.tags[i])
      console.log(123, tags)
    }
    const page = this
    console.log(page)
    const userId = app.globalData.userId;
    console.log(userId)
    const addt = {
      tags: tags,
      user_id: userId,
      survey_id: page.data.id
    }
    console.log(addt)
    wx.request({
      url: `${host}surveys`,
      method: 'post',
      data: addt
    })
    wx.navigateBack({
      
    })
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(129874, options)
    const survId = options.survey_id
    const host = app.globalData.host
    const page = this;
    console.log(111,Date.now());
    wx.request({
      url: `${host}surveys/${survId}.json`,
      method: 'get',
      success(res) {
        console.log(55, res)
        console.log(66, this)
        const survey = res.data.survey
        console.log(25225, survey)
        page.setData({
          survey: survey,
          id: survId
        })
      }
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