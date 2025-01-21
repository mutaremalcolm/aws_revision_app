'use client';

import { useEffect } from 'react';

const GoogleAnalytics = () => {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://aws-revision-cyad5c6ov-mutaremalcolms-projects.vercel.app/`;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V61R2YNFCC');
        `;
        document.head.appendChild(script2);
    }, []);

    return null;
};

export default GoogleAnalytics;