<template>
   <div>
       <mavon-editor v-model="value"/>
   </div>
</template>
<script>
import lib from "../assets/js/lib.js"
export default {
  props: ['refresh'],
  data: function() {
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
