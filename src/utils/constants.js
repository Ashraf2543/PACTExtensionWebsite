export const FEATURES = [
  {
    id: 1,
    title: 'Tab & Desktop Switching Detection',
    description: 'Monitors and records any attempts to switch between browser tabs, applications, or desktop environments during the exam.',
    icon: 'tab-detection.svg'
  },
  {
    id: 2,
    title: 'Copy/Paste Detection',
    description: 'Detects and logs any copy-paste activities, preventing unauthorized content transfer during the examination.',
    icon: 'copy-paste-detection.svg'
  },
  {
    id: 3,
    title: 'Screenshot Detection',
    description: 'Identifies and records any screenshot attempts to prevent question leakage and maintain exam integrity.',
    icon: 'screenshot-detection.svg'
  },
  {
    id: 4,
    title: 'AI Tool Detection',
    description: 'Monitors for usage of AI assistance tools and automated help systems during the exam session.',
    icon: 'ai-detection.svg'
  },
  {
    id: 5,
    title: 'Virtual Machine Detection',
    description: 'Detects if the exam is being taken through virtual machines or emulated environments.',
    icon: 'vm-detection.svg'
  },
  {
    id: 6,
    title: 'Multiple Screen Detection',
    description: 'Identifies the use of multiple monitors or extended display setups during the examination.',
    icon: 'multi-screen-detection.svg'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How does the extension work?',
    answer: 'The extension runs in the background during your online exam and monitors various activities that could indicate academic dishonesty. All data is collected locally and only sent to your institution when you submit the exam.'
  },
  {
    question: 'Is my privacy protected?',
    answer: 'Yes, the extension only collects data relevant to exam integrity. No personal files, emails, or unrelated browsing data are accessed or stored. All data is encrypted and transmitted securely.'
  },
  {
    question: 'What browsers are supported?',
    answer: 'The extension currently supports Chrome, Firefox, and Edge browsers on Windows, macOS, and Linux operating systems.'
  },
  {
    question: 'Can I preview what data is collected?',
    answer: 'Yes, before submitting your exam, you can review the collected monitoring data to understand what information will be sent to your institution.'
  },
  {
    question: 'What happens if I accidentally trigger a detection?',
    answer: 'The extension records context and timing. Your institution will review the data and understand accidental triggers versus intentional cheating attempts.'
  }
];

export const DOWNLOAD_LINKS = {
  chrome: '/extension/exam-monitor-extension.zip',
  firefox: '/extension/exam-monitor-extension.zip',
  edge: '/extension/exam-monitor-extension.zip',
  guide: '/extension/extension-setup-guide.pdf'
};