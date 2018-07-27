window.onload=timeout;
function timeout() {
    window.setTimeout("redirect()", 4000) // 4 seconds
};

function redirect() {
    window.location="location.html"
};
