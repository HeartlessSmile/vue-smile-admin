
<template>
    <Sider class="siderContainer">
        <Menu theme="light" width="auto" :open-names="[1,4]" class="sider_menu">
            <template v-for="(item,index) in siderbarArr">
                <!--侧边栏根据vuex中user的sideIndex属性来改变选中样式-->
                <MenuItem :name="index" v-if="item.child && item.child.length==0">
                        <Icon :class="['iconfont',item.icon]"></Icon>
                        <span>{{item.name}}</span>
                </MenuItem>
                <Submenu :name="index" v-else style="margin-bottom:20px">
                    <template slot="title">
                        <Icon :class="['iconfont',item.icon]"></Icon>
                        {{item.name}}
                    </template>
                  <!--侧边栏的子菜单根据vuex中user的sideIndex属性来改变选中样式-->
                  <MenuItem :name="index+'-'+kindex" v-for="(kitem,kindex) in item.child" :key="kindex">
                        {{kitem.name}}
                    </MenuItem>
                </Submenu>
            </template>
             
        </Menu>
    </Sider>
</template>
<script>
    export default {
        name: 'layoutSider',
        components: {},
        data() {
            return {
                siderbarArr:[
                    {
                        name:'统计信息',
                        link:'/meet/joinManage',
                        icon:'icon-tongji',
                        child:[],
                        num: 0
                    },
                    {
                        name:'会议信息',
                        link:'',
                        icon:'icon-hangcheng',
                        child:[
                            {
                                name:'会议信息',
                                link: '/meet/meetInfo/basicInfo',
                                num: '1-0'
                            },
                            {
                                name: '会议门票',
                                link: '/meet/meetInfo/ticketManage',
                                num: '1-1'
                            },
                            {
                                name: '接待信息',
                                link: '/meet/meetInfo/reception',
                                num: '1-2'
                            }
                        ],
                        num: 1
                    },
                    {
                        link: '/meet/signInManage',
                        name:'签到管理',
                        icon:'icon-qiandao',
                        child:[],
                        num: 2
                    },
                    {
                        link: '/meet/userManage',
                        name:'报名名单',
                        icon:'icon-ren',
                        child:[],
                        num: 3
                    },
                    {
                        name:'接待管理',
                        link:'',
                        icon:'icon-hezuo1',
                        child:[
                            {
                                name:'住宿接待',
                                link:'/meet/receptionIndex/accommodation',
                                num: '4-0'
                            },
                            {
                                name: '用餐接待',
                                link: '/meet/receptionIndex/receptionFood',
                                num: '4-1'
                            }
                        ],
                        num: 4
                    },
                    {
                        link: '/meet/record',
                        name:'群发提醒',
                        icon:'icon-iconpj',
                        child:[],
                        num: 5
                    },
                    {
                        link: '/meet/meetSpread',
                        name:'会议推广',
                        icon:'icon-erweima',
                        child:[],
                        num: 6
                    },

                ],
                
            }
        },
        computed: {},
        methods: {
          
        },
        watch: {
            '$route' (to) {

            },
        },
        created(){
        }
    }
</script>

<style scoped>
    .siderContainer{
        background: #fff
    }
    .sider_menu{
        height: 100%;
    }
</style>
