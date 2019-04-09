<template>
    <section class="main">
        <transition name="fade" mode="out-in">
            <!-- <keep-alive :include="cachedViews"> -->
                <router-view></router-view>
            <!-- </keep-alive> -->
        </transition>
    </section>
</template>

<script>
export default {
    name: 'appMain',
    components: {
    },
    data () {
        return {
            msg:'ss'
        }
    },
    computed:{
        cachedViews() {
          // return this.$store.state.tagsView.cachedViews
        }
    },
    methods:{
    },
    mounted(){
    },
    watch: {
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .main{
      background-color: #fff;
      width: 100%;
      min-height: 100%;
  }
</style>
