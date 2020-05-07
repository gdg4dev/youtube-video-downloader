// Copyright 2019 Aniket gdg4dev@gmail.com



intax3 = setInterval(function(){
    if(window.ytads != null){
        window.ytads = null;
        window.ytPlayeronAdStateChangeplayer_uid_522287023_11 = null;
        window.Goog_AdSense_Lidar_getUrlSignalsArray = null;
        window.Goog_AdSense_Lidar_getUrlSignalsList = null;
        window.Goog_AdSense_Lidar_getViewability = null;
        window.Goog_AdSense_Lidar_sendVastEvent= null;
        _yt_player = null;
        clearInterval(intax3);
    };
  },1000);

document.getElementsByTagName("html")[0].setAttribute("dark", "");
var s = document.createElement("link");
s.setAttribute("rel", "stylesheet");
s.href = chrome.runtime.getURL("src/style.css");

s.id = "mycsss";
var sc = document.createElement("script");
sc.src = chrome.runtime.getURL("src/youtubedl.js");
sc.id = "myjs";


document.head.appendChild(sc);

document.head.appendChild(s);

window.addEventListener("message", function (e) {

    extensionId = 'gehfmemccbghpkjgnhjpomlohnfjnjdi'
    chrome.runtime.sendMessage( {
        'data': e.data
    });
    // chrome.downloads.download({url: e.data.url, filename: tl})
});


intax3 = setInterval(function(){
    if(window.ytads != null){
        window.ytads = null;
        window.ytPlayeronAdStateChangeplayer_uid_522287023_11 = null;
        window.Goog_AdSense_Lidar_getUrlSignalsArray = null;
        window.Goog_AdSense_Lidar_getUrlSignalsList = null;
        window.Goog_AdSense_Lidar_getViewability = null;
        window.Goog_AdSense_Lidar_sendVastEvent= null;
        _yt_player = null;
        clearInterval(intax3);
    };
  },1000);

