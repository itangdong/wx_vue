export default {
  initShareInfo(wx){
    const shareInfo = {
      title: '标题',
      des: '描述',
      link: 'http://i.tangdong.com/#/index',
      imgUrl:'',
    }
    // 分享到QQ空间
    wx.updateTimelineShareData(shareInfo);
  }
}