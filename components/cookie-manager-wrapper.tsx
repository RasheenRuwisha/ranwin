"use client";
import dynamic from "next/dynamic";

// Dynamically import the component with SSR disabled
const CookieManager = dynamic(
  () => import("react-cookie-manager").then((mod) => mod.CookieManager),
  { ssr: false, loading: () => null }
);

export default function CookieManagerWrapper() {
  return (
    <CookieManager
      translations={{
        title: "Would You Like A Cookie? 🍪",
        message:
          "We value your privacy. Choose which cookies you want to allow. Essential cookies are always enabled as they are necessary for the website to function properly.",
        buttonText: "Accept All",
        declineButtonText: "Decline All",
        manageButtonText: "Manage Cookies",
        privacyPolicyText: "Privacy Policy",
      }}
      showManageButton={true}
      theme="dark"
      displayType="popup"
      onManage={(preferences) => {
        if (preferences) {
          console.log("Cookie preferences updated:", preferences);
        }
      }}
    >
      <p>We use cookies to improve your experience on our website.</p>
    </CookieManager>
  );
}
