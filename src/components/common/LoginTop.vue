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
  display: flex;
  background-color:#00c160;
  border-bottom-left-radius: 2.667vw;
  border-bottom-right-radius: 2.667vw;
  color: rgb(255, 255, 255);
  div{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.44vw;
  }
}
</style>