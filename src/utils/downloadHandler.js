import { trackDownload } from './helpers';
import { DOWNLOAD_LINKS } from './constants';

export const handleExtensionDownload = (browser = 'chrome') => {
  trackDownload(browser);
  
  const downloadUrl = DOWNLOAD_LINKS[browser] || DOWNLOAD_LINKS.chrome;
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = `exam-monitor-extension-${browser}.zip`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const handleGuideDownload = () => {
  trackDownload('guide');
  
  const link = document.createElement('a');
  link.href = DOWNLOAD_LINKS.guide;
  link.download = 'exam-monitor-setup-guide.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};