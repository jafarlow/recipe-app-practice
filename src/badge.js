// NOTE: This is pulled from the Edamam site and parsed by hand into something more readable by me.

// rather than importing a script, I can write this directly into the app to serve it more quickly.

// deciding right now if I should write this directly into the app, or if I should make this its own React component
// probably will just write it into the Footer component, to be honest

!function(){
  function attr() {
    var
      tag,
      attr = document.getElementById("edamam-badge"),
      elem = attr.getAttribute("data-color"),
      url = "https://developer.edamam.com/images/";

    switch(elem) {
      case "light":
        tag = "light.png";
        break;
      case "badge":
        tag = "badge.png";
        break;
      case"dark":
        tag = "dark.png";
        break;
      case"white":
        tag = "white.png";
        break;
      case"transparent":
        tag = "transparent.png";
        break;
      default:
        tag = "transparent.png";
    }

    tag	= '<a href="https://www.edamam.com" title="Powered by Edamam" target="_blank"><img alt="Powered by Edamam" src="'+url+tag+'" height="40" width="200" /></a>',
    attr.innerHTML = tag;
  }
  window.onload=function(){attr();}
}();
