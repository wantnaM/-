// pages/choosereward/choosereward.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rewards:{
      type:Array,
      value: []
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onInputEvent:function(event){
    var that = this;
    var rewards = that.data.rewards;
    var value = event.detail.value;
    var id = event.target.dataset.id;
    rewards[id-1] = value;
    that.setData({
      rewards:rewards
    });
    // console.log(that.data.rewards);
  }
})