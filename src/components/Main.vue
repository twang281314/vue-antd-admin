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
                <v-content :style="{ padding: '0 50px' }">
                    <v-breadcrumb :style="{ margin: '12px 0' }">
                        <v-breadcrumb-item>Home</v-breadcrumb-item>
                        <v-breadcrumb-item href="">List</v-breadcrumb-item>
                        <v-breadcrumb-item href="">App</v-breadcrumb-item>
                    </v-breadcrumb>
                    <div style="padding: 24px; background: #fff; min-height: 360px;">Content</div>
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
                }]
            }
        },
        watch: {
            collapsed(val) {
                console.log(val);
            },
        },
    }
</script>