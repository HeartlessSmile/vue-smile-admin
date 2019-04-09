<template>
    <Layout class="main" style="height: 100%" >
        <Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
            <SideMenu :collapsed="collapsed" @on-select="turnToPage" :menuList="menuList" :active-name="$route.name">
                <div class="logo-con" @click="handleCollapsedChange">
                    <img v-show="!collapsed" :src="maxLogo" key="max-logo" height="100%" />
                    <img v-show="collapsed" :src="minLogo" key="min-logo" height="100%" />
                </div>
            </SideMenu>
        </Sider>
        <Layout>
            <Header class="layout_header">
                <HeaderBar>
                    <div type="text" :class="['sider-trigger-a', collapsed ? 'collapsed' : '']">
                        <Icon type="md-menu" size="20" @click="handleCollapsedChange" />
                    </div>
                </HeaderBar>
            </Header>
            <Content class="main-content-con">
                <Layout class="main-layout-con">
                    <div class="tag-nav-wrapper">
                        <!-- <tags-nav :value="$route" @input="handleClick" :list="tagNavList" @on-close="handleCloseTag" /> -->
                        <tags-nav @input="handleClick" :list="tagNavList" :value="$route" @on-close="handleCloseTag" @on-one-close="handCloseOne"/>

                    </div>
                    <Content class="content-wrapper">
                        <!-- <keep-alive :include="cacheList"> -->
                        <router-view/>
                        <!-- </keep-alive> -->
                    </Content>
                </Layout>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
    import SideMenu from './components/side-menu/index';
    import HeaderBar from './components/header-bar/index';
    import TagsNav from './components/tags-nav/index';
    import minLogo from '@/assets/images/logo-min.jpg'
    import maxLogo from '@/assets/images/logo.jpg'
    import {getNewTagList} from '@/utils/utils'
    import {
        mapMutations,
        // mapActions,
        // mapGetters
    } from 'vuex'
    export default {
        name: '',
        data() {
            return {
                collapsed: false,
                minLogo,
                maxLogo
            }
        },
        computed:{
            menuList() {
                return this.$store.getters.menuList
            },
            tagNavList () {
                return this.$store.state.app.tagNavList
            },

        },
        components: {
            SideMenu,
            HeaderBar,
            TagsNav
        },
        methods: {
             ...mapMutations([
                'setBreadCrumb',
                'setTagNavList',
                'addTag',
                'closeTag',
            ]),
            handleCollapsedChange(state) {
                this.collapsed = !this.collapsed
            },
            turnToPage(route){
                let {
                    name,
                    params,
                    query
                } = {}
                name = route
                 this.$router.push({
                    name
                })
            },
            handCloseOne(item){
                if(item.name==this.$route.name){
                    let index =  this.tagNavList.findIndex(citem=>item.name==citem.name)-1;

                    this.turnToPage( this.tagNavList[index].name)
                }
                this.closeTag(item)
            },
            handleCloseTag (res, type, route) {
                if (type === 'all') {
                    this.turnToPage("home")
                }
                this.setTagNavList(res)
            },
            handleClick(name){
                this.turnToPage(name)
            }
        },
        watch:{
            '$route' (newRoute) {
                const { name, query, params, meta } = newRoute
                this.addTag({
                    route: { name, query, params, meta },
                    type: 'push'
                })
                this.setBreadCrumb(newRoute);
                this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
            }
        },
        mounted(){
            this.setTagNavList()
            this.setBreadCrumb(this.$route)

            const { name, params, query, meta } = this.$route
            this.addTag({
                route: { name, params, query, meta }
            })

        }
    }
</script>
<style scoped lang="less">
    @import "./main.less";
    .logo-con {
        width: 100%;
        height: 64px;
        padding: 5px 10px;
    }
    .trans {
        transition: transform .2s ease;
    }
    .sider-trigger-a {
        color: #5c6b77;
        i {
            .trans;
            cursor: pointer;
        }
        &.collapsed i {
            transform: rotateZ(90deg);
            .trans;
        }
    }
    .tag-nav-wrapper{
        height: 40px;
        background: #F0F0F0;
    }
</style>
