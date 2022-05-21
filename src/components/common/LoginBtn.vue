<template>
  <div class="btnparent">
    <div class="loginbtn">
      {{register}}
    </div>
  </div>
</template>

<script>
export default {
    name:'LoginBtn',
    props:['register']

}
</script>

<style scoped lang='less'> 
.btnparent{
  padding: 0.667vw 1.333vw;
}
.loginbtn{
  height:9.97vw;
  background-color:#ccba90;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:50px;
}
</style>