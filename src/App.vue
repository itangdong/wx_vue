<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import wx from 'weixin-js-sdk';
import API from './api/index';
// import util from './util/index';
export default {
  name: 'App',
  methods: {
    // 检查用户是否授权过
    checkUserAuth(){
      const openId = this.$cookie.get('openId');
      if (!openId) {
        window.location.href = API.redirect;
      } else {
        this.getWxconfig();
      }
    },
    // 获取微信配置
    getWxconfig(){
      const url = API.wxConfig + '?url=' + location.href.split('#')[0];
      this.$http.get(url).then((response) => {
        const res = response.data;
        if (res.code === 0) {
          const data = res.data;
          wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名
            jsApiList: data.jsApiList, // 必填，需要使用的JS接口列表
          })
        }
        wx.ready(() => {
          // util.initShareInfo(wx);
          wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
              var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
              console.log(localIds);
            }
          });
        })
      })
    }
  },
  mounted(){
    this.checkUserAuth();
    // window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx24e1909729293837&redirect_uri=http%3A%2F%2Fi.tangdong.com%2F%23%2Findex&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect"
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
