webpackJsonp([1],{"1d1M":function(e,r){},Quw4:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=o("0jG4"),t={data:function(){return{loginForm:{name:"",password:""},formRules:{name:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{onLogin:function(){var e=this;this.$refs.loginForm.validate(function(r){if(r){var o={user:e.loginForm.name,password:e.loginForm.password};Object(n.d)(o).then(function(r){(r.status="success")&&e.$router.push({path:"/list"})}).catch(function(r){e.$message.error(r&&r.message)})}})}}},s={render:function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",attrs:{model:e.loginForm,"label-width":"60px",rules:e.formRules}},[o("el-form-item",{attrs:{label:"账号",prop:"name"}},[o("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.loginForm.name,callback:function(r){e.$set(e.loginForm,"name",r)},expression:"loginForm.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.onLogin}},[e._v("登录")])],1)],1)},staticRenderFns:[]};var a=o("VU/8")(t,s,!1,function(e){o("1d1M")},null,null);r.default=a.exports}});
//# sourceMappingURL=1.js.map