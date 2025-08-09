import { useEffect } from "react";

declare global {
  interface Window {
    ml?: (...args: any[]) => void;
  }
}

function JoinWaitlist() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.ml) {
        console.log("MailerLite script ready");
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (typeof window.ml === "function") {
      console.log("Show MailerLite form popup");
      window.ml("show", "13BKhn", true);
    } else {
      console.error("MailerLite not ready");
    }
  };

  return (
    <section className="bg-white text-black py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Join the Fight Tally Waitlist</h2>
      <p className="mb-6 text-gray-700">
        Be the first to know when we launch. No spam, ever.
      </p>
      <button onClick={handleClick}>Join the Waitlist</button>

      {/* Add the form container for MailerLite */}
      <div className="ml-embedded" data-form="13BKhn"></div>
    </section>
  );
}

export default JoinWaitlist;
