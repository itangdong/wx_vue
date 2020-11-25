<template>
  <div>
    <h1>首页</h1>
    <div>
      <img :src="url" v-if="url" alt="">
    </div>
    {{name}}
  </div>
</template>

<script>
import API from '../api/index';
export default {
  name: 'home',
  data(){
    return {
      name: '',
      url: '',
    }
  },
  methods: { 
    getUserInfo(){
      this.$http.get(API.getUserInfo).then((res)=>{
        const { nickname, headimgurl } = res.data.data;
        this.name = nickname;
        this.url = headimgurl;
      })
    }
  },
  mounted(){
    if (this.$cookie.get('openId')) {
      this.getUserInfo();
    }

  }
}
</script>

<style scoped>
</style>
