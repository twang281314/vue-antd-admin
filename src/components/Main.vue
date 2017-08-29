<template>
    <div id="components-layout-demo-side"> 
        <v-layout  :style="{ height: '100%' }">
            <v-sider collapsible v-model="collapsed">
                <div class="logo">管理后台</div>
                <v-menu theme="dark" :mode="collapsed?'vertical':'inline'" :data="menuData3">
                    <template scope="{data}">
                        <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
                        <span :class="{'nav-text':data.icon}">{{data.name}}</span>
                    </template>
                    <template scope="{data}" slot="sub">
                        <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
                        <span class="nav-text">{{data.name}}</span>
                    </template>
                </v-menu>
            </v-sider>
            <v-layout>
                <v-header :style="{ background: '#fff', padding: 0 }"></v-header>
                <v-content :style="{ padding: '0 0px' }">
                    <!-- <v-breadcrumb :style="{ margin: '12px 0' }">
                        <v-breadcrumb-item>Home</v-breadcrumb-item>
                        <v-breadcrumb-item href="">List</v-breadcrumb-item>
                        <v-breadcrumb-item href="">App</v-breadcrumb-item>
                    </v-breadcrumb> -->
                    <div style="padding: 24px; background: #fff; min-height: 700px;">
                        <v-tabs active-tab-key="tab1" type="editable-card" @add="onAdd" @remove="onRemove">
                           <v-tab-pane v-for="tabPane in tabPanes" :tab-key="tabPane.key" :key="tabPane.key" :tab="tabPane.tab"></v-tab-pane>
                       </v-tabs>
                    </div>
                </v-content>
                <v-footer :style="{ textAlign: 'center' }">
                    Vue Antd Admin ©2017 Created by Anytao
                </v-footer>
            </v-layout>
        </v-layout>
    </div>
</template>

<style>
    #components-layout-demo-side{
        height:100%;
    }
    #components-layout-demo-side .logo {
        height: 32px;
        background: #333;
        border-radius: 6px;
        margin: 16px;
    }
    #components-layout-demo-side .ant-layout-sider-collapsed .anticon {
        font-size: 16px;
        margin-left: 8px;
    }
    #components-layout-demo-side .ant-layout-sider-collapsed .nav-text {
        display: none;
    }
    #components-layout-demo-side .ant-layout-sider-collapsed .ant-menu-submenu-vertical > .ant-menu-submenu-title:after {
        display: none;
    }
</style>

<script>
    export default {
        data() {
            return {
                collapsed: false,
                menuData3: [{
                    name: 'User',
                    icon: 'user',
                    children: [{
                        name: 'Tome'
                    },{
                        name: 'Bill'
                    },{
                        name: 'Alex'
                    }]
                },{
                    name: 'Team',
                    icon: 'team',
                    children: [{
                        name: 'Team1'
                    },{
                        name: 'Team2'
                    }]
                },{
                    name: 'File',
                    icon: 'file',
                    selected: true
                }],
                   keyIndex: 1,
                tabPanes: [
                    {key: 'tab1', tab: '选项卡1', content: '选项卡1的内容'},
                    {key: 'tab2', tab: '选项卡2', content: '选项卡2的内容'},
                    {key: 'tab3', tab: '选项卡3', content: '选项卡3的内容'}
                ]
            }
        },
        watch: {
            collapsed(val) {
                console.log(val);
            },
        },
        methods:{
               onAdd() {
                this.tabPanes.push({
                    key: 'newTab' + this.keyIndex,
                    tab: '新选项卡' + this.keyIndex,
                    content: '新选项卡' + this.keyIndex++ + '内容'
                });
            },
            onRemove(tabKey) {
                for (let i = 0; i < this.tabPanes.length; i++) {
                    if (this.tabPanes[i].key == tabKey) {
                        this.tabPanes.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
</script>