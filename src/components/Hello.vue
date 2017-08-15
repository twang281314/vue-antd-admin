<template>
   <v-tabs active-tab-key="tab1" type="editable-card" @add="onAdd" @remove="onRemove">
        <v-tab-pane v-for="tabPane in tabPanes" :tab-key="tabPane.key" :key="tabPane.key" :tab="tabPane.tab">{{ tabPane.content }}</v-tab-pane>
   </v-tabs>
</template>

<script>
 export default {
    data() {
        return {
            keyIndex: 1,
            tabPanes: [
                {key: 'tab1', tab: '选项卡1', content: '选项卡1的内容'},
                {key: 'tab2', tab: '选项卡2', content: '选项卡2的内容'},
                {key: 'tab3', tab: '选项卡3', content: '选项卡3的内容'},
                {key: 'tab4', tab: '选项卡4', content: '选项卡4的内容'},
                {key: 'tab5', tab: '选项卡5', content: '选项卡5的内容'}
            ]
        }
    },
    methods: {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
