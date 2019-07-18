//app.js
var AV = require('/utils/av-weapp-min.js');

AV.init({
  appId: 'gJ1OdLOdWomwx02zRVmBeq0O-gzGzoHsz',
  appKey: 'WbgV6gHrzPRfu767yuRppC9D'
});

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log("App is launched");

    // 登录
    wx.login({
      success: res => {
        console.log(22, res)
        const code = res.code
        wx.request({
          url: 'http://localhost:3000/login',
          method: 'post',
          data: {code: code}
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function () {
    console.log("App is shown");
  },
  globalData: {
    currentTask: '',
    userInfo: null
  }
})