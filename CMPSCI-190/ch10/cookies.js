function createCookie(name, values, days, path, domain, secure) {
    if (days) {
        var date = new Date();
        date.setTime( date.getTime() + (days*24*60*60*1000));
        var expires = date.toGMTString();
    }
    else var expires = "";
    cookieString = name + "=" + escape (values.join("#"));
    if (expires) cookieString +=   "; expires=" + expires;
    if (path) cookieString += "; path=" + escape (path);
    if (domain) cookieString += "; domain=" + escape (domain);
    if (secure) cookieString += "; secure";
    document.cookie = cookieString;
}


function getCookie(name) {
    var nameEquals = name + "=";
    var crumbs = document.cookie.split(';');
    for (var i = 0; i < crumbs.length; i++) {
      var crumb = crumbs[i];
      while (crumb.charAt(0) == ' ') {
        crumb = crumb.substring(1, crumb.length);
      }
      if (crumb.indexOf(nameEquals) == 0) {
        var value = unescape(crumb.substring(nameEquals.length, crumb.length));
        if (value.indexOf("#") != -1) {
          return value.split("#");
        } else {
          return [value];
        }
      }
    }
    return null;
  }
  

function deleteCookie(name) {
	createCookie(name,"",-1);
}
