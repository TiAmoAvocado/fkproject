//存 cookie  document.cookie = "键=值"  时间
function setCookie(name,val,day){
	var d = new Date();
	d.setDate(d.getDate() + day);
	document.cookie = name + "=" + val + ";expires=" +  d;
}

//取cookie
function getCookie(name){
	
	var str = document.cookie;//uname=张三; upwd=123456;
	var arr = str.split("; "); // [uname=张三，upwd=123456];
	for(var i = 0; i < arr.length; i++){
		var cur = arr[i].split("=");
		if(cur[0] == name){
			return  JSON.parse(cur[1]);
		}
	}
	
	return "";
	
}

// 删除cookie  设置cookie的时候给个过期时间
function removeCookie(name){   
	setCookie(name,"",-1);
}
