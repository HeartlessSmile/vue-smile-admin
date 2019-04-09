<template>
    <div class="custom-box">
        <Breadcrumb>
            <BreadcrumbItem to="/" key="bread-crumb-home">
                <Icon type="md-home" />首页
            </BreadcrumbItem>
            <BreadcrumbItem :to="item.to" v-for="(item,index) in list" :key="`bread-crumb-${index}`">{{item.meta.title}}</BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>

<script>
    export default {
        name: 'custom-bread-crumb',
        props:{
            list:{
                type:Array,
                default:[]
            }
        },
        data() {
            return {
            }
        },
        mounted(){
        }
    }
</script>

<style lang="less" scoped>
    .custom-box{
        margin-left: 30px
    }
</style>