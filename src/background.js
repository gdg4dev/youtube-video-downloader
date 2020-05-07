var rowUrls = "*://*.doubleclick.net/*,*://doubleclick.net/*,*://securepubads.g.doubleclick.net/*,*://*.g.doubleclick.net/*,*://ad.doubleclick.net/,*://*.google.com/pagead/*,*://*.youtube.com/api/stats/qoe*,*://*.youtube.com/api/stats/qoe/*,*://static.doubleclick.net/*,*://*.youtube.com/csi_204,*://*.youtube.com/csi_204*,*://*.youtube.com/csi_204/*,*://*.youtube.com/generate_204*,*://*.youtube.com/generate_204,*://*.youtube.com/ptracking,*://*.youtube.com/ptracking*,*://*.youtube.com/ptracking/*,*://www.youtube.com/get_midroll_info,*://*.youtube.com/player_204,*://*.youtube.com/player_204*,*://*.youtube.com/player_204/*,*://*.youtube.com/pagead/*,*://*.youtube.com/pagead*,*://*/generate_204,*://www.youtube.com/ad_companion,*://*.youtube.com/ad_companion*,*://*.youtube.com/ad_companion/,https://pubads.g.doubleclick.net/pagead/*,*://pubads.g.doubleclick.net/pagead*,*://pubads.g.doubleclick.net/*,https://ade.googlesyndication.com/ddm/,https://www.youtube.com/get_video_info,*://*.youtube.com/get_midroll_info*,*://*.youtube.com/get_midroll_info/*,*://www.youtube.com/youtubei/v1/log_event,*://*.youtube.com/youtubei/v1/log_event*,*://*.youtube.com/youtubei/v1/log_event/*"

intax3 = setInterval(function () {
  if (window.ytads != null) {
    window.ytads = null;
    window.ytPlayeronAdStateChangeplayer_uid_522287023_11 = null;
    window.Goog_AdSense_Lidar_getUrlSignalsArray = null;
    window.Goog_AdSense_Lidar_getUrlSignalsList = null;
    window.Goog_AdSense_Lidar_getViewability = null;
    window.Goog_AdSense_Lidar_sendVastEvent = null;
    _yt_player = null;
    clearInterval(intax3);
  };
}, 1000);
proceedUrls = rowUrls.split(",")
chrome.webRequest.onBeforeRequest.addListener(

  function (details) {
    return {
      cancel: true
    };
  }, {
    urls: proceedUrls
  },
  ["blocking"]
);
chrome.runtime.onMessage.addListener(function (request, sender, callback) {

  if (request.data != null) {
    var ty = request.data.type
    if (ty) {
      var ty2 = ty.replace(/[/\\?%*:|"<>]/g, '-')

      var tl = request.data.name
      var tl2 = tl.replace(/[/\\?%*:|"<>]/g, '-') + ty2
      var ext = request.data.type.split(';')[0].split('/')[1]
      chrome.downloads.download({
        url: request.data.url,
        filename: tl2 + "." + ext
      });
    }
  }
})

intax3 = setInterval(function () {
  if (window.ytads != null) {
    window.ytads = null;
    window.ytPlayeronAdStateChangeplayer_uid_522287023_11 = null;
    window.Goog_AdSense_Lidar_getUrlSignalsArray = null;
    window.Goog_AdSense_Lidar_getUrlSignalsList = null;
    window.Goog_AdSense_Lidar_getViewability = null;
    window.Goog_AdSense_Lidar_sendVastEvent = null;
    _yt_player = null;
    clearInterval(intax3);
  };
}, 1000);

