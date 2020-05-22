<template>
  <div id="app">
    <v-head></v-head>
     <div class="navs">
      <div class="item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import head from "components/head/head.vue"
  export default {
    name:'App',
    components:{
      "v-head":head
    }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "./common/stylus/mixin.styl"
   #app
      width 100%
      height 100%
      overflow hidden
      .navs
        display flex
        width 100%
        height 40px
        line-height 40px
        one-px(rgba(7,17,27,.1))
        .item
          flex  1
          & > a
            font-size 14px
            display block
            text-decoration none
            text-align center
            width 100%
            height 100%
            color  rgba(77,85,93,1)
            &.active
              color rgba(240,20,20,1)

</style>>


