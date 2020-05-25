<template>
  <div class="goods">
    <div class="content">
      <div class="menuWrap">
        <ul class="menulist">
          <li class="menu" :class="{active:currentIndex===index}"
            v-for="(good,index) in goods" :key="index">
            <v-icon class="icon" v-if="good.type>=0" size="3" :type="good.type"></v-icon>
            <span>{{good.name}}</span>
          </li>
        </ul>
      </div>
      <div class="goodWrap" ref="goodWrap">
                <ul class="goodList" ref="goodList">
                    <li class="good" v-for="(good,index) in goods" :key="index">
                        <h2 class="goodName">{{good.name}}</h2>
                        <ul class="foodlist">
                            <li class="foodWrap" v-for="(food,index) in good.foods" :key="index">
                                <v-food :food="food"></v-food>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
    </div>
    <div class="cart"></div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import {GETGOODS} from "store/mutation_types.js"
import food from "components/food/food"
export default {
  name: 'goods',
  computed:{
    ...mapState(["goods"])
  },
  methods:{
    ...mapActions([GETGOODS])
  },
  mounted(){
    this[GETGOODS]()
  },
  components:{
    "v-food":food
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .goods
    flex 1
    display flex
    flex-direction  column
    overflow hidden
    .content
      flex 1
      display flex
      overflow hidden
      .menuWrap
        flex-basis 80px
        .menulist
          .menu
            one-px(rgba(7,17,27,.1))
            height 54px
            background #f3f5f7
            font-size 12px
            display flex
            justify-content center
            align-items center
            .icon
              margin-right 3px
            &.active
              background pink 
            &:last-child
              border-none()
      .goodWrap
        flex 1
        overflow hidden
        .goodList
            .good
                .goodName
                    height 26px
                    line-height 26px
                    font-size 12px
                    font-weight 800
                    background #f3f5f7
                    border-left 3px solid #d9dde1
                    padding-left 14px
                    color rgba(147,153,159,1)
                .foodlist
                    .foodWrap
                        one-px(rgba(7,17,27,.1))
                        padding 18px
                        position relative
                        &:after
                            width 80%
                            left 0
                            right 0
                            margin auto
                        &:last-child
                            border-none()

    .cart
      flex-basis 46px

</style>
