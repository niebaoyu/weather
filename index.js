Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:["北京市","北京市","北京市"],
    locationid:"101010100",
    now:''
  },
  changeRegion:function(e){
    this.setData({
      region:e.detail.value
    });
    this.getLocationId();
    this.getWeater();

  },
  // 调用网络api
  getWeater:function(){
    var that=this;
    // var locationid=this.getLocationId();
    // console.log(this.data.locationid);
    //this不能在weixinapi中用
    wx.request({
      url: 'https://devapi.qweather.com/v7/weather/now?',
      data:{
        location:that.data.locationid,
        key:'c0bb9ac59cc6412f98da52a3671ab818'
        
      },
      success:function(res){
        console.log(res.data);
        console.log(that.data.locationid)
        that.setData({now:res.data.now})

      }
    }) 
  },
  getLocationId:function(){
    var that=this;
   return wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup?',
      data:{
        location:that.data.region[1],
        key:'c0bb9ac59cc6412f98da52a3671ab818',
        number:1
      },
      success:(res)=>{
        console.log(res.data.location[0].id)
        that.setData({
          locationid:res.data.location[0].id
        });
        // return res.data.location[0].id;
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getWeater();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})