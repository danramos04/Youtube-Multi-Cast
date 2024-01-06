// content.js
chrome.storage.sync.get(['youtubeUrl'], function(result) {
  const youtubeUrl = result.youtubeUrl || 'https://www.youtube.com';
  
  // Top left corner
  createYouTubeIframe('topLeft', youtubeUrl);

  // Top right corner
  createYouTubeIframe('topRight', youtubeUrl);

  // Bottom left corner
  createYouTubeIframe('bottomLeft', youtubeUrl);

  // Bottom right corner
  createYouTubeIframe('bottomRight', youtubeUrl);
});


function createYouTubeIframe(containerId, videoUrl) {
  const container = document.getElementById(containerId);
  const iframe = document.createElement('iframe');
  iframe.src = videoUrl;
  iframe.width = 1920;
  iframe.height = 1080;
  iframe.allowFullscreen = true;

  iframe.style.cssText = 

  container.appendChild(iframe);
}