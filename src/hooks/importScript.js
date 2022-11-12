import { useEffect } from 'react';

const importScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default importScript;

// import importScript from 'hooks/importScript';
// importScript('<enter_url>');