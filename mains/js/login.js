"use strict"
//请求接口
class Login{
			constructor() {
			    // this.url = "http://www.icodeilife.cn/ctrl/login.php";
				//   this.url="/fhy/api/logion.php";
				// this.url="/fhy/mains/jk/login.php";
				this.url="http://localhost/ajaxlogin/php/login.php";
				this.init();
			}
			init(){
				var that = this;
				$("#btn").on("click",function(){
					console.log(1)
					that.load();
				})
			}
			load(){
				var that = this;
				$.ajax({
					
					type:"post",
					url:this.url,
					data:{
						//传两个字段过去
						userName:$("#user").val(),
						passWord:$("#pass").val()
					},
					// dataType:"jsonp",
					//请求之后执行的函数结果
					success:function(res){
						switch(res.err){
							case "0":
								$("span").html("登陆成功,3秒进入首页");
								setTimeout(()=>{
									location.href = "index.html"
								},3000)
							case "1":
								$("span").html("用户名或密码不符");break;
							
						}
					}
				})
			}
		}
		
		new Login;



















