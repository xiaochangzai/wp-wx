/* eslint-disable */
var callBackTemplate = require('./callBackTemplate')
/**
 * 合并对象并过滤空属性
 * @param {Object} o1
 * @param {Object} o2
 * @example
 *  var a = {a:1, b: 2}
 *  var {b, c} = a
 *  var d = {b, c, e:5} 
 *  var e = Object.filtAssign(a, d, e)
 *  console.log(e)
 * @returns {Object} o
 */
Object.filtAssign = function () {
  let o = {}
  for (let i = 0; i < arguments.length; i++) {
    let arg = arguments[i]
    if (typeof arg === 'object') {
      for (let key in arg) {
        if (!o.hasOwnProperty(key) && arg[key] !== undefined) {
          o[key] = arg[key]
        }
      }
    }
  }
  return o
}
class Wp {
  /**
   * 同 wx.canIUse
   * 判断API是否可用
   * @method canIUse
   * @param {String} apiName
   * @example
   *  wp.canIUse('openBluetoothAdapter')
   *  wp.canIUse('getSystemInfoSync.return.screenWidth')
   * @returns {Boolean}
   */
  canIUse(apiName) {
    return wx.canIUse(apiName)
  }

  /**
   * 同wx.getSystemInfoSync
   * 获取系统信息
   * @method getSystemInfoSync
   * @example
   *  let info =  wp.getSystemInfoSync()
   *  console.log(info)
   * @returns {Object} res
   */
  getSystemInfoSync () {
    return wx.getSystemInfoSync()
  }

  /**
   * 同wx.getSystemInfo(Object object)
   * 获取系统信息
   * @method getSystemInfo
   * @example
   * wp.getSystemInfo()
   *  .success(res => {
   *      console.log('获取信息成功')
   *      console.log(res)
   *  })
   */
  getSystemInfo () {
    let o = new callBackTemplate()
    setTimeout(() => {
      wx.getSystemInfo({
        ...o.getCallbackObj()
      })
    }, 0)

    return o
  }

  /**
   * 同 wx.getLaunchOptionsSync()
   * 获取小程序启动时的参数。与 App.onLaunch 的回调参数一致。
   * @example
   *  let info =  wp.getLaunchOptionsSync()
   *   console.log(info)
   * @method getLaunchOptionsSync
   */
  getLaunchOptionsSync () {
    return wx.getLaunchOptionsSync()
  }

