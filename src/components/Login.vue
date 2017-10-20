<template>

  <div class="login">

      <div class="login-form">

          <v-form direction="vertical">
            <v-form-item required >
                <v-input type="text" placeholder="用户名" size="large"></v-input>
            </v-form-item>
            <v-form-item  required>
                <v-input type="password" placeholder="密码" size="large"></v-input>
            </v-form-item>
            <v-form-item style="margin-top:24px">
                <v-button type="primary" @click="login()">登录</v-button>
            </v-form-item>
          </v-form>
      </div>
  </div>
</template>

<script>
    export default{
    
      data(){
        return {

        }
      },
      methods:{
         login:function(){
             sessionStorage.setItem('token','jg7899hggjggkihgjhgj');
             this.$router.push("/")
         }
      }
    }
</script>

<style lang="scss">

 .login{
     width:100%;
     height:100%;
     background: url('../assets/image/login1.jpg');
     position: absolute;
     .login-form{
         position: relative;
         top:200px;
         width:380px;
         height: 350px;
         margin:0 auto;
         button{
             width:100%
         }
     }
 }

</style>

