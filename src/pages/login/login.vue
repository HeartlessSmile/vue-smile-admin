<template>
<div class="layout">
	<div class="centent">
		<h2>登录</h2>
		<div class="form">
			<div :class="bordertcolor">
				<span class="passtext">账户：</span>
				<input type="text" name="" @keyup="entry" @focus="textfocus" @blur="textblur" v-model="form.username" value="" placeholder="请输入用户名" />
			</div>
			<span>{{ nameErrors }}</span>
			<div :class="borderpcolor">
				<span class="passtext">登录密码</span>
				<input :type="types" @keyup="entry" name="" maxlength="12" @focus="typesfocus" v-model="form.password" @keyup.enter="submints" @blur="typesblur" id="password" value="" autocomplete="new-password" placeholder="请输入密码" />
				<i class="icon iconfont" :class="iconclass" @click="handleClick" style="float: right;cursor:pointer"></i>
			</div>
			<span>{{ pwdErrors }}</span>
			<Button :class="buttoncolor" type="primary" html-type="button" @click="submints" long>登录</Button>
		</div>
		<div class="footer">
			<!-- <span><router-link to="/register">免费注册</router-link></span> -->
			<!-- <span class="wjmm" @click="hrefs">忘记密码</span> -->
		</div>
		<!--<router-link to="/protocol">-->
		<div class="footer-b"></div>
		<!--</router-link>-->
	</div>
</div>
</template>
<script>
import {
	defaultRoute,
	menuRoute
} from '@/router/routers'
const menuData = [{
		"name": "countInfo",
		"children": [{
			"name": "countInfo_page",
		}]
	},
	{
		"name": "meetInfo",
		"children": [{
			"name": "basicInfo",
		}]
	},
	{
		"name": "receptionManage",
		"children": [{
			"name": "houseReception",
		}]
	},
    {
        "name": "_home",
		"children": [{
			"name": "home",
		}]
    }
]

export default {
	data() {
		return {
			types: "password",
			iconclass: "icon-iconcloseeye",
			bordertcolor: "focusborder",
			borderpcolor: "focusborder",
			selecttext: "+86",
			nbsp: "&nbsp;&nbsp;",
			nameErrors: "",
			pwdErrors: "",
			buttoncolor: "ivu-btn-primarys",
			form: {
				username: "",
				password: "",
			},
			arr: [],
			loginFlag: true
		}
	},
	mounted() {

	},
	methods: {

		hrefs() {
			this.$router.push({
				path: './forgetPwd'
			})
		},
		//登录前验证
		entry() {
			if (this.form.username == "") {
				this.buttoncolor = 'ivu-btn-primarys';
			} else if (this.form.password == "") {
				this.buttoncolor = 'ivu-btn-primarys';
			} else if (this.nameErrors == "用户不存在") {
				this.buttoncolor = 'ivu-btn-primarys';
			} else {
				this.buttoncolor = 'ivu-btn-primary';
			}
		},
		/**
		 * 点击登录按钮  登录验证
		 */
		submints() {
			let self = this;
			// 判断当前提交是否成功
			if (this.buttoncolor == 'ivu-btn-primarys') {
				return false
			}
			// 避免重复提交
			if (!this.loginFlag) {
				return false
			}
			// 前端判断输入是否符合规则
			if (!this.submintext()) {
				return false;
			}
			this.$router.push('/home')
			//假装获取到了请求的数据menuData

		},
		handleClick() {
			this.types == "password" ? this.types = "text" : this.types = "password";
			this.types == "password" ? this.iconclass = "icon-iconcloseeye" : this.iconclass = "icon-eye-fill";
		},
		textfocus() {
			this.bordertcolor = "blurborder"
		},
		searchHandle() {
			console.log(1)
		},
		textblur() {
			this.entry()
			this.bordertcolor = "focusborder"
			var myreg = /^\w+$/;
			if (this.form.username == "") {
				this.nameErrors = "请输入正确的用户名";
				this.bordertcolor = 'errorborder';
				return false;
			} else if (!myreg.test(this.form.username)) {
				this.nameErrors = "请输入正确的用户名";
				this.bordertcolor = 'errorborder';
				return false;
			} else {
				this.nameErrors = "";
				this.bordertcolor = 'focusborder';
				return true
			}
		},
		submintext() {
			var mima = /^\w+$/
			var myreg = /^\w+$/;
			if (this.form.username == "") {
				return false;
			} else if (this.form.password == "") {
				return false;
			} else if (!myreg.test(this.form.username)) {
				this.nameErrors = "请输入正确的用户名";
				this.bordertcolor = 'errorborder';
				return false;
			} else if (!mima.test(this.form.password)) {
				this.pwdErrors = "请输入正确的密码";
				this.borderpcolor = "errorborder";
				return false;
			} else {
				this.pwdErrors = "";
				this.borderpcolor = "focusborder";
				this.nameErrors = "";
				this.bordertcolor = 'focusborder';
				return true
			}
		},
		typesfocus() {
			this.borderpcolor = "blurborder"
		},
		typesblur() {
			this.entry()
			this.borderpcolor = "focusborder";
			// var mima = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
			var mima = /^\w+$/
			if ("" == this.form.password) {
				this.pwdErrors = "请输入密码";
				this.borderpcolor = "errorborder";
				return false;
			} else if (!mima.test(this.form.password)) {
				this.pwdErrors = "请输入正确的密码";
				this.borderpcolor = "errorborder";
				return false;
			} else {
				this.pwdErrors = "";
				this.borderpcolor = "focusborder";
				return true
			}
		}
	}
}
</script>
<style scoped>
@import "./style.css";

.footer span {
	width: 48px;
	height: 22px;
	font-size: 12px;
	font-family: PingFangSC-Regular;
	font-weight: 400;
	color: rgba(34, 83, 212, 1);
	line-height: 22px;
	display: inline-block;
	margin-top: 10px;
}

.ivu-btn-primarys {
	color: rgba(255, 255, 255, 1);
	background: rgba(223, 223, 223, 1);
	border: 1px solid rgba(223, 223, 223, 1);
}
</style>
