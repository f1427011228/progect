function getCookie(key){
    let strCookie = document.cookie.replace(/\s+/g, "");
    let arrCookie = strCookie.split(";");
    for(var i = 0; i < arrCookie.length; i++){
        if(arrCookie[i].split("=")[0] === key){
            return arrCookie[i].split("=")[1];
        }
    }
}