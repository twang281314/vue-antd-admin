<template>
   <div>
      <ve-line :data="chartData" :settings="chartSettings"></ve-line>
   </div>
</template>
<script>
import lib from "../assets/js/lib.js"
export default {
  props: ['refresh'],
  data() {
    return {
      update: "",
      chartData : {
      columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
      rows: [
        { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
        { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
        { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
        { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
        { '日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
        { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
      ]
    }
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
    },
    openTab(key,label){
      this.$emit("childcreatetab",key,label)
    },
    closeTab(type){
      this.$emit("childclosetab",type)
    }
  },
  
  components: {}
}
</script>