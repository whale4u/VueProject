<template>
  <div id="root">
    用户名：<br>
    <input v-model="uname"> <br>
    密码：<br>
    <input v-model="upass"> <br>
    <button @click="submitForm">submit</button>
    <button type="reset">reset</button> <br>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
      name: 'Home',
      data() {
          return {
            uname: '',
            upass: ''};
      },
      methods: {
          submitForm: function () {
            //   alert("submitForm")
            // alert(this.uname + ' ' + this.upass)
            var self = this;
            var params = new URLSearchParams();
            params.append('uname', this.uname);
            params.append('upass', this.upass);
            axios.post('http://localhost:8888/MyLoginDemo_war_exploded/validate', params)
            .then(function (response) {
                // console.log(response.data);
                var num = response.data
                var ses= window.sessionStorage;  
                if (num == 0) {
                  var token = "xxxxxx";
                  ses.setItem('data', token);
                  self.$router.push({path:'/list'});
                } else {
                  alert(num);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
          }
      }
  }
</script>

<style>
</style>