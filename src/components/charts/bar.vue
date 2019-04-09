<template>
    <div ref="dom" class="charts chart-bar">
    </div>
</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './theme.json'
    import {
        on,
        off
    } from '@/utils/tools'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'ChartBar',
        props: {
            value: Object,
            text: String,
            color:{
                type:String,
                default:'#467FFF'
            },
            subtext: String,
            yName:{
                type:String,
                default:'kW·h'
            },
        },
        data() {
            return {
                dom: null,
                option: {}
            }
        },
        methods: {
            resize() {
                this.dom.resize()
            },
            init() {
                let xAxisData = this.value.xData || []
                let seriesData = this.value.yData || []
                this.option = {
                    color: [this.color],
                    barWidth: '22px',
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b} : {c} '
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '6%',
                        top: '9%',
                        containLabel: true
                    },
                    title: {
                        text: this.text,
                        subtext: this.subtext,
                        x: 'center',
                        show: false
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxisData,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel:{
                            color:"rgba(31, 38, 62, .4)"
                        },
                        splitLine: {
                            show: false //去掉网格线
                        }
                    },
                    yAxis: [{
                        type: "value",
                        name: `${this.yName}`,
                        nameLocation: 'end',
                        nameTextStyle: { //kwh的字体大小
                            fontSize: 14,
                            color:"rgba(31, 38, 62, .4)",
                            padding: [0,40,0,0],
                        },
                        axisLabel:{
                            color:"rgba(31, 38, 62, .4)"
                        },
                        axisLine: { //去y轴的线
                            show: false
                        },
                        axisTick: { //去小线
                            show: false,
                            alignWithLabel: true
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: "dashed",
                                color: "rgba(243,246,254,1)" //横线的颜色
                            }
                        },
                    }, ],
                    series: [{
                        data: seriesData,
                        type: 'bar',
                    }]
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.init()
                this.dom = echarts.init(this.$refs.dom, 'tdTheme')
                this.dom.setOption(this.option)
                on(window, 'resize', this.resize)
            })
        },
        watch: {
            value: {
                handler: function(val, oldval) {
                     this.$nextTick(() => {
                        this.init()
                        this.dom.setOption(this.option)
                    })
                },
                deep: true
            },
        },
        beforeDestroy() {
            off(window, 'resize', this.resize)
        }
    }
</script>
