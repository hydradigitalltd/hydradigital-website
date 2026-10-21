import { useEffect, useState } from "react";

const ACCEPT_KEY = "cookies-accepted";
const REJECT_KEY = "cookies-rejected";

type Gtag = (...args: unknown[]) => void;

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {}
}

/** Consent Mode v2 update. The denied defaults are set inline in index.html. */
function updateConsent(value: "granted" | "denied") {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== "function") return;
  gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}

/**
 * Cookie banner for GA4. Renders nothing on the server and on first client
 * render, so the prerendered HTML and hydration always agree; it only appears
 * after mount, and only if the visitor has not chosen yet.
 */
export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (read(ACCEPT_KEY) === "true") updateConsent("granted");
    else if (read(REJECT_KEY) !== "true") setOpen(true);
  }, []);

  if (!open) return null;

  const choose = (accepted: boolean) => {
    write(accepted ? ACCEPT_KEY : REJECT_KEY, "true");
    write(accepted ? REJECT_KEY : ACCEPT_KEY, null);
    updateConsent(accepted ? "granted" : "denied");
    setOpen(false);
  };

  return (
    <div className="cookie" role="region" aria-label="Cookie consent">
      <p className="cookie__text">
        We use cookies to understand how people use this site and improve it.
      </p>
      <div className="cookie__buttons">
        <button type="button" className="cookie__btn cookie__btn--accept" onClick={() => choose(true)}>
          Accept
        </button>
        <button type="button" className="cookie__btn" onClick={() => choose(false)}>
          Reject
        </button>
      </div>
    </div>
  );
}
