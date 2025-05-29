import { useEffect } from 'react';

const TawkMessenger = () => {
  useEffect(() => {
    // Tawk.to Integration Script
    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();
    
    (function(){
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/683894c870b16107011a0604/1isegacn1';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();

   
  }, []);

  return null;
};

export default TawkMessenger;