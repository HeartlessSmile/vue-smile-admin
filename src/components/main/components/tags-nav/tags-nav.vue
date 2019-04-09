<template>
    <div class="tags-box">
        <div class="close-con ">
            <Dropdown transfer @on-click="handleTagsOption" style="margin-top:7px;">
                <Button size="small" type="text">
                    <Icon type="ios-close-circle-outline" size="18"/>
                </Button>
                <DropdownMenu slot="list">
                    <DropdownItem name="close-all">关闭所有</DropdownItem>
                    <DropdownItem name="close-others">关闭其他</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div class="scroll-outer" ref="scrollOuter">
            <div class="scroll-body" ref="scrollBody" :style="{left: tagBodyLeft + 'px'}">
                <transition-group name="taglist-moving-animation">
                    <Tag type="dot"
                        v-for="(item, index) in list"
                        ref="tagsPageOpened"
                        :key="`tag-nav-${index}`"
                        :name="item.name"
                        :data-route-item="item"
                        @on-close="handleClose(item)"
                        @click.native="handleClick(item)"
                        :closable="item.name !== $config.homeName"
                        :color="isCurrentTag(item) ? 'primary' : 'default'">
                        {{ item.meta.title }}
                    </Tag>
                    <!-- @contextmenu.prevent.native="contextMenu(item, $event)" -->
                </transition-group>
            </div>
        </div>
        <div class="btn-con left-btn" @click="handleScroll(240)">
            <Icon type="ios-arrow-back" size="18" />
        </div>
        <div class="btn-con right-btn">
            <Icon type="ios-arrow-forward" size="18" @click="handleScroll(-240)" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tagsNav',
        props: {
            list: {
                type: Array,
                default: []
            },
            value: Object,
        },
        data() {
            return {
                tagBodyLeft: 0
            }
        },
        methods: {
            handleTagsOption(name) {
                let res = null;
                let homeName = this.$config.homeName
                if(name=='close-all'){
                    res = this.list.filter(item => item.name === homeName)
                    this.$emit('on-close',res,'all')
                }else if(name=='close-others'){
                    res = this.list.filter(item => item.name==this.value.name || item.name === homeName)
                    this.$emit('on-close',res, 'other',this.value)
                }

            },
            handleScroll(offset) {
                const outerWidth = this.$refs.scrollOuter.offsetWidth
                const bodyWidth = this.$refs.scrollBody.offsetWidth
                if (offset > 0) {
                    this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
                } else {
                    if (outerWidth < bodyWidth) {
                        if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
                            this.tagBodyLeft = this.tagBodyLeft
                        } else {
                            this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
                        }
                    } else {
                        this.tagBodyLeft = 0
                    }
                }
            },
            handleClose(item) {
                this.$emit('on-one-close',item)

            },
            handleClick(item) {
                this.$emit('input',item.name)
            },
            isCurrentTag(item) {
                return item.name==this.value.name
            }
        }
    }
</script>

<style lang="less" scoped>
    .tags-box {
        width: 100%;
        height: 100%;
        border-top: 1px solid #F0F0F0;
        border-bottom: 1px solid #F0F0F0;
        position: relative;
        user-select: none;
        .close-con {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 32px;
            background: #fff;
            text-align: center;
            z-index: 10;
        }
        .btn-con {
            position: absolute;
            top: 0px;
            height: 100%;
            background: #fff;
            padding-top: 3px;
            z-index: 10;
            padding: 6px 4px;
            display: flex;
            align-items: center
        }
        .left-btn {
            left: 0px;
        }
        .right-btn {
            right: 32px;
            border-right: 1px solid #F0F0F0;
        }
        .scroll-outer {
            position: absolute;
            left: 28px;
            right: 61px;
            top: 0;
            bottom: 0;
            box-shadow: 0px 0 3px 2px rgba(100, 100, 100, 0.1) inset;
            .scroll-body {
                height: calc(100% - 1px);
                display: inline-block;
                padding: 1px 4px 0;
                position: absolute;
                overflow: visible;
                white-space: nowrap;
                transition: left .3s ease;
            }
        }
    }
</style>
