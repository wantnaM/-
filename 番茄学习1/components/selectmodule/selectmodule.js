// components/selectmodule/selectmodule.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ""
    },
    text: {
      type: String,
      value: ""
    },
    tags: {
      type: Array,
      value: []
    },
    btmodule:{
      type:Boolean,
      value:false
    },
    inputmodule: {
      type: Boolean,
      value: false
    },
    inputnumber:{
      type:Number,
      value:0
    },
    inputreward: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
   getInput_Number:function(){
     var that = this;
     var inputnumber = that.properties.inputnumber;
     var input_number = []
     for(var index=0;index<inputnumber;index++){
       input_number.push(index+1);
     }
     that.setData({
       input_number: input_number
     })
   }
  },
  lifetimes: {
    attached: function () {
      this.getInput_Number();
    }
  }
})
