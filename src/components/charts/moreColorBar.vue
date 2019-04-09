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
        name: 'ChartmoreColorBar',
        props: {
            value: Object,
            text: String,
            subtext: String
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
                let xAxisData = this.value.xData || [];
                let seriesData =this.value.yData || [];
                seriesData.forEach(item => {
                    item.type = 'bar';
                    item.stack = '总量'
                })
                this.option = {
                    color: ["#6C7FFF", "#FBDD66", "#43E48C"],
                    barWidth: '22px',
                    legend: {
                        show: false
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            
                            type : 'shadow',
                            snap:true  
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '6%',
                        top: '9%',
                        containLabel: true
                    },
                    yAxis: [{
                        type: "value",
                        name: '元',
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
                    xAxis: {
                        type: 'category',
                        data: xAxisData,
                        axisLabel:{
                            color:"rgba(31, 38, 62, .4)",
                            interval:0,
                            rotate:-30
                        },
                        splitLine: {
                            show: false //去掉网格线
                        }
                    },
                    series: seriesData
                };
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
