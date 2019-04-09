<template>
    <Dropdown ref="dropdown" transfer placement="left-start" class="collased-menu-dropdown" @on-click="handleClick">
        <!-- <a class="drop-menu-a" type="text" @mouseover="handleMousemove($event, children)">
            <common-icon :size="rootIconSize" :color="textColor" :type="parentItem.icon" /><span class="menu-title" v-if="!hideTitle">{{ showTitle(parentItem) }}</span>
            <Icon style="float: right;" v-if="!hideTitle" type="ios-arrow-forward" :size="16" />
        </a> -->
        <a class="drop-menu-a"><Icon :class="['iconfont',parentItem.icon]" size="20"></Icon></a>
        <DropdownMenu ref="dropdown" slot="list">
            <DropdownItem v-for="child in parentItem.children" :key="`drop-${child.name}`" :name="child.name"><span class="menu-title">{{ showTitle(child) }}</span></DropdownItem>
        </DropdownMenu>
  </Dropdown>
</template>

<script>
    export default {
        name: '',
        props:{
            parentItem: {
                type: Object,
                default: () => {}
            }
        },
        data() {
            return {
            }
        },
        methods:{
            getName (item,children0) {
                // 如果有外链的那种  另外处理  当前项目不涉及外跳
                return children0?item.children[0].name:item.name
            },
            showTitle(item,children0){
                return children0?item.children[0].meta.title:item.meta.title
            },
            handleClick(name){
                this.$emit('on-click', name)
            }
        }
    }
</script>

<style lang="less" scoped>
    a.drop-menu-a{
        display: inline-block;
        padding: 10px 15px;
        width: 100%;
        text-align: center;
        color: #495060;
    }
    .collased-menu-dropdown{
        width: 100%;
    }
</style>