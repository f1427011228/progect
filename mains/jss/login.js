let userInp = document.getElementById("userName");
let pwdInp = document.getElementById("passWord");
let subBtn = document.getElementById("subBtn");
let registBtn = document.getElementById("registBtn");
let pwdTest = document.getElementById("pwdTest");
let userTest = document.getElementById("userTest");
let userInp_lock = false;
let pwdInp_lock = false;
registBtn.onclick = function() {
    window.location.href = "http://localhost:3000/pages/regist.html";
}
userInp.onblur = function() {
    $.ajax({
        type: "get",
        url: "/userTest",
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
    $.ajax({
        url: "/login",
        dataType: "json",
        type: "post",
        data: `username=${userInp.value}&password=${pwdInp.value}`,
        success: (res) => {
            if (res.error) {
                alert(res.data);
                // window.location.href = "http://localhost:3000/pages/index.html";
            } else {
                alert(res.data);
            }

        }
    })
}