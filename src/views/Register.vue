<template>
  <div>
      <LoginTop middletop='注册bilbil'></LoginTop>
      <LoginText label="姓名" style="margin:4.167vw 0" placeholder="请输入姓名" type="text" rule="^.{6,16}$"></LoginText>
      <LoginText label="账号" style="margin:4.167vw 0" placeholder=" 请输入账号" type="text" rule="^.{6,16}$"></LoginText>
      <LoginText label="密码" style="margin:4.167vw 0" placeholder="请输入密码" type="password" rule="^.{6,16}$"></LoginText>
      <LoginBtn></LoginBtn>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'

export default {
    name:'Register',
    components:{
      LoginTop, 
      LoginText,
      LoginBtn
    },
    data() {
      return {

      }
    },
}
</script>

<style scoped lang='less'>

</style>