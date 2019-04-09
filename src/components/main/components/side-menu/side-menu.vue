
<template>
    <div class="siderContainer">
        <slot></slot>
        <Menu theme="light" width="auto" class="sider_menu" ref="menu" v-show="!collapsed" @on-select="handleSelect" :active-name="activeName" :open-names="openedNames">
            <template v-for="(item,index) in menuList">
                <!--侧边栏根据vuex中user的sideIndex属性来改变选中样式-->
                <MenuItem :name="getName(item,true)" v-if="item.children && item.children.length==1" :key="`menu-${item.name}`">
                        <Icon :class="['iconfont',item.icon]"></Icon>
                        <span>{{showTitle(item,true)}}</span>
                </MenuItem>
                <Submenu :name="getName(item)" v-else style="margin-bottom:10px">
                    <template slot="title">
                        <Icon :class="['iconfont',item.icon]"></Icon>
                        {{showTitle(item)}}
                    </template>
                    <MenuItem :name="getName(kitem)" v-for="(kitem,kindex) in item.children" :key="`menu-${kitem.name}`">
                        {{showTitle(kitem)}}
                    </MenuItem>
                </Submenu>
            </template>
        </Menu>
        <div class="menu-icon-box" v-show="collapsed">
            <template v-for="item in menuList">
                <!--  -->
                <collapsed-menu v-if="item.children && item.children.length > 1" :parent-item="item" @on-click="handleSelect">
                </collapsed-menu>
                <Tooltip v-else transfer :content="showTitle(item,true)" placement="right" :key="`drop-menu-${item.name}`" class="collased-menu-dropdown">
                    <a class="drop-menu-a" @click="handleSelect(getName(item,true))">
                        <Icon :class="['iconfont',item.icon]" size="20"></Icon>
                    </a>
                </Tooltip>
            </template>
        </div>
    </div>
</template>
<script>
    import collapsedMenu from './collapsed-menu.vue';
    import {goRouter} from '@/utils/utils'
    export default {
        name: 'side-menu',
        components: {
            collapsedMenu
        },
        props: {
            collapsed: {
                type: Boolean
            },
            activeName:{
                type: String
            },
            menuList:{
                type:Array,
                default:()=>{
                    return []
                }
            }
        },
        data() {
            return {
                openedNames:['meetInfo','receptionManage']
            }
        },
        computed: {},
        methods: {
            handleSelect(name) {
                this.$emit('on-select',name)
            },
            getName (item,children0) {
                // 如果有外链的那种  另外处理  当前项目不涉及外跳
                return children0?item.children[0].name:item.name
            },
            showTitle(item,children0){
                return children0?item.children[0].meta.title:item.meta.title
            }
        },
        watch: {
            '$route' (to) {},
        },
        created() {},
        mounted(){
            let arr = []
            let obj =this.menuList.find(item=>{
                return item.children.some(kitem=>kitem.name==this.activeName)
            })
            if(obj){
                arr.push(obj.name)
                this.openedNames = arr 
                let self = this;
                this.$nextTick(() => {
                    self.$refs.menu.updateOpened();
                    self.$refs.menu.updateActiveName();
                })
            }
        }
    }
</script>

<style scoped>
    .siderContainer {
        background: #fff;
        min-height: 100%;
    }
    .sider_menu {
        height: 100%;
    }
    .menu-icon-box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    a.drop-menu-a {
        display: inline-block;
        padding: 10px 15px;
        width: 100%;
        text-align: center;
        color: #495060;
    }
    .collased-menu-dropdown {
        width: 100%;
    }
</style>
