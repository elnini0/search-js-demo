'use client';

import { useEffect } from 'react';

export default function SyteScript() {
  useEffect(() => {
    // Load the main Syte script
    const script = document.createElement('script');
    script.src = "https://syteapi.com/assets/textual-search/syte_textual_search_loader.js?account_id=10803&sig=67d96545d6f2654f7793f982&lang=en_AU&feed=bestandless_au";
    script.async = true;
    document.head.appendChild(script);

    // Load the Syte image search script
    const imageScript = document.createElement('script');
    imageScript.src = "https://cdn.syteapi.com/assets/image-search/syte_image_search_loader.js?account_id=10803&sig=67d96545d6f2654f7793f982&lang=en_AU&feed=bestandless_au";
    imageScript.async = true;
    document.head.appendChild(imageScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(imageScript);
    };
  }, []);

  return null;
} 