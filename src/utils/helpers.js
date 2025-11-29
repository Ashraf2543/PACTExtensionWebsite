export const trackDownload = (browser) => {
  // Analytics tracking for downloads
  if (window.gtag) {
    window.gtag('event', 'download', {
      'event_category': 'extension',
      'event_label': browser,
      'value': 1
    });
  }
  
  console.log(`Extension download initiated for: ${browser}`);
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};