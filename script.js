//your JS code here. If required.
const browserInfo = document.getElementById("browser-info");

const browserName = navigator.appName;
const version = navigator.appVersion;

browserInfo.innerText = "You are using " + browserName + " version " + version;
