import config from './config'

// 携带token的方式：cookie(不推荐);作为参数放在url中;放在请求头
let token = wx.getStorageSync('token');
export default function (url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      header: {
        authorization: token
      },
      success: (res) => {
        resolve(res.data)
      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}
