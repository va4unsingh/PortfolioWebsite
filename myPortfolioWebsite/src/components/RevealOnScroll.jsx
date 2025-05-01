import React, { useEffect, useRef, useState } from "react";

function RevealOnScroll({ children }) {
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if the device is desktop (not mobile)
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1100);
    };
    // Check on initial render
    checkDevice();

    // Add listener for window resize
    window.addEventListener("resize", checkDevice);

    // Only setup the observer if we're on desktop
    if (isDesktop && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.current.classList.add("visible");
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
      );

      observer.observe(ref.current);

      // Clean up observer on unmount
      return () => {
        observer.disconnect();
        window.removeEventListener("resize", checkDevice);
      };
    }

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, [isDesktop]); // Re-run when isDesktop changes

  // Only apply the reveal class on desktop
  const className = isDesktop ? "reveal" : "";

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default RevealOnScroll;
