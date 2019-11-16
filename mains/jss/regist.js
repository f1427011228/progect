let userInp = document.getElementById("userName");
let pwdInp = document.getElementById("passWord");
let subBtn = document.getElementById("subBtn");
let loginBtn = document.getElementById("loginBtn");
let pwdTest = document.getElementById("pwdTest");
let userTest = document.getElementById("userTest");
let userInp_lock = false;
let pwdInp_lock = false;
loginBtn.onclick = function() {
    window.location.href = "http://localhost:3000/pages/login.html";
}
userInp.onblur = function() {
    if (!userInp.value) {
        userTest.innerHTML = "请输入用户名";
        return;
    }
    $.ajax({
        url: "/userTest",
        type: "get",
        dataType: "json",
        data: {
            username: userInp.value
        },
        success: (res) => {
            userTest.innerHTML = "";
            userTest.innerHTML = res.data;
            if (!res.error) {
                userInp_lock = true;
            } else {
                userInp_lock = false;
            }
        }
    })
}
subBtn.onclick = function() {
    if (pwdInp.value) {
        pwdInp_lock = true;
        pwdTest.innerHTML = "";
    } else {
        pwdInp_lock = false;
        pwdTest.innerHTML = "请输入密码";
        return;
    }
    $.ajax({
        url: "/regist",
        type: "post",
        dataType: "json",
        data: `username=${userInp.value}&password=${pwdInp.value}`,
        success: (res) => {
            if (res.error) {
                alert(res.data);
                window.location.href = "http://localhost:3000/pages/login.html";
            } else {
                alert(res.data + "请重新注册");
            }
        }
    })
}