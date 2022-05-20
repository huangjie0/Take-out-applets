<template>
  <div>
      <van-field v-model="text" :label="label" :type='type' 
      :placeholder="placeholder" :rule='rule'/>
  </div>
</template>

<script>
export default {
    name:'LoginText',
    props:['label','type','placeholder','rule'],
    data() {
        return {
            text:'',
        }
    },
}
</script>

<style scoped lang='less'>

</style>