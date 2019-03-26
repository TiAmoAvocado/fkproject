window.onload = function() {
	var txt = document.getElementById("txt");
	var pwd = document.getElementById("pwd");
	var lg = document.getElementsByClassName("lg")[0];
	lg.onclick = function() {
		//alert(1)
		var qu = getCookie("uname");
		var flag = false;
		for(var i = 0; i < qu.length; i++) {
			if(qu[i].pid == txt.value && qu[i].pwd == pwd.value) {
				flag = true;
				break;
			}
		}
		
		
		if(flag){
			alert("登陆成功")
	}
	else {
		alert("登陆失败")
	}
	}
	var s1=document.getElementById("s1");
	txt.onblur=function(){
		//alert(1)
		var gc=getCookie("uname")
		var flag=true;
		for(var i=0;i<gc.length;i++){
			if(gc[i].pid==txt.value){
				s1.innerHTML="√";
				flag=false;
				break;
			}
		}
		if(flag){
			s1.innerHTML="用户名不存在，请去注册"
		}
	}
	
}