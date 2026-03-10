import { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent-overlay">
            <div className="cookie-consent">
                <div className="cookie-consent-content">
                    <h4>本網站使用 Cookies</h4>
                    <p>
                        我們使用 cookies 來提供最佳的網站體驗，包含分析流量以及提供個人化內容。
                        繼續使用本網站即代表您同意我們使用 cookies。
                    </p>
                </div>
                <div className="cookie-consent-actions">
                    <button className="btn-accept" onClick={handleAccept}>
                        我同意
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
