<template>
   <div>
      <v-form direction="horizontal">
        <v-form-item label="失败校验" :label-col="labelCol" :wrapper-col="wrapperCol" help="请输入数字和字母的组合" validate-status="error">
            <v-input value="无效选择" size="large"></v-input>
        </v-form-item>
        <v-form-item label="警告校验" :label-col="labelCol" :wrapper-col="wrapperCol" validate-status="warning">
            <v-input value="前方高能预警" size="large"></v-input>
        </v-form-item>
        <v-form-item label="校验中" :label-col="labelCol" :wrapper-col="wrapperCol" help="信息审核中..." has-feedback validate-status="validating">
            <v-input value="我是被校验的内容" size="large"></v-input>
        </v-form-item>
        <v-form-item label="成功校验" :label-col="labelCol" :wrapper-col="wrapperCol" has-feedback validate-status="success">
            <v-input value="我是正文" size="large"></v-input>
        </v-form-item>
        <v-form-item label="警告校验" :label-col="labelCol" :wrapper-col="wrapperCol" has-feedback validate-status="warning">
            <v-input value="前方高能预警" size="large"></v-input>
        </v-form-item>
        <v-form-item label="失败校验" :label-col="labelCol" :wrapper-col="wrapperCol" help="请输入数字和字母的组合" has-feedback validate-status="error">
            <v-input value="无效选择" size="large"></v-input>
        </v-form-item>
    </v-form>
     <h1>产品--安卓</h1>
     <h4>最近一次刷新：{{update}}</h4>
   </div>
</template>
<script>
import lib from "../assets/js/lib.js"
export default {
  props: ['refresh'],
  data() {
    return {
      update: ""
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
