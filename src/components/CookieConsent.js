import { useEffect, useState } from 'react';
import './CookieConsent.css';

const COOKIE_CONSENT_NAME = 'cookieConsent';

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie(COOKIE_CONSENT_NAME);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(COOKIE_CONSENT_NAME, 'accepted', 30);
    setIsVisible(false);
  };

  const handleReject = () => {
    setCookie(COOKIE_CONSENT_NAME, 'rejected', 30);
    setIsVisible(false);
  };

  const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-consent-banner">
      <p>
        We use cookies to enhance your experience on our site. By clicking "Accept", you agree to our use of cookies. You can choose to reject cookies if you prefer.
      </p>
      <div className="cookie-buttons">
        <button className="accept-button" onClick={handleAccept}>Accept</button>
        <button className="reject-button" onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
}

export default CookieConsent;
