<template>
    <!-- <transition name="msgbox" appear @afterLeave="destroy"> -->
        <div class="s-modal" v-if="show">
            <div class="s-mark"></div>
            <div class="s-box">
                <div class="word">
                    <i class="loading"></i> 正在处理中请稍后
                </div>
            </div>
        </div>
    <!-- </transition> -->
</template>
<script>
    export default {
        data() {
            return {
                show: true,
            }
        },
        methods: {
            destroy() {
                this.$el.remove()
                this.$destroy()
            }
        },
        created() {
            console.log("sloading")
        }
    }
</script>

<style scoped>
    .s-modal {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 999999;
    }
    .s-mark {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0.6;
    }
    .s-box {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .s-cont {
        color: #fff;
        /* box-shadow:0px 2px 20px 0px rgba(0,0,0,0.08); */
        /* border-radius:4px; */
    }
    .title {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.85);
    }
    .title i {
        color: #faad14;
        font-size: 22px;
        margin-right: 16px;
    }
    .cont {
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        margin-left: 40px;
        margin-top: 12px;
    }
    .btn_group {
        margin-top: 25px;
        text-align: right;
    }
    .word {
        color: #fff;
        text-align: center
    }
    .loading {
        width: 20px;
        height: 20px;
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-left: 2px solid #1890FF;
        animation: load 1s linear infinite;
        -moz-animation: load 1s linear infinite;
        -webkit-animation: load 1s linear infinite;
        -o-animation: load 1s linear infinite;
    }
    @-webkit-keyframes load {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @-moz-keyframes load {
        from {
            -moz-transform: rotate(0deg);
        }
        to {
            -moz-transform: rotate(360deg);
        }
    }
    @-o-keyframes load {
        from {
            -o-transform: rotate(0deg);
        }
        to {
            -o-transform: rotate(360deg);
        }
    }
</style>
