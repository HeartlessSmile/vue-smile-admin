<template>
    <!--产能统计页面-->
    <div class="wrap">
        <div class="wrap-content">
            <div class="right-date">
                <dateSpecific @change="timeChange"></dateSpecific>
            </div>
            <div class="twoChart">
                <div class="equipment">
                    <div class="commonTitleStyle">
                        <img class="commonImgStyle" src="@/assets/images/triangle.png" alt> 产能设备占比
                    </div>
                    <div>
                        <chart-capacitypie style="width:100%; height:400px" :value="pie_data"></chart-capacitypie>
                    </div>
                </div>
                <!--产能量统计柱状图模块-->
                <div class="energyStatistics">
                    <div class="commonTitleStyle">
                        <img class="commonImgStyle" src="@/assets/images/triangle.png" alt> 产能量统计
                    </div>
                    <chart-bar style="width: 100%; height: 404px;" color="#6C7FFF" :value="barData"></chart-bar>
                </div>
            </div>
            <div class="costStatistics">
                <!--切换图表数据选项模块-->
                <!--产能设备占比饼状图模块-->
                <!--产能费用统计折线图模块-->
                <div class="commonTitleStyle">
                    <img class="commonImgStyle" src="@/assets/images/triangle.png" alt>产能费用统计
                </div>
                <!-- 线 -->
                <div class="lineChart">
                    <chart-line style="width: 100%; height: 408px;" color="#FF2534" :value="lineData" :smooth="false"></chart-line>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        //引入charts
        ChartPie,
        ChartBar,
        ChartLine,
        ChartCapacitypie
    } from "_c/charts/index";

    import dateSpecific from "@/components/dateSpecific/dateSpecific"; //日期插件
    import {
        deepClone
    } from "@/utils/base";
    import {
        firstData,
        secondData,
        threeData,
        fourData
    } from './home.js'
    export default {
        name: "home",
        components: {
            ChartPie,
            ChartBar,
            ChartLine,
            dateSpecific,
            ChartCapacitypie
        },
        data() {
            return {
                pie_data: [
                ],
                barData: {
                    xData: ["图书馆", "操场", "教学3号楼"],
                    yData: [65.4, 56.4, 34.5]
                },
                lineData: {
                }
            };
        },
        // 组件相关方法（函数）
        methods: {
            timeChange(obj) {
                let {
                    type,
                    value
                } = obj;
                this.getPie(type, value)
                this.getBar(type, value)
                this.getLine(type, value)
            },
            getPie(type, date) {
                let data = deepClone(firstData(type, date))
                this.pie_data = data.pieData;
            },
            getBar(type, date) {
                this.barData = deepClone(threeData(type, date));
            },
            getLine(type, date) {
                this.lineData = deepClone(secondData(type, date));
            }
        },
        created() {},
        mounted() {
            this.companyId = this.$store.state.user.companyId;
            let self = this;
            let yearData = String(new Date().getFullYear())
            let type = 'year'
            this.getPie(type, yearData)
            this.getBar(type, yearData)
            this.getLine(type, yearData)
        }
    };
</script>

<style lang="less" scoped>
    .content-detail {
        margin: 0 20px;
    }
    .content-head {
        margin: 20px;
    }
    .cusPie {
        width: 50%;
        margin: 0 23px 0 0;
    }
    .cusBar {
        width: 50%;
    }
    .cusLine {
        width: 100%;
        margin: 20px 0;
    }
    .pull-tab {
        width: max-content;
        right: 100px;
        span {
            display: inline-block;
            width: 48px;
            height: 32px;
        }
    }
    .active-pull {
        background: rgba(53, 81, 250, 1) !important;
        box-shadow: 0px 4px 9px 0px rgba(53, 81, 250, 0.23);
        color: #ffffff !important;
    }
    .monthAndDay span .ivu-select-selected-value {
        background: rgba(243, 246, 254, 1) !important;
    }
    .monthAndDay {
        display: inline-block;
        position: absolute;
        right: 2px;
        bottom: 0;
        /*width: 100%;*/
    }
    .choose {
        border-bottom: 2px solid #3551fa;
        font-weight: 600;
    }
    @import "./home";
</style>
