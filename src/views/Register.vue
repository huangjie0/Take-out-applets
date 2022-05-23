<template>
  <div>
      <LoginTop middletop='注册轻格'></LoginTop>
      <LoginText label="姓名" @inputChange='successInput_1' style="margin:4.167vw 0" placeholder="请输入姓名" type="text" rule="^.{6,16}$"></LoginText>
      <LoginText label="账号" @inputChange='successInput_2' style="margin:4.167vw 0" placeholder=" 请输入账号" type="text" rule="^.{6,16}$"></LoginText>
      <LoginText label="密码" @inputChange='successInput_3' style="margin:4.167vw 0" placeholder="请输入密码" type="password" rule="^.{6,16}$"></LoginText>
      <LoginBtn register="注册" @registerSubmit="registerSubmit"></LoginBtn>
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
        name:'',
        username:'',
        password:''
      }
    },
    methods:{
      registerSubmit(){
       if(this.name!=='' && this.username!=='' && this.password!==''){
          console.log('111')
       }
      },
      successInput_1(text){
        this.name = text
      },
      successInput_2(text){
        this.username = text
      },
      successInput_3(text){
        this.password = text
      }
    }
}
</script>

<style scoped lang='less'>

</style>