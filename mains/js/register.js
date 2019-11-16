"use strict"
//注册
// class Register{
// 			constructor() {
// 				// this.url = "http://www.icodeilife.cn/ctrl/register.php";
// 				this.url="localhost/pages/regist.html";
// 				this.init();
// 			}
// 			init(){
// 				var that = this;
// 				$("#btn").click(function(){
// 					that.load();
// 				})
// 			}
// 			load(){
// 				$.ajax({
// 					url:this.url,
// 					success:function(res){
// 						switch(res){
// 							case "0":
// 								$(".tes").html("手机号重复");break;
// 							case "1":
// 								$(".tes").html("注册成功，3秒后跳转到登陆");
// 								setTimeout(()=>{
// 									location.href = "login.html"
// 								},3000)
// 								break;
// 							case "2":i
// 								$(".tes").html("数据不全");break;
// 						}
// 					},
// 					data:{
// 						tel:$("#user").val(),
// 						pass:$("#pass").val()
// 					}
// 				})
// 			}
// 		}
// 		new Register;

// class Verification {
// 	constructor() {
// 		//选择元素
// 		this.ouserOff = otxtOff = opassOff = false;
// 		//绑定事件
// 		this.init();
// 	}
// 	init(){
	// 		
	// 	}
	// 	
	// }
	// $("#btn").click(function () {
		
		// }
	var	ouser = document.getElementById("user");
	var	otxt = document.getElementById("txt");
	var	opass = document.getElementById("pass");
	var	obtn = document.getElementById("btn")
 var arr;
      arr = getCookie("user") ? JSON.parse(getCookie("user")) : [];
   obtn.onclick = function () {
	var off = false;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].user == ouser.value) {
				alert("用户名已存在")
				off = false;
				break;
			}
		

		if (!off) {
			arr.push({
				user: ouser.value,
				pass: opass.value
			})
			setCookie("user", JSON.stringify(arr));
			off = true;
			alert("注册成功，去登录")
		}
	}

	if (off) {
		setTimeout(() => {
		 location.href = "login.html"				
		},3000)
	}
}







