<template>
  <div class="login_top">
      <div></div>
      <div>{{middletop}}</div>
      <div></div>
  </div>
</template>

<script>
export default {
    name:'LoginTop',
    //prop接受数据
    props:['middletop']
}
</script>

<style scoped lang='less'>
.login_top{
  height: 12.5vw;
  background-color: #ccba90;
  display: flex;
  color: white;
  div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.44vw;
  }
}
</style>