/*<![CDATA[*/
function Lazy__iframe(div) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/" + div.dataset.id + "?autoplay=1&amp;rel=0"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  );
  div.parentNode.replaceChild(iframe, div);
}
function initYouTubeVideos() {
  var playerElements = document.getElementsByClassName("youtube-player");
  for (var n = 0; n < playerElements.length; n++) {
    var videoId = playerElements[n].dataset.id;
    var div = document.createElement("div");
    div.setAttribute('data-id', videoId);
    var thumbNode = document.createElement("img");
    thumbNode.src = "https://i.ytimg.com/vi_webp/" + videoId + "/hqdefault.webp";
    thumbNode.alt = "video Tutorial on Youtube"; // set your alt attribute
    div.appendChild(thumbNode);
    var playButton = document.createElement("div");
    playButton.setAttribute("class", "play");
    div.appendChild(playButton);
    div.onclick = function () {
      Lazy__iframe(this);
    };
    playerElements[n].appendChild(div);
  }
}
document.addEventListener("DOMContentLoaded", initYouTubeVideos);
/*]]>*/
