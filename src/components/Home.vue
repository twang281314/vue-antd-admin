<template>
    <div>
        <!-- 头部组件 -->
        <div class="top_box">
            <div class="top_box_logo">
            </div>
            <v-menu mode="horizontal" :data="horizontalMnueData" @item-click="createTab"></v-menu>
        </div>
        <div class="tabs-wrap">
        <v-tabs type="editable-card"  hide-add @remove="closeTab" @tab-click="changeTab">
         <v-tab-pane v-if="Object.keys(v).length>0" v-for="(v,k) in tabItems" :tab-key="k" :key="k" :tab="v.label"></v-tab-pane>
        </v-tabs>
    </div>
    <keep-alive>
        <component class="tabs-con clearfix" @childcreatetab="createTab" @childclosetab="closeTab" :is="currentTab" :refresh="refresh"></component>
    </keep-alive>
  </div>
</template>

<script>
    import lib from '../assets/js/lib.js';
    import dashboard from './dashboard.vue';
    import markdown from './markdown.vue';
    import Form from './Form.vue';
    import page4 from './page4.vue';
    export default {
        data: function() {
            return {
                currentTab: "",
                refresh: false,
                compList: {},
                tabItems: {},
                keyIndex: 1,
                horizontalMnueData: [{
                    name: '首页',
                    url: 'dashboard'
                    // icon: 'mail'
                }, {
                    name: 'markdown',
                    // icon: 'appstore',
                    disabled: false,
                    url: 'markdown'
                }, {
                    name: '关于',
                    // icon: 'setting',
                    children: [{
                        name: "Form表单",
                        url: 'Form'
                    }, {
                        name: "选项2",
                        url: 'page4'
                    }]
                }]
            }
        },
        mounted:function() {
            this.compList = {
                "page1": {
                    label: "首页"
                },
                "page2": {
                    label: "产品",
                    hasChild: true,
                    child: [{
                        label: "安卓",
    
                        key: "page2"
    
                    }, {
    
                        label: "苹果",
    
                        key: "page3"
    
                    }]
    
                },
    
                "page4": {
    
                    label: "关于"
    
                },
    
            }
            // 默认加载首页
            this.createTab([{
                name: '首页',
                url: 'dashboard',
                selected: true
            }]);
        },
        methods: {
            reload:function(key) {
                this.currentTab = "dashboard";
                this.$nextTick(() => {
                    this.currentTab = key;
                    this.refresh = true
                })
            },
            createTab:function(items) {
                var item = items.filter(function(item) {
                    return item.selected;
                })
                var key = item[0].url;
                var label = item[0].name;
                var hasChild = !!item[0].children

                if (hasChild) return false;
                if (lib.isEmptyObj(this.tabItems[key])) {
    
                    let obj = {}
                    obj[key] = {
                        label: label
                    }
                    this.tabItems = Object.assign({}, this.tabItems, obj);
                    this.refresh = true;
                } else {
                    this.refresh = false;
                }
                this.currentTab = key;
            },
            changeTab:function(key) {

                this.currentTab = key;
                this.refresh = false;
            },
    
            closeTab:function(key) {
    
                if (key == 'dashboard') {
                    return;
                }
                if (!key) {
    
                    this.tabItems = {
                        "dashboard": {
                            label: "首页"
                        }
                    };
                    this.currentTab = "dashboard";
                } else {
                    let obj = {}
                    obj[key] = {};
                    this.tabItems = Object.assign({}, this.tabItems, obj)
                    this.currentTab = "dashboard";
                }
            }
        },
        components: {
            dashboard,
            markdown,
            Form,
            page4
        }
    }
</script>

<style lang="scss">
  
    .top_box {
        width: 100%;
        height: 35px;
        background-color: #1d80d3;
        .ant-menu {
            font-size: 13px;
            outline: none;
            margin-bottom: 0;
            padding-left: 0;
            list-style: none;
            z-index: 1050;
            color: #fff;
            line-height: 34px;
            float: left;
            background: none;
            :hover{
                color:white;
            }
            .ant-menu-item-selected{
                color:white;
            }
            .ant-menu-submenu{
                color:white;
            }
        }
        .ant-menu-submenu>.ant-menu {
            background-color: #1d80d3;
            border-radius: 0;
            margin-top: 0;
        }
    }
    .top_box .ant-menu-submenu-vertical>.ant-menu {
        top: 1px;
        left: 100%;
        position: absolute;
        min-width: 90px;
        margin-left: -1px;
        z-index: 1050
    }
    .ant-menu .ant-menu-item-active:hover {
        color: #fff
    }
    
    .tabs-wrap {
    
        padding: 20px 10px 0;
    
        // border-bottom:1px solid #d8d8d8;
    
        li {
    
            padding: 7px 40px 7px 12px;
    
            margin: 4px 8px 0 8px;
    
            float: left;
    
            border: 1px solid #ccc;
    
            position: relative;
    
            cursor: pointer;
    
            border-bottom: none;
    
            border-radius: 4px 4px 0 0;
    
            background-color: #efefef;
    
            font-size: 14px;
    
            i {
    
                position: absolute;
    
                top: 7px;
    
                right: 5px;
    
                width: 14px;
    
                height: 14px;
    
                opacity: 0.7;
    
                background: url(../assets/image/icon.png) no-repeat;
    
                background-size: 30px;
    
                &:hover {
    
                    opacity: 1;
    
                }
    
            }
    
            .close {
    
                background-position: -15px 0;
    
            }
    
            .reload {
    
                background-position: 0px 0;
    
                right: 20px;
    
            }
    
            &.active {
    
                color: #20a0ff;
    
                border-color: #20a0ff;
    
                background-color: #fff;
    
            }
    
            &:first-child {
    
                padding: 7px 14px 7px 14px;
                .close,
                .reload {
                    display: none;
                }
                .reload {
                    right: 4px;
                }
            }
        }
    
    }
    .tabs-con {
        padding: 20px;
        color: #333;
    }
</style>
