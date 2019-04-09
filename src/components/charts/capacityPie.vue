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
                    backgroundColor: "#fff",//
                    title: {
                        show: false,
                        text: this.text,
                        subtext: this.subtext,
                        x: 'center',
                        y: "center",
                        textStyle: {
                            fontWeight: "normal",
                            fontSize: 16
                        }
                    },
                    tooltip: {
                        show: true,
                        trigger: 'item',
                        formatter: '{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                       
                        icon:"circle",//右边小圆点
                        itemWidth:8, //右边小圆点宽高
                        itemHeight:8,
                        itemGap :15, //圆点的下边距
                        textStyle: {
                            fontWeight: "normal",
                            fontSize: 12,
                            
                        },
                        // x: 'center',
                        // y: 'bottom',
                        // show: true,
                        // icon: 'circular',
                        orient: "horizontal",
                        // bottom: "0%",
                        // top:"16%",
                        top: "middle",//圆点位置居中对齐
                        right:"6%",
                        width:120,
                        data: legend,
                        // formatter:  function(name){
                        //     let str = name;
                        //     for(let i=0;i<legend.length;i++){
                        //         if(name==legend[i].name){
                        //             str += `${legend[i].unit}`
                        //         }
                        //     }
                        //     return str
                        // },
                    },
                    series: [{
                        type: 'pie',
                        // radius: ['40%', '70%'],
                         selectedMode: "single",
                          radius: ["30%", "60%"], //调粗细左边是空心大小,右边是圆圈外面圆越大他越大
                          center:['36%','47%'], //控制圆的位置，控制左右，控制上下
                          color: [
                            "#5875ff",
                            "#fede41",
                            "#fa528f",
                            "#21a8ee",
                            "#33d9a4",
                            "#fd5c02",
                            "#8d83fe",
                            
                            ],
                        label: {
                            // color: "#000",
                            // formatter: '{b}\n {d}\%',
                            normal: {
                            position: "inner",
                            formatter: "{d}%",

                            textStyle: {
                            color: "#fff",
                            // fontWeight: 'bold',
                            fontSize: 14
                            }
                        }
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
