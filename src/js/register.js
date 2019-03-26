window.onload = function() {
	//正则
	var txt = document.getElementById("txt");
	var s3 = document.getElementById("s3");
	var flagname = null;
	txt.onblur = function() {
		var utxt = this.value
		var reg = /\1(3|5|7|8)\d{9}$/;
		var gc = getCookie("uname")
		var flag = true;
		for(var i = 0; i < gc.length; i++) {
			if(gc[i].pid == txt.value) {
				flag = false;
				alert("用户已注册")
				break;
			}
		}
		
		if(flag) {
			if(reg.test(utxt)) {
				s3.innerHTML = "√"
				// var un=txt.value
				flagname = true;
			} else {
				s3.innerHTML = "用户不正确"
				flagname = false;
			}
		}

	}

	var flagtel = null;
	var txt1 = document.getElementById("txt1");
	var s4 = document.getElementById("s4")
	txt1.onblur = function() {
		var utxt1 = this.value
		var reg = /^\w{6,6}$/;
		if(reg.test(utxt1)) {
			s4.innerHTML = "√"
			flagtel = true;
		} else {
			s4.innerHTML = "验证码错误"
			flagtel = false;
		}
	}

	var pwd = document.getElementById("pwd");
	var s1 = document.getElementById("s1");
	var flagpwd = null;
	pwd.onblur = function() {
		var upwd = this.value
		var reg = /^\w{6,}$/;
		if(reg.test(upwd)) {
			s1.innerHTML = "✔"
			//var pd=pwd.value;
			flagpwd = true;
		} else {
			s1.innerHTML = "用户密码不能少于6位数"
			flagpwd = false;
		}
	}
	var surepwd = document.getElementById("surepwd");
	var s2 = document.getElementById("s2");
	var flagsrpwd = null;
	surepwd.onblur = function() {
		var val = this.value;
		if(val == pwd.value && val != "") {
			s2.innerHTML = "√"
			flagsrpwd = true;
		} else {
			s2.innerHTML = "两次密码不一致"
			flagsrpwd = false;
		}
	}
	var flagcheck = null;
	$("input[type='checkbox']").click(function() {
		var co = $("input[type='checkbox']").prop("checked")
		//alert(co)
		if(co) {
			$(".zc").css("background", "red")
			flagcheck = true;
		} else {
			$(".zc").css("background", "#9a9a9a")
			flagcheck = false;
		}

	})
	if(getCookie("uname")) {
		var arr = getCookie("uname")
	} else {
		var arr = [];
	}
	var zc = document.getElementsByClassName("zc")[0];
	zc.onclick = function() {
		if(flagcheck) { //如果注册按钮为红色的时候，可以点击，如果变黑，不可点击
			if(flagname && flagtel && flagpwd && flagsrpwd) { //如果用户名、验证码、密码、
				/* return true;
				location.href="login.html"; */
				//确认密码都正确，那么存setcook
				var json = { //把注册页面上的用户名和密码都放在json里面
					"pid": txt.value,
					"pwd": pwd.value
				}
				arr.push(json) //把json push到数组里
				setCookie("uname", JSON.stringify(arr)) //然后把数组转成成字符串								
			} else {

			}
		} else {
			return;
		}

	}

}