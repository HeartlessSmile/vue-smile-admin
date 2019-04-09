<template>
    <div ref="dom" class="charts chart-line">
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
        name: 'CharLine',
        props: {
            value: Object,
            text: String,
            color:{
                type:String,
                default:'#467FFF'
            },
            yName:{
                type:String,
                default:'kW·h'
            },
            smooth:{
                type:Boolean,
                default:true
            },
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
                let xAxisData = this.value.xData || this.value.xdata  || []
                let seriesData = this.value.yData || this.value.ydata || []
                this.option = {
                    color: [this.color],
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
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b} : {c} '
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxisData,
                        boundaryGap: false,
                        splitLine: {
                            show: false //去掉网格线
                        },
                        axisLabel:{
                            color:"rgba(31, 38, 62, .4)",
                            interval:0,
                            rotate:-30
                        },
                        
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
                        offset:20,
                        axisLine: { //去y轴的线
                            show: false
                        },
                        axisTick: { //去小线
                            show: false,
                            alignWithLabel: true
                        },
                        axisLabel:{
                            color:"rgba(31, 38, 62, .4)"
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
                        smooth:this.smooth,
                        type: 'line',
                        areaStyle: {
                            color: ['#f4f7fe']
                        }
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
