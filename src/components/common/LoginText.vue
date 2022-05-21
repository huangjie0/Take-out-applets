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
    methods:{
        //正则匹配
        handlerulg(){
            const rle = new RegExp(this.rule)
            //将传进来的字符串正则转换成真正的正则表达式
            if(rle.test(this.text)){
                this.$emit('inputChange',this.text)
            }
        }
    },
    data() {
        return {
            text:'',
        }
    },
    watch:{
        text(){
            this.handlerulg()
        }
    }
}
</script>

<style scoped lang='less'>

</style>