  /**
   * wx.switchTab 升级版
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   * @method switchTab
   * @param {String} url 要跳转的路径
   * @example
   *   wp.switchTab('/pages/index/index')
   */
  switchTab (url) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.switchTab({
        url,
        ...o.getCallbackObj(t)
      })
    }, 0)
    return o
  }

  /**
   * wx.reLaunch 升级版
   * 关闭所有页面，打开到应用内的某个页面
   * @method reLaunch
   * @param {String} url 要跳转的路径
   * @example
   * wp.reLaunch('/pages/index/index')
   */
  reLaunch (url) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.reLaunch({
        url,
        ...o.getCallbackObj(t)
      })
    }, 0)
    return o
  }

  /**
   * wx.redirectTo 升级版
   * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
   * @method redirectTo
   * @param {String} url 要跳转的路径
   * @example
   *  wp.redirectTo('/pages/index/index')
   */
  redirectTo (url) {
    let o = new callBackTemplate()
    let t
    t = setTimeout(() => {
      wx.redirectTo({
        url,
        ...o.getCallbackObj(t)
      })
    }, 0)
    return o
  }

  /**
   * wx.navigateTo 升级版
   * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
   * @method navigateTo
   * @param {String} url 要跳转的路径
   * @example
   *   wp.navigateTo({
   *    url: 'test?id=1'
   *  })
   */
  navigateTo (url) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.navigateTo({
        url,
        ...o.getCallbackObj(t)
      })
    }, 0)
    return o
  }

  /**
   * wx.navigateBack 升级版
   * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
   * @method navigateBack
   * @param {String} url 要跳转的路径
   * @example
   *  wp.navigateTo({
   *    url: 'test?id=1'
   *  })
   */
  navigateBack (delta) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.navigateBack({
        delta,
        ...o.getCallbackObj(t)
      })
    }, 0)
    return o
  }

  /**
   * wx.showToast 升级版
   * 显示消息提示框
   * @method showToast
   * @param {Object} data 消息提示框参数
   * @param {String} data.title 提示的内容
   * @param {String} data.icon 图标
   * @param {String} data.image 自定义图标的本地路径，image 的优先级高于 icon
   * @param {Number} data.duration 提示的延迟时间
   * @param {Boolean} data.mask 是否显示透明蒙层，防止触摸穿透
   * @example
   *   wp.showToast({
   *     title: '成功',
   *     icon: 'success',
   *     duration: 2000
   *   })
   */
  showToast (data = {}) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.showToast(Object.filtAssign(data, o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.showModal 升级版
   * 显示模态对话框
   * @method showModal
   * @param {Object} data 显示模态对话框参数
   * @param {String} data.title 提示的标题
   * @param {String} data.content 提示的内容
   * @param {Boolean} data.showCancel 是否显示取消按钮
   * @param {String} data.cancelText 取消按钮的文字，最多 4 个字符
   * @param {String} data.cancelColor 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串
   * @param {String} data.confirmText 确认按钮的文字，最多 4 个字符
   * @param {String} data.confirmColor 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
   * @example
   *   wp.showModal({
   *     title: '提示',
   *     content: '这是一个模态弹窗',
   *   }).success(res => {
   *     if (res.confirm) {
   *       console.log('用户点击确定')
   *     } else if (res.cancel) {
   *       console.log('用户点击取消')
   *     }
   *   })
   */
  showModal (data) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.showModal(Object.assign(data, o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.showLoading 升级版
   * 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
   * @method showLoading
   * @param {Object} data 显示loading 提示框参数
   * @param {String} data.title 提示的内容
   * @param {Boolean} data.mask 是否显示透明蒙层，防止触摸穿透
   * @example
   *   wp.showLoading({
   *     title: '加载中'
   *   }
   */
  showLoading (data) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.showLoading(Object.assign(data, o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.showActionSheet 升级版
   * 显示操作菜单
   * @method showActionSheet
   * @param {Object} data 显示操作菜单参数
   * @param {Array.<string>} data.itemList 按钮的文字数组，数组长度最大为 6
   * @param {String} data.itemColor 按钮的文字颜色
   * @example
   *   wp.showActionSheet({
   *     itemList: ['A', 'B', 'C']
   *   })
   */
  showActionSheet (data) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.showActionSheet(Object.assign(data, o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.hideToast 升级版
   * 隐藏消息提示框
   * @method hideToast
   * @example
   *   wp.hideToast()
   */
  hideToast () {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.hideToast(Object.assign(o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.hideLoading 升级版
   * 隐藏消息提示框
   * @method hideLoading
   * @example
   *   wp.hideLoading()
   */
  hideLoading () {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.hideLoading(Object.assign(o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.showNavigationBarLoading 升级版
   * 在当前页面显示导航条加载动画
   * @method showNavigationBarLoading
   * @example
   *   wp.showNavigationBarLoading()
   */
  showNavigationBarLoading () {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.showNavigationBarLoading(Object.assign(o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.hideNavigationBarLoading 升级版
   * 在当前页面隐藏导航条加载动画
   * @method hideNavigationBarLoading
   * @example
   *   wp.hideNavigationBarLoading()
   */
  hideNavigationBarLoading () {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.hideNavigationBarLoading(Object.assign(o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.setNavigationBarTitle 升级版
   * 动态设置当前页面的标题
   * @method setNavigationBarTitle
   * @param {Object} data 设置标题参数
   * @param {String} data.title 页面标题
   * @example
   *   wp.setNavigationBarTitle()
   */
  setNavigationBarTitle ({
    title
  }) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.setNavigationBarTitle({
        title
      }, Object.assign(o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.setNavigationBarColor 升级版
   * 设置页面导航条颜色
   * @method setNavigationBarColor
   * @param {Object} 设置页面导航条样式参数
   * @param {String} data.frontColor 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000
   * @param {String} data.backgroundColor 背景颜色值，有效值为十六进制颜色
   * @param {Object} data.animation 动画效果
   * @example
   *   wp.setNavigationBarColor({
   *     frontColor: '#ffffff',
   *     backgroundColor: '#ff0000',
   *     animation: {
   *       duration: 400,
   *       timingFunc: 'easeIn'
   *     }
   *   })
   */
  setNavigationBarColor ({
    frontColor,
    backgroundColor,
    animation
  }) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.setNavigationBarColor({
        frontColor,
        backgroundColor,
        animation
      }, Object.assign(o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.setBackgroundTextStyle 升级版
   * 动态设置下拉背景字体、loading 图的样式
   * @method setBackgroundTextStyle
   * @param {Object} data 设置背景文字样式参数
   * @param {String} data.textStyle 下拉背景字体、loading 图的样式。
   * @example
   *   wp.setBackgroundTextStyle({
   *     textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
   *   })
   */
  setBackgroundTextStyle ({
    textStyle
  }) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.setBackgroundTextStyle({
        textStyle
      }, Object.assign(o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.setBackgroundColor 升级版
   * 动态设置下拉背景字体、loading 图的样式
   * @method setBackgroundColor
   * @param {Object} data 设置背景样式参数
   * @param {String} data.backgroundColor 窗口的背景色，必须为十六进制颜色值
   * @param {String} data.backgroundColorTop 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
   * @param {String} data.backgroundColorBottom 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持
   * @example
   *   wx.setBackgroundColor({
   *     backgroundColorTop: '#ffffff', // 顶部窗口的背景色为白色
   *     backgroundColorBottom: '#ffffff', // 底部窗口的背景色为白色
   *   })
   */
  setBackgroundColor ({
    backgroundColor,
    backgroundColorTop,
    backgroundColorBottom
  }) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.setBackgroundColor({
        backgroundColor,
        backgroundColorTop,
        backgroundColorBottom
      }, Object.assign(o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.uploadFile 升级版
   * 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data。使用前请注意阅读相关说明。
   * @method uploadFile
   * @param {Object} data 上传文件请求参数
   * @param {String} data.url 开发者服务器地址
   * @param {String} data.filePath 要上传文件资源的路径
   * @param {String} data.name 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
   * @param {Object} data.header HTTP 请求 Header，Header 中不能设置 Referer
   * @param {Object} data.formData HTTP 请求中其他额外的 form data
   * @example
   *   wp.uploadFile({
   *     url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
   *     filePath: tempFilePaths[0],
   *     name: 'file',
   *     formData: {
   *       user: 'test'
   *     }
   *   }).success(res => {
   *     const data = res.data
   *     // do something
   *   })
   */
  uploadFile ({
    url,
    filePath,
    name,
    header,
    formData
  }) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.uploadFile({
        url,
        filePath,
        name,
        header,
        formData
      }, Object.assign(o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.downloadFile 升级版
   * 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径。使用前请注意阅读相关说明。
   * 注意：请在服务端响应的 header 中指定合理的 Content-Type 字段，以保证客户端正确处理文件类型。
   * @method downloadFile
   * @param {Object} data 下载资源参数
   * @param {String} data.url 下载资源的 url
   * @param {String} data.filePath 指定文件下载后存储的路径
   * @param {Object} data.header HTTP 请求 Header，Header 中不能设置 Referer
   * @example
   *   wp.downloadFile({
    *     url: 'https://example.com/audio/123', // 仅为示例，非真实的接口地址
    *   }).success(res => {
    *      // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    *      if (res.statusCode === 200) {
    *        wx.playVoice({
    *          filePath: res.tempFilePath
    *        })
    *      }
    *   })
    */
   downloadFile ({
     url,
     filePath,
     header
   }) {
     let t
     let o = new callBackTemplate()
     t = setTimeout(() => {
       wx.downloadFile({
         url,
         filePath,
         header
       }, Object.assign(o.getCallbackObj(t)))
     }, 0)
     return o
   }

   /**
   * wx.request 升级版
   * 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data。使用前请注意阅读相关说明。
   * @method request
   * @param {Object} options 调用参数
   * @param {String} options.url 开发者服务器接口地址
   * @param {String | Object | Array | ArrayBuffer} options.data 请求的参数
   * @param {Object} options.header 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json
   * @param {String} options.method HTTP 请求方法
   * @param {String} options.dataType 返回的数据格式
   * @param {String} options.responseType 响应的数据类型
   * @example
   *   wp.request({
   *     url: 'test.php', // 仅为示例，并非真实的接口地址
   *     data: {
   *       x: '',
   *       y: ''
   *     },
   *     header: {
   *       'content-type': 'application/json' // 默认值
   *     },
   *     succe
   *   }).success(res => {
   *      // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
   *      if (res.statusCode === 200) {
   *        wx.playVoice({
   *          filePath: res.tempFilePath
   *        })
   *      }
   *   })
   */
   request ({
     url,
     filePath,
     header
   }) {
     let t
     let o = new callBackTemplate()
     t = setTimeout(() => {
       wx.request({
         url,
         filePath,
         header
       }, Object.assign(o.getCallbackObj(t)))
     }, 0)
     return o
   }

   /**
   * wx.saveImageToPhotosAlbum 升级版
   * 保存图片到系统相册。
   * @method saveImageToPhotosAlbum
   * @param {Object} data 参数
   * @param {String} data.filePath 图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径
   * @example
   *   wp.saveImageToPhotosAlbum()
   *      .success(() => {
   *         // TODO.
   *      })
   */
  saveImageToPhotosAlbum ({filePath}) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.saveImageToPhotosAlbum(Object.assign({filePath}, o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.getImageInfo 升级版
   * 获取图片信息。网络图片需先配置download域名才能生效。
   * @method getImageInfo
   * @param {Object} data
   * @param {String} data.src 图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径
   * @example
   *   wp.getImageInfo({
   *      src: 'images/a.jpg'
   *    }).success(src => {
   *       // TODO.
   *    })
   */
  getImageInfo ({src}) {
    let t
    let o = new callBackTemplate()
    t = setTimeout(() => {
      wx.getImageInfo(Object.assign({src}, o.getCallbackObj(t)))
    }, 0)
    return o
  }

  /**
   * wx.compressImage 升级版
   * 压缩图片接口，可选压缩质量
   * @method compressImage
   * @param {Object} data 选择文件参数
   * @param {String} data.filePath 图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径
   * @example
   *   wp.compressImage({
    *      src: 'images/a.jpg'
    *    }).success(src => {
    *       // TODO.
    *    })
    */
   compressImage ({filePath}) {
     let t
     let o = new callBackTemplate()
     t = setTimeout(() => {
       wx.compressImage(Object.assign({filePath}, o.getCallbackObj(t)))
     }, 0)
     return o
   }

  /**
   * wx.chooseImage 升级版
   * 从本地相册选择图片或使用相机拍照。
   * @method chooseImage
   * @param {Object} data 选择文件参数
   * @param {String} data.count 最多可以选择的图片张数
   * @param {Array<String>} data.sizeType 所选的图片的尺寸
   * @param {Array<String>} data.sourceType 选择图片的来源
   * @example
   *   wx.chooseImage({
   *     count: 1,
   *     sizeType: ['original', 'compressed'],
   *     sourceType: ['album', 'camera'],
   *     success(res) {
   *       // tempFilePath可以作为img标签的src属性显示图片
   *       const tempFilePaths = res.tempFilePaths
   *     }
   *   })
   */
   chooseImage ({filePath}) {
     let t
     let o = new callBackTemplate()
     t = setTimeout(() => {
       wx.chooseImage(Object.assign({filePath}, o.getCallbackObj(t)))
     }, 0)
     return o
   }
}
let wp = new Wp()
exports.wp = wp