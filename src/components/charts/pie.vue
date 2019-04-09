<template>
    <div ref="dom" class="charts chart-pie">
    </div>
</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './theme.json'
    import {
        on,
        off
    } from '@/utils/tools'
import lineVue from './line.vue';
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'ChartPie',
        props: {
            value: Array,
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
                let length = this.value.length;
                let legend = this.value.map(item=> {
                    let obj = {
                        name:item.name,
                        icon: 'circle',
                        unit:item.unit
                    } 
                    return obj
                })
                this.option = {
                    title: {
                        show: false,
                        text: this.text,
                        subtext: this.subtext,
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b} : {c} ({d}%)'
                    },
                    legend: {
                        x: 'center',
                        y: 'bottom',
                        show: true,
                        icon: 'circular',
                        data: legend,
                        formatter:  function(name){
                            let str = name;
                            for(let i=0;i<legend.length;i++){
                                if(name==legend[i].name){
                                    str += `  ${legend[i].unit}`
                                }
                            }
                            return str
                        },
                    },
                    series: [{
                        type: 'pie',
                        radius: ['40%', '70%'],
                        label: {
                            color: "#000",
                            formatter: '{b}\n {d}\%',
                        },
                        labelLine: {
                            length: 15,
                            length2: 120,
                            lineStyle: {
                                color: '#DFE5F9',
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: this.value,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
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
                    this.init()
                    this.dom.setOption(this.option)
                },
                deep: true
            },
        },
        beforeDestroy() {
            off(window, 'resize', this.resize)
        }
    }
</script>
