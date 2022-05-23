<template>
  <div class="btnparent" @click="registerBtn()">
    <div class="loginbtn">
      {{register}}
    </div>
  </div>
</template>

<script>
export default {
    name:'LoginBtn',
    props:['register'],
    methods:{
      registerBtn(){
        this.$emit('registerSubmit')
      }
    }
}
</script>

<style scoped lang='less'> 
.btnparent{
  padding: 0.667vw 1.333vw;
}
.loginbtn{
  height:9.97vw;
  color: rgb(255, 255, 255);
  background-color:#00c160;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:50px;
}
</style>