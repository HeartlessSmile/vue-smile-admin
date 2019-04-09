<template>
    <div class="header-bar-box">
        <slot></slot>
        <customBreadCrumb :list="breadCrumbList"></customBreadCrumb>
    </div>
</template>

<script>
    import customBreadCrumb from './custom-bread-crumb.vue'
    export default {
        name: 'headerBar',
        props: {
        },
        components: {
            customBreadCrumb
        },
        computed: {
            breadCrumbList() {
                return this.$store.state.app.breadCrumbList
            }
        },
        data() {
            return {
                list: []
            }
        },
        mounted(){
        }
    }
</script>

<style lang="less" scoped>
    .header-bar-box {
        display: flex;
        align-items: center;
        height: 100%;
    }
</style>