import React, { useEffect } from 'react';

interface GleamWidgetProps {
  campaignId: string;
}

const GleamWidget: React.FC<GleamWidgetProps> = ({ campaignId }) => {
  useEffect(() => {
    // Create and append the widget container
    const container = document.createElement('a');
    container.className = 'e-widget no-button';
    container.href = `https://gleam.io/${campaignId}/watch-video-win-bitcoin`;
    container.setAttribute('rel', 'nofollow');
    
    const widgetContainer = document.getElementById('gleam-widget-container');
    if (widgetContainer) {
      widgetContainer.innerHTML = '';
      widgetContainer.appendChild(container);
    }

    // Load Gleam script
    const script = document.createElement('script');
    script.src = 'https://widget.gleamjs.io/e.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      if (widgetContainer) {
        widgetContainer.innerHTML = '';
      }
      document.querySelectorAll('script[src="https://widget.gleamjs.io/e.js"]').forEach(script => {
        script.remove();
      });
    };
  }, [campaignId]);

  return (
    <div 
      id="gleam-widget-container" 
      className="w-full min-h-[500px] bg-white rounded-lg shadow-md p-4 mb-6"
    />
  );
};

export default GleamWidget;