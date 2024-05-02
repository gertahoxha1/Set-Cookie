function setCookie(name, value, days) {
var expires = "";
if (days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
}
document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function getCookie(name) {
let nameEQ = name + "=";
let decodedCookie = decodeURIComponent(document.cookie);
let ca = decodedCookie.split(';');
for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
     while (c.charAt(0) == ' ') {
       c = c.substring(1);
}
if (c.indexOf(name) == 0) {
     return c.substring(name.length, c.length);
 }
}

return "";
}

function checkCookie() {
    let user = getCookie("username");
     if (user != "") {
         alert("Welcome again " + user);
     }

else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
        setCookie("username", user, 365);
    }
}
}

