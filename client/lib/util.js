const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getWindowWidth = function(){
  var windowWidth = 320
  try {
    var res = wx.getSystemInfoSync()
    windowWidth = res.windowWidth
  } catch (e) {
    console.error('getSystemInfoSync failed')
  }
  return windowWidth
}

const alert = (content) => {
  wx.showModal({
      content,
      showCancel: false,
      success: function (res) {
          if (res.confirm) {
              //console.log('用户点击确定')
          }
      }
  })
}
const wxAlert = (res) => {
  wx.showModal({
      content: '微信api: '+res.errMsg,
      showCancel: false,
      success: function (res) {
          if (res.confirm) {
              //console.log('用户点击确定')
          }
      }
  })

}

module.exports = {
  formatTime: formatTime,
  getWindowWidth: getWindowWidth,
  alert, 
  wxAlert,
}
