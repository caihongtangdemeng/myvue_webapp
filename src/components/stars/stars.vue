<template>
  <div class="stars">
    <div class="star"></div>
  </div>
</template>

<script>
export default {
  name: 'v-stars',
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .stars
    display inline-flex
    .star 
      background-size 100%
      background-repeat  no-repeat
    &.stars-48
      .star
        width 20px
        height 20px
        margin-right 12px
        &:last-child
          margin-right 0
        &.on 
          bg-image(star48_on)
        &.half 
          ba-image(star48_half)
        &.off
          bg-image(star48_off)
    &.stars-36
      .star
          width 15px
          height 15px
          margin-right 9px
          &:last-child
              margin-right 0
          &.on
              bg-image(star36_on)
          &.half
              bg-image(star36_half)
          &.off
              bg-image(star36_off)
    &.stars-24
      .star
          width 10px
          height 10px
          margin-right 6px
          &:last-child
              margin-right 0
          &.on
              bg-image(star24_on)
          &.half
              bg-image(star24_half)
          &.off
              bg-image(star24_off)
</style>
