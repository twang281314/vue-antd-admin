<template>
   <div>
      <v-select style="width: 200px" :data="groupOpt" :value="'lp'"></v-select>
    <v-select style="width: 200px" multiple :data="groupOpt" :value="['lp']"></v-select>
     <h1>关于</h1>
     <h4>最近一次刷新：{{update}}</h4>
   </div>
</template>
<script>
import lib from "../assets/js/lib.js"
export default {
  props: ['refresh'],
  data: function() {
    return {
      update: "",
           groupOpt: [{
                label: '重庆',
                options: [{
                    value: 'lp',
                    label: '梁平'
                }, {
                    value: 'wz',
                    label: '万州',
                    disabled: true
                }]
            }, {
                label: '四川',
                options: [{
                    value: 'cd',
                    label: '成都'
                }, {
                    value: 'dz',
                    label: '达州'
                }]
            }]
    }
  },
  activated: function() {
    if (this.refresh) {
      this.init();
    }
  },
  methods: {
    init() {
      this.update = lib.dateFormat(new Date(), "hh:mm:ss");
    }

  },
  components: {}
}
</script>
