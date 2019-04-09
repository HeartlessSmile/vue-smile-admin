<template>
    <div>
        报名名单
        <flat-pickr v-model="startTime" :config="config"></flat-pickr>
    </div>
</template>

<script>
    let config = {
        confirmIcon: "",
        wrap: true,
        enableTime: true,
        time_24hr: true,
        altFormat: 'Y-m-d H:i',
        altInput: true,
        dateFormat: 'Y-m-d H:i',
        // minDate:new Date(),
        minuteIncrement: 30,
        defaultHour: 0,
        defaultMinute: 0,
        activeIndex: null,
        minDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    }
    export default {
        name: 'SignUser',
        data() {
            return {
                startTime:'2019-3-22',
                config:config
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>